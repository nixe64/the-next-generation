"""
Core components of Smart Home - The Next Generation.

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

import typing

from .flow_handler import FlowHandler


# pylint: disable=unused-variable
class OptionsFlow(FlowHandler):
    """Base class for config option flows."""

    def __init__(
        self,
        handler: str,
        context: dict[str, typing.Any] = None,
        data: typing.Any = None,
        version: int = 1,
    ):
        super().__init__(handler, context, data, version)
        self._init_step = "init"
