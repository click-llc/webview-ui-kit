import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { POSITIONS } from '@/constants/positions';
import { RadioButtonProps } from './types';

import styles from './radioButton.module.scss';

export function RadioButton({
  className,
  disabled,
  label,
  position,
  selected = false,
  onChange,
  ...restProps
}: RadioButtonProps) {
  const [isSelected, setIsSelected] = useState(selected || false);

  const handleChange: RadioButtonProps['onChange'] = event => {
    event.stopPropagation();

    setIsSelected(event.target.checked);
    onChange?.(event);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <label className={clsx(styles.label, position === POSITIONS.RIGHT && styles['label-right'], className)}>
      <div className={clsx(styles.radio, isSelected && styles.active, disabled && styles.disabled)}>
        {isSelected && <span />}

        <input
          {...restProps}
          type="radio"
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
