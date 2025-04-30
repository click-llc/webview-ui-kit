import { useState } from 'react';
import clsx from 'clsx';
import { MenuItem } from '../../types';
import { MainMenuItem } from './MainMenuItem';

import styles from './mainMenu.module.scss';

export type MainMenuProps = {
  items: MenuItem[];
  className?: string;
  defaultActiveKey?: string;
  onClick?: (menuKey: string) => void;
};

export function MainMenu({ defaultActiveKey, items, className, onClick }: MainMenuProps) {
  const [activeItem, setActiveItem] = useState(defaultActiveKey);

  const handleClick = (menuItem: MenuItem) => {
    if (menuItem.disabled) return;

    setActiveItem(menuItem.key);
    onClick?.(menuItem.key);
  };

  return (
    <ul className={clsx(styles.wrapper, className)}>
      {items.map(item => (
        <MainMenuItem {...item} isActive={activeItem === item.key} onClick={() => handleClick(item)} />
      ))}
    </ul>
  );
}
