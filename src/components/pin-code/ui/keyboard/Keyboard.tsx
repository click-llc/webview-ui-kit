import { MouseEvent, MouseEventHandler } from 'react';
import clsx from 'clsx';
import { SvgIcon } from '@/components/SvgIcon';
import { KEYBOARD_KEYS } from '../../constants';
import BiometricsIcon from '../../icons/biometrics.svg?react';
import DeleteIcon from '../../icons/delete.svg?react';

import styles from './keyboard.module.scss';

const buttonIcons = {
  biometrics: <SvgIcon icon={<BiometricsIcon />} width={24} height={24} />,
  backspace: <SvgIcon icon={<DeleteIcon />} width={24} height={24} />,
};

export type KeyboardProps = {
  className?: string;
  button?: {
    onClick?: (name: string, event: MouseEvent<HTMLButtonElement>) => void;
    disabledBiometrics?: boolean;
    disabledBackspace?: boolean;
  };
};

export const Keyboard = ({ className, button }: KeyboardProps) => {
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    button?.onClick?.(event.currentTarget.name, event);
  };

  return (
    <div className={clsx(styles.keyboard, className)}>
      {KEYBOARD_KEYS.map((value, index) => {
        const isValueString = typeof value === 'string';
        const isDisabledBiometrics = value === 'biometrics' ? button?.disabledBiometrics : false;
        const isDisabledBackspace = value === 'backspace' ? button?.disabledBackspace : false;
        const isDisabled = isDisabledBackspace || isDisabledBiometrics;

        return (
          <button
            type="button"
            key={`${value}_${index}`}
            name={value.toString()}
            className={styles.keyboard_btn}
            onClick={handleButtonClick}
            disabled={isDisabled}
          >
            {isValueString ? buttonIcons[value] : value}
          </button>
        );
      })}
    </div>
  );
};
