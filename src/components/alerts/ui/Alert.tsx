import { AlertActions, AlertActionsProps } from './AlertActions';
import { AlertContent, AlertContentProps } from './AlertContent';
import { AlertIcon, AlertIconProps } from './AlertIcon';

import styles from './alert.module.scss';

export type AlertProps = AlertContentProps & AlertActionsProps & AlertIconProps & {};

export const Alert = ({
  actions,
  children,
  description,
  primaryButton,
  secondaryButton,
  statusType,
  title,
  width = 'auto',
}: AlertProps) => {
  return (
    <div className={styles.alert} style={{ width }}>
      <AlertIcon statusType={statusType} />
      <AlertContent title={title} description={description}>
        {children}
      </AlertContent>
      <AlertActions actions={actions} secondaryButton={secondaryButton} primaryButton={primaryButton} />
    </div>
  );
};
