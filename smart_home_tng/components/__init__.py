"""
This package contains components that can be plugged into

    Smart Home - The Next Generation.

Component design guidelines:
- Each component defines a constant DOMAIN in it's manifest that is equal to
  its filename.
- Each component that tracks states should create state entity names in the
  format "<DOMAIN>.<OBJECT_ID>".
- Each component should publish services only under its own domain.
"""
