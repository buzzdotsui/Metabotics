'use client';

import { ReactNode, forwardRef } from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  children: ReactNode;
  index?: string;
  className?: string;
  as?: 'p' | 'div' | 'span';
}

export const SectionLabel = forwardRef<HTMLParagraphElement, SectionLabelProps>(
  ({ children, index, className, as: Component = 'p', ...props }, ref) => {
    return (
      <Component ref={ref} className={`${styles.base} ${className || ''}`} {...props}>
        {index && <span className={styles.index}>{index}</span>}
        <span className={styles.text}>{children}</span>
      </Component>
    );
  }
);

SectionLabel.displayName = 'SectionLabel';