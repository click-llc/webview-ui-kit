import { useState } from 'react';
import clsx from 'clsx';
import { DEFAULT_PIN_CODE_LENGTH } from '../constants';
import { Keyboard, type KeyboardProps } from './keyboard/Keyboard';
import { Pins, type PinsProps } from './pins/Pins';

import styles from './pinCode.module.scss';

export type PinCodeProps = {
  className?: string;
  keyboardProps?: KeyboardProps;
  pinsProps?: PinsProps;

  onFilled?: (pin: number) => void;
  onBiometricsClick?: () => void;
  onBackspaceClick?: () => void;
};

export const PinCode = ({
  className,
  keyboardProps,
  pinsProps,
  onBackspaceClick,
  onBiometricsClick,
  ...rest
}: PinCodeProps) => {
  const [pin, setPin] = useState<number[]>([]);

  const handleButtonClick = (currentPin: string | 'biometrics' | 'backspace') => {
    if (currentPin === 'biometrics') {
      onBiometricsClick?.();

      return;
    }

    if (currentPin === 'backspace') {
      setPin(pin.slice(0, -1));
      onBackspaceClick?.();

      return;
    }

    if (pin.length < DEFAULT_PIN_CODE_LENGTH) {
      setPin(prev => [...prev, Number.parseInt(currentPin, 10)]);
    }
  };

  return (
    <div className={clsx(styles.pinCode, className)} {...rest}>
      <Pins {...pinsProps} numbers={pin} />

      <Keyboard
        {...keyboardProps}
        button={{
          ...keyboardProps?.button,

          onClick: handleButtonClick,
          disabledBackspace: !pin.length,
        }}
      />
    </div>
  );
};
