import { PropsWithChildren, RefObject } from 'react';

export const DRAWER_ANCHOR = {
  BOTTOM: 'bottom',
  TOP: 'top',
} as const;

export type DrawerAnchor = (typeof DRAWER_ANCHOR)[keyof typeof DRAWER_ANCHOR];

export type DefaultDrawerProps = PropsWithChildren & {
  drawerRef?: RefObject<HTMLDivElement>;
  height?: string | number;
  onClose?: () => void;
};
