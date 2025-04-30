import clsx from 'clsx';
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton';

import styles from './ghostButton.module.scss';

type Props = BaseButtonProps & {};

export const GhostButton = ({ className, ...restProps }: Props) => {
  return <BaseButton {...restProps} className={clsx(styles.ghostButton, className)} />;
};
