import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { SvgIcon } from '@/components/SvgIcon';
import ChevronDownIcon from '../icons/chevron-down.svg?react';

import styles from './chips.module.scss';

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  isMenu?: boolean;
};

export const Chip = ({ value, isActive, isMenu, disabled, className, ...rest }: ChipProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.chip, className, {
        [styles.active]: isActive,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      <span>{value}</span>
      {isMenu && (
        <span className={styles.icon}>
          <SvgIcon icon={<ChevronDownIcon />} width={12} height={12} />
        </span>
      )}
    </button>
  );
};
