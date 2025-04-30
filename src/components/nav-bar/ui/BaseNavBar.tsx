import clsx from 'clsx';
import { BaseNavBarProps } from '../types';

import styles from './navBar.module.scss';

export const BaseNavBar = ({
  centerSlot,
  centerSlotClassName,
  className,
  leftSlot,
  leftSlotClassName,
  rightSlot,
  rightSlotClassName,
  isTransparent,
}: BaseNavBarProps) => {
  return (
    <div className={clsx(styles.navbar, isTransparent && styles.navbarIsTransparent, className)}>
      <div className={clsx(styles.left, leftSlotClassName)}>{leftSlot}</div>
      <div className={clsx(styles.center, centerSlotClassName)}>{centerSlot}</div>
      <div className={clsx(styles.right, rightSlotClassName)}>{rightSlot}</div>
    </div>
  );
};
