"""
Dashboards Component for Smart Home - The Next Generation.

Smart Home - TNG is a Home Automation framework for observing the state
of entities and react to changes. It is based on Home Assistant from
home-assistant.io and the Home Assistant Community.

Copyright (c) 2022, Andreas Nixdorf

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

from ... import core


# pylint: disable=unused-variable
class ResourceYAMLCollection:
    """Collection representing static YAML."""

    def __init__(self, data):
        """Initialize a resource YAML collection."""
        self._data = data

    async def async_get_info(self):
        """Return the resources info for YAML mode."""
        return {"resources": len(self.async_items() or [])}

    @property
    def loaded(self) -> bool:
        return True

    @core.callback
    def async_items(self) -> list[dict]:
        """Return list of items in collection."""
        return self._data
