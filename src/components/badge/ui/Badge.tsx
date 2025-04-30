import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { SvgIcon } from '@/components/SvgIcon';
import AsteriskIcon from '../icons/asterisk.svg?react';
import { BADGE_SIZE, BADGE_TYPES, BadgePosition, BadgeSizeKeys, BadgeType, POSITIONS } from './types';

import styles from './badge.module.scss';

type BadgeProps = PropsWithChildren & {
  className?: string;
  isIcon?: boolean;
  position?: BadgePosition;
  size?: BadgeSizeKeys;
  type?: BadgeType;
};

export const Badge = ({
  children,
  className,
  isIcon = true,
  position = POSITIONS.left,
  size = 'medium',
  type = BADGE_TYPES.primary,
}: BadgeProps) => {
  const iconSize = BADGE_SIZE[size];

  return (
    <div className={clsx(styles.badge, styles[type], styles[size], styles[position], className)}>
      {isIcon && <SvgIcon icon={<AsteriskIcon />} width={iconSize} height={iconSize} />}
      {children}
    </div>
  );
};
