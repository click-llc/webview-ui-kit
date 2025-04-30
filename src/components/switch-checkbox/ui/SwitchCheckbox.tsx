import { SwitchCheckboxProps } from '../types';

import styles from './SwitchCheckbox.module.scss';

export const SwitchCheckbox = ({ checked = false, disabled = false, onChange }: SwitchCheckboxProps) => {
  const handleChange = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={handleChange} className={styles.switch} />
      <span className={styles.span} />
    </label>
  );
};
