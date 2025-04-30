import { AnchorHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { BUTTON_SIZES, ButtonSize } from '../../../types';

import styles from './linkBaseButton.module.scss';

export type BaseLinkButtonProps = PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    size?: ButtonSize;
    className?: string;
    isFull?: boolean;
  };

export const LinkBaseButton = ({
  children,
  size = 'medium',
  isFull,
  className,
  style,
  ...restProps
}: BaseLinkButtonProps) => {
  const buttonStyles: CSSProperties = {
    height: BUTTON_SIZES[size],
  };

  return (
    <a
      className={clsx(styles.linkBaseButton, isFull && styles.linkBaseButtonIsFull, className)}
      style={style || buttonStyles}
      {...restProps}
    >
      {children}
    </a>
  );
};
