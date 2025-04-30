import clsx from 'clsx';
import { isSingleDigit } from '@/utils/check';

import styles from './pin.module.scss';

type PinProps = {
  isError?: boolean;
  isVisible?: boolean;
  number: number | null;
};

export const Pin = ({ isError, isVisible, number }: PinProps) => {
  const isNumberDigit = isSingleDigit(number);

  const classes = clsx(styles.pinPlag, {
    [styles.pinError]: isError,
    [styles.filled]: isNumberDigit,
    [styles.visible]: isVisible,
  });

  if (isVisible) {
    return <span className={styles.pin}>{isNumberDigit ? number : <span className={clsx(classes)} />}</span>;
  }

  return (
    <span className={styles.pin}>
      <span className={clsx(classes)} />
    </span>
  );
};
