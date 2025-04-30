import clsx from 'clsx';
import { BaseLinkButtonProps, LinkBaseButton } from '../link-base-button/LinkBaseButton';

import styles from './linkPrimaryButton.module.scss';

type Props = BaseLinkButtonProps & {};

export const LinkPrimaryButton = ({ className, ...restProps }: Props) => {
  return <LinkBaseButton {...restProps} className={clsx(styles.linkPrimaryButton, className)} />;
};
