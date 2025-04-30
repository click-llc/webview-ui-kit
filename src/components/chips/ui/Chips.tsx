import { HTMLAttributes } from 'react';
import { Chip, ChipProps } from './Chip';

import styles from './chips.module.scss';

export type ChipsProps = HTMLAttributes<HTMLDivElement> & {
  chips: ChipProps[];
};

export const Chips = ({ chips, ...rest }: ChipsProps) => {
  return (
    <div className={styles.chips} {...rest}>
      {chips.map((chip, idx) => (
        <Chip {...chip} key={idx} />
      ))}
    </div>
  );
};
