import { CSSProperties } from 'react';
import clsx from 'clsx';
import { BUTTON_SIZES } from '../../types';
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton';

import styles from './iconButton.module.scss';

type Props = Omit<BaseButtonProps, 'size'> & {
  isPrimary?: boolean;
  size?: BaseButtonProps['size'] | 'auto';
};

export const IconButton = ({ size = 'medium', isPrimary, className, ...restProps }: Props) => {
  const isSizeAuto = size === 'auto';
  const buttonSize = isSizeAuto ? size : BUTTON_SIZES[size];

  const buttonStyles: CSSProperties = {
    height: buttonSize,
    width: buttonSize,
    padding: 0,
  };

  return (
    <BaseButton
      {...restProps}
      className={clsx(styles.iconButton, isPrimary && styles.iconButtonPrimary, className)}
      style={buttonStyles}
    />
  );
};
