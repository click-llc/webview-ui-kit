import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Balance, BALANCE_SIZES } from '@/components/balance';
import { MiniBankCard, MiniCardProps } from '@/components/mini-bank-card';

import styles from './bankCardCell.module.scss';

export type BankCardCellProps = MiniCardProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    actions?: ReactNode;
    balance: number | string;
    cardName: string;
    currency?: string;
    fallbackText?: string;
    warningText?: string;
  };

export function BankCardCell({
  actions,
  balance,
  cardName,
  className,
  currency,
  disabled,
  fallbackText,
  warningText,
  ...miniCardProps
}: BankCardCellProps) {
  return (
    <button className={clsx(styles.wrapper, className)} disabled={disabled}>
      <div className={styles.body}>
        <MiniBankCard {...miniCardProps} disabled={disabled} />

        <div className={styles.cardInfo}>
          {fallbackText ? (
            <span className={styles.fallbackText}>{fallbackText}</span>
          ) : (
            <Balance amount={balance} currency={currency} size={BALANCE_SIZES.m} />
          )}

          <span className={styles.name}>{cardName}</span>
        </div>

        {actions && <div>{actions}</div>}
      </div>

      {warningText && (
        <div className={styles.warning}>
          <span className={styles.warningText}>{warningText}</span>
        </div>
      )}
    </button>
  );
}
