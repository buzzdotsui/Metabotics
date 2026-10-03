'use client';

import { ReactNode, forwardRef, AnchorHTMLAttributes } from 'react';
import styles from './Link.module.css';

export type LinkVariant = 'default' | 'muted';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: LinkVariant;
  className?: string;
  showArrow?: boolean;
  arrowDirection?: 'right' | 'left' | 'up' | 'down';
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = 'default', className, showArrow = true, arrowDirection = 'right', ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={`${styles.base} ${styles[variant]} ${className || ''}`}
        {...props}
      >
        <span className={styles.content}>
          {children}
          {showArrow && <span className={`${styles.arrow} ${styles[arrowDirection]}`} aria-hidden="true">→</span>}
        </span>
      </a>
    );
  }
);

Link.displayName = 'Link';