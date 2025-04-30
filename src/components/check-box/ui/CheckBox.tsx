import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { SvgIcon } from '@/components/SvgIcon';
import { POSITIONS } from '@/constants/positions';
import CheckMark from '../icons/checked.svg?react';
import { CheckBoxProps } from './types';

import styles from './checkBox.module.scss';

export function CheckBox({
  className,
  disabled,
  label,
  position,
  selected = false,

  onChange,

  ...restProps
}: CheckBoxProps) {
  const [isSelected, setIsSelected] = useState(selected || false);

  const handleChange: CheckBoxProps['onChange'] = event => {
    event.stopPropagation();
    setIsSelected(event.target.checked);
    onChange?.(event);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <label className={clsx(styles.label, position === POSITIONS.RIGHT && styles.labelPositionRight, className)}>
      <div className={clsx(styles.checkbox, isSelected && styles.checkboxActive, disabled && styles.checkboxDisabled)}>
        {isSelected && <SvgIcon icon={<CheckMark />} width={14} height={11} />}
        <input
          {...restProps}
          type="checkbox"
          aria-checked={isSelected}
          onChange={handleChange}
          className={styles.input}
          disabled={disabled}
          onClick={e => e.stopPropagation()}
        />
      </div>
      <div className={styles.text}>{label}</div>
    </label>
  );
}
