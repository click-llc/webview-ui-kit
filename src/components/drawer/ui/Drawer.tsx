import { PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DefaultDrawerProps, DRAWER_ANCHOR, DrawerAnchor } from '../types';
import { Backdrop } from './Backdrop';
import { BottomDrawer } from './BottomDrawer';
import { TopDrawer } from './TopDrawer';

import styles from './drawer.module.scss';

const drawers = {
  top: TopDrawer,
  bottom: BottomDrawer,
};

export type DrawerProps = PropsWithChildren &
  DefaultDrawerProps & {
    anchor?: DrawerAnchor;
    isVisible: boolean;

    onDrawerClickOutside?: () => void;
  };

export const Drawer = ({ onDrawerClickOutside, isVisible, ...restProps }: DrawerProps) => {
  const DrawerComponent = drawers[restProps.anchor || DRAWER_ANCHOR.BOTTOM];

  const handleBackdropClose = () => {
    onDrawerClickOutside?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={styles.wrapper}>
          <Backdrop onClick={handleBackdropClose} />
          <DrawerComponent {...restProps} />
        </div>
      )}
    </AnimatePresence>
  );
};
