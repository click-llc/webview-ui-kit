import { ReactElement } from 'react';
import clsx from 'clsx';
import { SvgIcon } from '@/components/SvgIcon';
import ErrorIcon from '../icons/error.svg?react';
import InfoIcon from '../icons/info.svg?react';
import SuccessIcon from '../icons/success.svg?react';
import WarningIcon from '../icons/warning.svg?react';
import { TOAST_TYPES, ToastType } from '../types';

import styles from './toast.module.scss';

export type ToastProps = {
  className?: string;
  isFull?: boolean;
  title: string;
  type?: ToastType;
};

const toastIcons: Record<ToastType, ReactElement> = {
  [TOAST_TYPES.error]: <SvgIcon className={styles.toastIcon} icon={<ErrorIcon />} width={32} height={32} />,
  [TOAST_TYPES.info]: <SvgIcon className={styles.toastIcon} icon={<InfoIcon />} width={32} height={32} />,
  [TOAST_TYPES.success]: <SvgIcon className={styles.toastIcon} icon={<SuccessIcon />} width={32} height={32} />,
  [TOAST_TYPES.warning]: <SvgIcon className={styles.toastIcon} icon={<WarningIcon />} width={32} height={32} />,
};

export const Toast = ({ type = 'info', title, isFull, className }: ToastProps) => {
  return (
    <div className={clsx(styles.toast, styles[type], isFull && styles.toastIsFull, className)}>
      {toastIcons[type]}
      <span className={styles.toastTitle}>{title}</span>
    </div>
  );
};
