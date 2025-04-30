import { IconButton } from '@/components/buttons';
import { SvgIcon } from '@/components/SvgIcon';
import ArrowLeftIcon from '../icons/arrow-left.svg?react';

type Props = {
  className?: string;
  onToBackButtonClick?: () => void;
};

export const ToBackButton = ({ onToBackButtonClick, className }: Props) => {
  return (
    <IconButton onClick={onToBackButtonClick} size="medium" className={className}>
      <SvgIcon icon={<ArrowLeftIcon />} />
    </IconButton>
  );
};
