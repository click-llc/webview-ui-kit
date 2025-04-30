import clsx from 'clsx';
import { MenuItem } from '../../types';

import styles from './actionMenuItem.module.scss';

export type ActionMenuItemProps = MenuItem & {
  onClick: () => void;
};

export function ActionMenuItem({ icon, label, disabled, onClick }: ActionMenuItemProps) {
  return (
    <button className={clsx(styles.wrapper, disabled && styles.disabled)} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>

      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
}
