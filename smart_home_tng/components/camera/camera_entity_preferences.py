"""
Camera Component for Smart Home - The Next Generation.

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
class CameraEntityPreferences:
    """Handle preferences for camera entity."""

    def __init__(self, prefs: dict[str, bool]) -> None:
        """Initialize prefs."""
        self._prefs = prefs

    def as_dict(self) -> dict[str, bool]:
        """Return dictionary version."""
        return self._prefs

    @property
    def preload_stream(self) -> bool:
        """Return if stream is loaded on hass start."""
        return self._prefs.get(core.Camera.PREF_PRELOAD_STREAM, False)
