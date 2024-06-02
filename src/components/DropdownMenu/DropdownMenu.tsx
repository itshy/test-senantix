import React from 'react';

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import {
  PencilIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/16/solid';

import './styles.css';

const DropdownMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton className="dropdown-menu-button">
        <EllipsisHorizontalIcon style={{ width: 16 }} />
      </MenuButton>
    </Menu>
  );
};

export default DropdownMenu;