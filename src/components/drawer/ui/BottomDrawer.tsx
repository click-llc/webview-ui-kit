import clsx from 'clsx';
import { DefaultDrawerProps } from '../types';
import { ActionButton } from './ActionButton';
import { Animated } from './Animated';

import styles from './drawer.module.scss';

export const BottomDrawer = ({ children, ...restProps }: DefaultDrawerProps) => {
  return (
    <Animated {...restProps} className={clsx(styles.drawer, styles.drawerInUp)}>
      <ActionButton />
      {children}
    </Animated>
  );
};
