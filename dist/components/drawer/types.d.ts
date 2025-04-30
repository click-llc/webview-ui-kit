import { PropsWithChildren, RefObject } from 'react';
export declare const DRAWER_ANCHOR: {
    readonly BOTTOM: "bottom";
    readonly TOP: "top";
};
export type DrawerAnchor = (typeof DRAWER_ANCHOR)[keyof typeof DRAWER_ANCHOR];
export type DefaultDrawerProps = PropsWithChildren & {
    drawerRef?: RefObject<HTMLDivElement>;
    height?: string | number;
    onClose?: () => void;
};
