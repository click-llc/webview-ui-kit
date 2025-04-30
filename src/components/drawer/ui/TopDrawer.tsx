import clsx from 'clsx';
import { DefaultDrawerProps } from '../types';
import { ActionButton } from './ActionButton';
import { Animated } from './Animated';

import styles from './drawer.module.scss';

export const TopDrawer = ({ children, ...restProps }: DefaultDrawerProps) => {
  return (
    <Animated {...restProps} className={clsx(styles.drawer, styles.drawerInDown)}>
      {children}
      <ActionButton />
    </Animated>
  );
};
