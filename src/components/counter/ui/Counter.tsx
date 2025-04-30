import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { COUNTER_SIZES, CounterColor, CounterSize } from './types';

import styles from './Counter.module.scss';

export type CounterProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> &
  PropsWithChildren & {
    size: CounterSize;
    color: CounterColor;
  };

export const Counter = ({ className, size, color = 'accent', style, children, ...restProps }: CounterProps) => {
  const counterStyles = {
    minWidth: COUNTER_SIZES[size],
    height: COUNTER_SIZES[size],
  };

  return (
    <span
      {...restProps}
      data-color={color}
      data-size={size}
      className={clsx(styles.counter, className)}
      style={{ ...counterStyles, ...style }}
    >
      {children}
    </span>
  );
};
