import { ReactNode } from 'react';

export type BaseNavBarProps = {
  centerSlot?: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  isTransparent?: boolean;

  className?: string;
  centerSlotClassName?: string;
  leftSlotClassName?: string;
  rightSlotClassName?: string;
};

export type NavBarProps = Omit<BaseNavBarProps, 'centerSlot'> & {
  title?: string;
  subtitle?: string;
};

export type NavBarWithBackActionsProps = Omit<NavBarProps, 'centerSlot' | 'leftSlot'> & {
  onToBackButtonClick?: () => void;
};
