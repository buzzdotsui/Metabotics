'use client';

import { ReactNode, forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'text';
export type ButtonSize = 'default' | 'large';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'default', className, disabled = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.base} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className || ''}`}
        disabled={disabled}
        {...props}
      >
        <span className={styles.content}>
          {children}
        </span>
      </button>
    );
  }
);

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, variant = 'primary', size = 'default', className, disabled = false, href, ...props }, ref) => {
    if (disabled) {
      return (
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className={`${styles.base} ${styles[variant]} ${styles[size]} ${styles.disabled} ${className || ''}`}
          {...props}
        >
          <span className={styles.content}>{children}</span>
        </span>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={`${styles.base} ${styles[variant]} ${styles[size]} ${className || ''}`}
        {...props}
      >
        <span className={styles.content}>{children}</span>
      </a>
    );
  }
);

Button.displayName = 'Button';
LinkButton.displayName = 'LinkButton';