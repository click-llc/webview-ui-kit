import clsx from 'clsx';
import { SIZES } from '../../constants';
import type { BaseCellButtonProps } from '../../types';

import styles from './baseCellButton.module.scss';

export const BaseCellButton = ({
  actions,
  className,
  description,
  disabled,
  icon,
  size,
  title,
  titleWeight,
  ...restProps
}: BaseCellButtonProps) => {
  const buttonClassName = clsx(styles.base, size === SIZES.SMALL && styles.baseSmall, className);

  return (
    <button {...restProps} disabled={disabled} className={buttonClassName}>
      <div className={styles.content}>
        {icon && <div className={styles.baseIcon}>{icon}</div>}

        <div className={styles.baseText}>
          <span className={clsx(styles.baseTitle, titleWeight === 'normal' && styles.baseNormalWeight)}>{title}</span>
          {description && <span className={styles.baseDescription}>{description}</span>}
        </div>
      </div>

      {actions && <div className={styles.baseActions}>{actions}</div>}

      {disabled && <div className={styles.overlay} />}
    </button>
  );
};
