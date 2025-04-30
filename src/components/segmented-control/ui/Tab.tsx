import clsx from 'clsx';
import { SegmentedControlOption } from '../types';

import styles from './segmentedContol.module.scss';

export type TabProps = SegmentedControlOption & {
  isActive?: boolean;
  onClick?: (activeKey: SegmentedControlOption['value']) => void;
};

export const Tab = ({ value, icon, label, disabled, isActive, onClick }: TabProps) => {
  const className = clsx(styles.option, isActive && styles.optionActive, disabled && styles.optionDisabled);

  const handleClick = () => {
    onClick?.(value);
  };

  return (
    <button type="button" className={className} onClick={handleClick} disabled={disabled}>
      {icon && <span className={styles.optionIcon}>{icon}</span>}
      <span className={styles.optionLabel}>{label}</span>
    </button>
  );
};
