"""
Auth Component for Smart Home - The Next Generation.

Smart Home - TNG is a Home Automation framework for observing the state
of entities and react to changes. It is based on Home Assistant from
home-assistant.io and the Home Assistant Community.

Copyright (c) 2022-2023, Andreas Nixdorf

This program is free software: you can redistribute it and/or
modify it under the terms of the GNU General Public License as
published by the Free Software Foundation, either version 3 of
the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public
License along with this program.  If not, see
http://www.gnu.org/licenses/.
"""

import asyncio
import html.parser
import ipaddress
import logging
import typing
from urllib.parse import urljoin, urlparse

import aiohttp

from ... import core

_LOGGER: typing.Final = logging.getLogger(__name__)

# pylint: disable=unused-variable


async def verify_redirect_uri(shc: core.SmartHomeController, client_id, redirect_uri):
    """Verify that the client and redirect uri match."""
    try:
        client_id_parts = _parse_client_id(client_id)
    except ValueError:
        return False

    redirect_parts = _parse_url(redirect_uri)

    # Verify redirect url and client url have same scheme and domain.
    is_valid = (
        client_id_parts.scheme == redirect_parts.scheme
        and client_id_parts.netloc == redirect_parts.netloc
    )

    if is_valid:
        return True

    # Whitelist the iOS and Android callbacks so that people can link apps
    # without being connected to the internet.
    if redirect_uri == "smart-home-controller://auth-callback" and client_id in (
        "https://home-assistant.io/android",
        "https://home-assistant.io/iOS",
    ):
        return True

    # IndieAuth 4.2.2 allows for redirect_uri to be on different domain
    # but needs to be specified in link tag when fetching `client_id`.
    redirect_uris = await fetch_redirect_uris(shc, client_id)
    return redirect_uri in redirect_uris


class _LinkTagParser(html.parser.HTMLParser):
    """Parser to find link tags."""

    def __init__(self, rel):
        """Initialize a link tag parser."""
        super().__init__()
        self.rel = rel
        self.found = []

    def handle_starttag(self, tag, attrs):
        """Handle finding a start tag."""
        if tag != "link":
            return

        attrs = dict(attrs)

        if attrs.get("rel") == self.rel:
            self.found.append(attrs.get("href"))


async def fetch_redirect_uris(_shc: core.SmartHomeController, url: str):
    """Find link tag with redirect_uri values.

    IndieAuth 4.2.2

    The client SHOULD publish one or more <link> tags or Link HTTP headers with
    a rel attribute of redirect_uri at the client_id URL.

    We limit to the first 10kB of the page.

    We do not implement extracting redirect uris from headers.
    """
    parser = _LinkTagParser("redirect_uri")
    chunks = 0
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url, timeout=5) as resp:
                async for data in resp.content.iter_chunked(1024):
                    parser.feed(data.decode())
                    chunks += 1

                    if chunks == 10:
                        break

    except asyncio.TimeoutError:
        _LOGGER.error(f"Timeout while looking up redirect_uri {url}")
    except aiohttp.client_exceptions.ClientSSLError:
        _LOGGER.error(f"SSL error while looking up redirect_uri {url}")
    except aiohttp.client_exceptions.ClientOSError as ex:
        _LOGGER.error(f"OS error while looking up redirect_uri {url}: {ex.strerror}")
    except aiohttp.client_exceptions.ClientConnectionError:
        _LOGGER.error(f"Low level connection error while looking up redirect_uri {url}")
    except aiohttp.client_exceptions.ClientError:
        _LOGGER.error(f"Unknown error while looking up redirect_uri {url}")

    # Authorization endpoints verifying that a redirect_uri is allowed for use
    # by a client MUST look for an exact match of the given redirect_uri in the
    # request against the list of redirect_uris discovered after resolving any
    # relative URLs.
    return [urljoin(url, found) for found in parser.found]


def verify_client_id(client_id):
    """Verify that the client id is valid."""
    try:
        _parse_client_id(client_id)
        return True
    except ValueError:
        return False


def _parse_url(url):
    """Parse a url in parts and canonicalize according to IndieAuth."""
    parts = urlparse(url)

    # Canonicalize a url according to IndieAuth 3.2.

    # SHOULD convert the hostname to lowercase
    parts = parts._replace(netloc=parts.netloc.lower())

    # If a URL with no path component is ever encountered,
    # it MUST be treated as if it had the path /.
    if parts.path == "":
        parts = parts._replace(path="/")

    return parts


def _parse_client_id(client_id):
    """Test if client id is a valid URL according to IndieAuth section 3.2.

    https://indieauth.spec.indieweb.org/#client-identifier
    """
    parts = _parse_url(client_id)

    # Client identifier URLs
    # MUST have either an https or http scheme
    if parts.scheme not in ("http", "https"):
        raise ValueError()

    # MUST contain a path component
    # Handled by url canonicalization.

    # MUST NOT contain single-dot or double-dot path segments
    if any(segment in (".", "..") for segment in parts.path.split("/")):
        raise ValueError(
            "Client ID cannot contain single-dot or double-dot path segments"
        )

    # MUST NOT contain a fragment component
    if parts.fragment != "":
        raise ValueError("Client ID cannot contain a fragment")

    # MUST NOT contain a username or password component
    if parts.username is not None:
        raise ValueError("Client ID cannot contain username")

    if parts.password is not None:
        raise ValueError("Client ID cannot contain password")

    # MAY contain a port
    try:
        # parts raises ValueError when port cannot be parsed as int
        parts.port
    except ValueError as ex:
        raise ValueError("Client ID contains invalid port") from ex

    # Additionally, hostnames
    # MUST be domain names or a loopback interface and
    # MUST NOT be IPv4 or IPv6 addresses except for IPv4 127.0.0.1
    # or IPv6 [::1]

    # We are not goint to follow the spec here. We are going to allow
    # any internal network IP to be used inside a client id.

    address = None

    try:
        netloc = parts.netloc

        # Strip the [, ] from ipv6 addresses before parsing
        if netloc[0] == "[" and netloc[-1] == "]":
            netloc = netloc[1:-1]

        address = ipaddress.ip_address(netloc)
    except ValueError:
        # Not an ip address
        pass

    if address is None or core.helpers.is_local(address):
        return parts

    raise ValueError("Hostname should be a domain name or local IP address")
