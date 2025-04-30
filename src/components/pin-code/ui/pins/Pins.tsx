import { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '@/components/buttons';
import { Pin } from '@/components/pin-code/ui/pins/Pin';
import { SvgIcon } from '@/components/SvgIcon';
import { isSingleDigit } from '@/utils/check';
import { DEFAULT_PIN_CODE_LENGTH } from '../../constants';
import EyeOffIcon from '../../icons/eye-off.svg?react';
import EyeOnIcon from '../../icons/eye-on.svg?react';
import SpinnerIcon from '../../icons/spinner.svg?react';

import styles from './pin.module.scss';

export type PinsProps = {
  className?: string;
  helperText?: string;
  isError?: boolean;
  isLoading?: boolean;
  numbers: number[];
  pinLength?: number;
};

export const Pins = ({
  className,
  helperText,
  isError,
  isLoading,
  numbers,
  pinLength = DEFAULT_PIN_CODE_LENGTH,
  ...rest
}: PinsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const PIN_LENGTH = Array(pinLength)
    .fill(0)
    .map((_, i) => (isSingleDigit(numbers[i]) ? numbers[i] : null));

  const handleVisibleToggleButtonClick = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div {...rest} className={clsx(styles.pinField, className)}>
      <div className={styles.wrapper}>
        <div className={clsx(styles.loader, !isLoading && styles.loaderHide)}>
          <SvgIcon icon={<SpinnerIcon />} />
        </div>

        <span className={clsx(styles.pins, isError && styles.pinsError)}>
          {PIN_LENGTH.map((number, index) => (
            <Pin key={index} isError={isError} isVisible={isVisible} number={number} />
          ))}
        </span>

        <IconButton size="medium" onClick={handleVisibleToggleButtonClick} isPrimary>
          {isVisible ? <SvgIcon icon={<EyeOnIcon />} /> : <SvgIcon icon={<EyeOffIcon />} />}
        </IconButton>
      </div>

      {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
};
