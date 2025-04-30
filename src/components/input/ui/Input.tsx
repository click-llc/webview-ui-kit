import { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: boolean;
  helperText?: string;
  icon?: ReactNode;
  isTransparent?: boolean;
  label?: string;
  nativeInputClassName?: string;

  prefix?: ReactNode;
  suffix?: ReactNode;
};

export const Input = ({
  className,
  disabled,
  error,
  helperText,
  icon,
  label,
  nativeInputClassName,
  prefix,
  suffix,
  ...rest
}: InputProps) => {
  return (
    <div
      className={clsx(
        styles.field,
        {
          [styles.error]: error,
          [styles.disabled]: disabled,
        },
        className
      )}
    >
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.wrapper}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input disabled={disabled} className={clsx(styles.input, nativeInputClassName)} {...rest} />
        {icon && <span className={styles.icon}>{icon}</span>}
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>

      {helperText && (
        <span className={styles.helperText} role="alert">
          {helperText}
        </span>
      )}
    </div>
  );
};
