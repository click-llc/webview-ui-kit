import { ReactNode } from 'react';
import { DrawerProps } from './ui/Drawer';
type Props = Omit<DrawerProps, 'isVisible' | 'onDrawerClickOutside'>;
export declare const useDrawerInPortal: (drawerProps?: Props) => {
    openDrawer: (newContent: ReactNode) => void;
    closeDrawer: () => void;
};
export {};
