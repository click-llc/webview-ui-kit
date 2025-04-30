import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton';

import styles from './primaryButton.module.scss';

type Props = BaseButtonProps & {};

export const PrimaryButton = ({ className, ...restProps }: Props) => {
  return <BaseButton {...restProps} className={clsx(styles.primaryButton, className)} />;
};
