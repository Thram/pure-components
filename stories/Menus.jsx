import React from 'react';
import { object, text } from '@storybook/addon-knobs';
import {
  Group,
  Menu,
  MenuHeading,
  MenuList,
  MenuItem,
  MenuLink,
  MenuChildren,
  MenuSeparator,
} from '../src';

const DEFAULTS = {
  menu: {
    horizontal: false,
    fixed: false,
    scrollable: false,
  },
  menuItem: {
    active: false,
    selected: false,
    disabled: false,
    hasChildren: false,
    allowHover: false,
    href: undefined,
    action: undefined,
    heading: false,
  },
  menuLink: {
    href: undefined,
    action: undefined,
    heading: false,
  },
};

const Menus = () => (
  <Group container fullHeight style={{ padding: '.5rem 1rem' }}>
    <h2>Horizontal Menus</h2>
    <Menu
      {...object('Menu', DEFAULTS.menu)}
      style={{ width: '30%' }}
      horizontal
    >
      <MenuHeading>Superheroes:</MenuHeading>

      <MenuList>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Batman</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
          Superman
        </MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Flash</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
          Wonder Woman
        </MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Ironman</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
          Captain America
        </MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Thor</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Hulk</MenuItem>
        <MenuSeparator />
        <MenuHeading>Super Teams:</MenuHeading>
        <MenuItem
          {...object('Menu Item', DEFAULTS.menuItem)}
          hasChildren
          allowHover
        >
          <MenuLink {...object('Menu Link', DEFAULTS.menuLink)}>
            Justice League
          </MenuLink>
          <MenuChildren>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Batman
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Superman
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Flash
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Wonder Woman
            </MenuItem>
          </MenuChildren>
        </MenuItem>
        <MenuItem
          {...object('Menu Item', DEFAULTS.menuItem)}
          hasChildren
          allowHover
        >
          <MenuLink {...object('Menu Link', DEFAULTS.menuLink)}>
            Avengers
          </MenuLink>
          <MenuChildren>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Ironman
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Captain America
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Thor
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Hulk
            </MenuItem>
          </MenuChildren>
        </MenuItem>
      </MenuList>
    </Menu>
    <h2>Vertical Menus</h2>
    <Menu {...object('Menu', DEFAULTS.menu)} style={{ width: '20%' }}>
      <MenuHeading>Superheroes</MenuHeading>

      <MenuList>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Batman</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
          Superman
        </MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Flash</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
          Wonder Woman
        </MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Ironman</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
          Captain America
        </MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Thor</MenuItem>
        <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>Hulk</MenuItem>
        <MenuSeparator />
        <MenuHeading>Super Teams:</MenuHeading>
        <MenuItem
          {...object('Menu Item', DEFAULTS.menuItem)}
          hasChildren
          allowHover
        >
          <MenuLink {...object('Menu Link', DEFAULTS.menuLink)}>
            Justice League
          </MenuLink>
          <MenuChildren>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Batman
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Superman
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Flash
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Wonder Woman
            </MenuItem>
          </MenuChildren>
        </MenuItem>
        <MenuItem
          {...object('Menu Item', DEFAULTS.menuItem)}
          hasChildren
          allowHover
        >
          <MenuLink {...object('Menu Link', DEFAULTS.menuLink)}>
            Avengers
          </MenuLink>
          <MenuChildren>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Ironman
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Captain America
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Thor
            </MenuItem>
            <MenuItem {...object('Menu Item', DEFAULTS.menuItem)}>
              Hulk
            </MenuItem>
          </MenuChildren>
        </MenuItem>
      </MenuList>
    </Menu>

  </Group>
);

export default Menus;
