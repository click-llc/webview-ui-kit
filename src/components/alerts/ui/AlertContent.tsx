import { PropsWithChildren } from 'react';

import styles from './alert.module.scss';

export type AlertContentProps = PropsWithChildren & {
  title: string;
  description: string;
  width?: number | 'auto' | '100%';
};

export const AlertContent = ({ children, title, description }: AlertContentProps) => {
  const hasContent = title || description || children;

  return (
    <>
      {hasContent && (
        <div className={styles.content}>
          {title && <div className={styles.title}>{title}</div>}
          {description && <div className={styles.description}>{description}</div>}
          {children && <div>{children}</div>}
        </div>
      )}
    </>
  );
};
