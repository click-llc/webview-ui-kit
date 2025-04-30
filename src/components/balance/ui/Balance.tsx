import clsx from 'clsx';
import { BALANCE_SIZES, type BalanceSizeType } from '../types';
import { formatNumber, splitFormattedNumber } from '../utils';

import styles from './balance.module.scss';

const currencyUzb = 'сум' as const;

type BalanceProps = {
  amount: number | string;
  className?: string;
  currency?: string;
  size?: BalanceSizeType;
};

export const Balance = ({ amount, currency, size = BALANCE_SIZES.xs, className }: BalanceProps) => {
  const [intPart, decPart] = splitFormattedNumber(amount);

  return (
    <div className={clsx(styles.balance, styles[size], className)}>
      <strong className={styles.strong}>
        {formatNumber(intPart)}
        {decPart && <span className={styles.span}>,{decPart}</span>}
      </strong>

      <span className={styles.balanceSpan}>{currency || currencyUzb}</span>
    </div>
  );
};
