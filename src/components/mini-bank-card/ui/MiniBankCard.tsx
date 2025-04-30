import clsx from 'clsx';
import { backgrounds, bankLogos, cardTypeIcons } from '../constants';
import { MiniCardProps } from '../types';

import styles from './miniBankCard.module.scss';

export function MiniBankCard({ cardNum, bankCode, cardType, className, disabled }: MiniCardProps) {
  const bankLogo = bankLogos[bankCode] || bankLogos.click;
  const cardLogo = cardTypeIcons[cardType] || null;
  const background = backgrounds[bankCode] || backgrounds.click;
  const cardNumber = cardNum.slice(-4);
  const style = !disabled ? { backgroundColor: background } : undefined;

  return (
    <div className={clsx(styles.card, disabled && styles.disabled, className)} style={style}>
      <span className={styles.bankLogo}>{bankLogo}</span>

      {cardNumber && cardLogo && (
        <div className={styles.info}>
          <span className={styles.cardNum}>{cardNumber}</span>
          <span>{cardLogo}</span>
        </div>
      )}
    </div>
  );
}
