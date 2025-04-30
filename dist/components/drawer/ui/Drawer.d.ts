import { PropsWithChildren } from 'react';
import { DefaultDrawerProps, DrawerAnchor } from '../types';
export type DrawerProps = PropsWithChildren & DefaultDrawerProps & {
    anchor?: DrawerAnchor;
    isVisible: boolean;
    onDrawerClickOutside?: () => void;
};
export declare const Drawer: ({ onDrawerClickOutside, isVisible, ...restProps }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
