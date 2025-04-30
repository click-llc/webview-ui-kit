import clsx from 'clsx';
import { SvgIcon } from '@/components/SvgIcon';
import { STATUSES } from '../../constants';
import RightArrow from '../../icons/arrow-right.svg?react';
import CheckmarkIcon from '../../icons/checkmark-circled.svg?react';
import CloseIcon from '../../icons/close-circled.svg?react';
import ExclamationIcon from '../../icons/exclamation-circled.svg?react';
import InfoIcon from '../../icons/info-circled.svg?react';
import type { BaseCellButtonProps, Statuses } from '../../types';
import { BaseCellButton } from '../base-cell-button/BaseCellButton';

import styles from './alertCellButton.module.scss';

export type AlertCellButtonProps = BaseCellButtonProps & {
  status: Statuses;
  iconEnabled?: boolean;
};

const StatusIcon = ({ status }: { status: Statuses }) => {
  if (status === STATUSES.POSITIVE) return <CheckmarkIcon />;
  if (status === STATUSES.INFO) return <InfoIcon />;
  if (status === STATUSES.WARNING) return <ExclamationIcon />;

  return <CloseIcon />;
};

export function AlertCellButton({ status, iconEnabled = true, className, ...restProps }: AlertCellButtonProps) {
  return (
    <BaseCellButton
      {...restProps}
      icon={iconEnabled && <SvgIcon icon={<StatusIcon status={status} />} />}
      className={clsx(styles.positive, styles[`${status}`], className)}
      actions={<SvgIcon icon={<RightArrow />} width={9} height={14} />}
    />
  );
}
