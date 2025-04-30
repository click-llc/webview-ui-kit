import { NavBar } from '@/components/nav-bar';
import { NavBarWithBackActionsProps } from '../types';
import { ToBackButton } from './ToBackButton';

export const NavBarWithBackActions = ({ onToBackButtonClick, ...restProps }: NavBarWithBackActionsProps) => {
  return <NavBar {...restProps} leftSlot={<ToBackButton onToBackButtonClick={onToBackButtonClick} />} />;
};
