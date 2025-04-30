import clsx from 'clsx';
import { BaseNavBar } from '@/components/nav-bar';
import { NavBarProps } from '../types';

import styles from './navBar.module.scss';

export const NavBar = ({ title, subtitle, ...restProps }: NavBarProps) => {
  return (
    <BaseNavBar
      {...restProps}
      centerSlot={
        <div className={clsx(styles.center)}>
          {title && <span className={clsx(styles.title)}>{title}</span>}
          {subtitle && <span className={clsx(styles.subtitle)}>{subtitle}</span>}
        </div>
      }
    />
  );
};
