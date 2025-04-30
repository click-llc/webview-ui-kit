import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton';

import styles from './secondaryButton.module.scss';

type Props = BaseButtonProps & {};

export const SecondaryButton = ({ className, ...restProps }: Props) => {
  return <BaseButton {...restProps} className={clsx(styles.secondaryButton, className)} />;
};
