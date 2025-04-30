import clsx from 'clsx';
import { GhostButton } from '@/components/buttons';
import { MenuItem } from '../../types';

import styles from './mainMenuItem.module.scss';

export type MainMenuItemProps = MenuItem & {
  isActive?: boolean;
  onClick?: () => void;
};

export function MainMenuItem({ icon, label, isActive, disabled, onClick }: MainMenuItemProps) {
  return (
    <GhostButton
      className={clsx(styles.wrapper, isActive && styles.active, disabled && styles.disabled)}
      onClick={onClick}
    >
      <span className={styles.icon}>{icon}</span>

      {label && <span className={styles.label}>{label}</span>}
    </GhostButton>
  );
}
