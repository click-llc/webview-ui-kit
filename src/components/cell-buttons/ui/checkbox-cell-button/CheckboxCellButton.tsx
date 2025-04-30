import { ChangeEvent, useEffect, useState } from 'react';
import { CheckBox } from '@/components/check-box';
import type { BaseCellButtonProps } from '../../types';
import { BaseCellButton } from '../base-cell-button/BaseCellButton';

export type CheckboxCellButtonProps = BaseCellButtonProps & {
  selected: boolean;
  onClick: (isSelected: boolean) => void;
  onCheckBoxChange?: (isChecked: boolean) => void;
};

export function CheckboxCellButton({
  selected,
  disabled,
  onClick,
  actions,
  onCheckBoxChange,
  ...restProps
}: CheckboxCellButtonProps) {
  const [isSelected, setIsSelected] = useState(selected || false);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleOnChange = () => {
    setIsSelected(!isSelected);
    onClick?.(!isSelected);
  };

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    onCheckBoxChange?.(!isSelected);
  };

  return (
    <BaseCellButton
      onClick={handleOnChange}
      disabled={disabled}
      {...restProps}
      actions={
        <>
          <CheckBox selected={isSelected} disabled={disabled} onChange={handleCheckBoxChange} />
          {actions}
        </>
      }
    />
  );
}
