import clsx from 'clsx';
import { BaseProps } from '../../types';

import styles from './baseProgressBar.module.scss';

export const BaseProgressBar = ({ title, progress, displayValue, className }: BaseProps) => {
  return (
    <div className={clsx(styles.progressBar, className)}>
      <div className={styles.progressBarHeader}>
        <h3 className={styles.progressBarTitle}>{title}</h3>
        <span className={styles.progressBarValue}>{displayValue}</span>
      </div>
      <div className={styles.progressBarTrack}>
        <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
