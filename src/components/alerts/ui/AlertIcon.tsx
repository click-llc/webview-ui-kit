import { alertType } from '../constants';
import AccentIcon from '../icons/accent.svg?react';
import ErrorIcon from '../icons/error.svg?react';
import InfoIcon from '../icons/info.svg?react';
import SuccessIcon from '../icons/success.svg?react';
import WarningIcon from '../icons/warning.svg?react';

import styles from './alert.module.scss';

export type AlertIconProps = {
  statusType?: (typeof alertType)[keyof typeof alertType];
};

const iconComponent = {
  [alertType.accent]: <AccentIcon />,
  [alertType.error]: <ErrorIcon />,
  [alertType.info]: <InfoIcon />,
  [alertType.success]: <SuccessIcon />,
  [alertType.warning]: <WarningIcon />,
};

export const AlertIcon = ({ statusType }: AlertIconProps) => {
  if (!statusType) {
    return null;
  }

  return <div className={styles.icon}>{iconComponent[statusType]}</div>;
};
