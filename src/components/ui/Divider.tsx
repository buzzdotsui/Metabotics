'use client';

import { forwardRef } from 'react';
import styles from './Divider.module.css';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerTone = 'subtle' | 'default';

interface DividerProps {
  orientation?: DividerOrientation;
  tone?: DividerTone;
  className?: string;
  'aria-orientation'?: DividerOrientation;
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', tone = 'default', className, 'aria-orientation': ariaOrientation, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={ariaOrientation || orientation}
        className={`${styles.base} ${styles[orientation]} ${tone === 'subtle' ? styles.subtle : ''} ${className || ''}`}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';