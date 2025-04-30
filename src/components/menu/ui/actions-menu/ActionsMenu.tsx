import clsx from 'clsx';
import { MenuItem } from '../../types';
import { ActionMenuItem } from './ActionMenuItem';

import styles from './actionsMenu.module.scss';

export type ActionsMenuProps = {
  className?: string;
  items: MenuItem[];
  onClick?: (menuKey: string) => void;
};

export function ActionsMenu({ items, className, onClick }: ActionsMenuProps) {
  const handleClick = (menuItem: MenuItem) => {
    if (menuItem.disabled) return;

    onClick?.(menuItem.key);
  };

  return (
    <ul className={clsx(styles.wrapper, className)}>
      {items.map(item => (
        <ActionMenuItem {...item} onClick={() => handleClick(item)} />
      ))}
    </ul>
  );
}
