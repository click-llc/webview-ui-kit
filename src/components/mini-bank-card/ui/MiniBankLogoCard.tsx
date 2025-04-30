import clsx from 'clsx';
import { backgrounds, cardTypeBackgrounds, cardTypeIconsMedium } from '../constants';
import { CardType } from '../types';

import styles from './miniBankCard.module.scss';

type Props = {
  cardType: CardType;
  className?: string;
  disabled?: boolean;
};

export function MiniBankLogoCard({ cardType, disabled, className }: Props) {
  const logo = cardTypeIconsMedium[cardType];
  const background = cardTypeBackgrounds[cardType] || backgrounds.click;
  const style = !disabled ? { backgroundColor: background } : undefined;

  return (
    <div className={clsx(styles.cardSolo, disabled && styles.disabled, className)} style={style}>
      <span className={styles.bankLogo}>{logo}</span>
    </div>
  );
}
