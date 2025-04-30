import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { POSITIONS } from '@/constants/positions';
import { SwitchProps } from './types';

import styles from './switch.module.scss';

export function Switch({
  className,
  disabled,
  label,
  onChange,
  position,
  selected = false,

  ...restProps
}: SwitchProps) {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(selected);

  const handleChange: SwitchProps['onChange'] = event => {
    setIsTurnedOn(event.target.checked);
    onChange?.(event);
  };

  useEffect(() => {
    setIsTurnedOn(selected);
  }, [selected]);

  return (
    <label className={clsx(styles.label, position === POSITIONS.RIGHT && styles.labelRight, className)}>
      <div className={clsx(styles.switch, isTurnedOn && styles.active, disabled && styles.disabled)}>
        <div className={clsx(styles.circle, isTurnedOn ? styles.slideRight : styles.slideLeft)} />

        <input
          {...restProps}
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          checked={isTurnedOn}
          onChange={handleChange}
        />
      </div>

      <div className={styles.text}>{label}</div>
    </label>
  );
}
