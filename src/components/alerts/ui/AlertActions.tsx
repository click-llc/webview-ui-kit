import { ReactNode } from 'react';
import { GhostButton, PrimaryButton } from '@/components/buttons';

import styles from './alert.module.scss';

export type AlertActionsProps = {
  actions?: ReactNode;
  primaryButton?: {
    title: string;
    onClick: () => void;
  };
  secondaryButton?: {
    title: string;
    onClick: () => void;
  };
};

export const AlertActions = ({ secondaryButton, primaryButton, actions }: AlertActionsProps) => {
  const hasActionButtons = primaryButton || secondaryButton;

  return (
    <>
      {hasActionButtons && (
        <div className={styles.actions}>
          {secondaryButton && (
            <GhostButton onClick={secondaryButton.onClick} isFull>
              {secondaryButton.title}
            </GhostButton>
          )}
          {primaryButton && (
            <PrimaryButton onClick={primaryButton.onClick} isFull>
              {primaryButton.title}
            </PrimaryButton>
          )}
        </div>
      )}
      {actions && <div className={styles.actions}>{actions}</div>}
    </>
  );
};
