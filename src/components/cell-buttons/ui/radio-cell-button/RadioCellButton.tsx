import { RadioButton, RadioButtonProps } from '@/components/radio-button';
import { BaseCellButtonProps } from '../../types';
import { BaseCellButton } from '../base-cell-button/BaseCellButton';

export type RadioCellButtonProps = BaseCellButtonProps & {
  selected: boolean;
  onClick: (isSelected: boolean) => void;
  onCheckBoxChange?: (isChecked: boolean) => void;
};

export function RadioCellButton({
  selected,
  disabled,
  onClick,
  actions,
  onCheckBoxChange,
  ...restProps
}: RadioCellButtonProps) {
  const handleOnClick = () => {
    if (!selected) {
      onClick(true);
    }
  };

  const handleRadioChange: RadioButtonProps['onChange'] = event => {
    event.stopPropagation();
    if (!selected) {
      onCheckBoxChange?.(true);
      onClick?.(true);
    }
  };

  return (
    <BaseCellButton
      onClick={handleOnClick}
      disabled={disabled}
      {...restProps}
      actions={
        <>
          <RadioButton selected={selected} disabled={disabled} onChange={handleRadioChange} />
          {actions}
        </>
      }
    />
  );
}
