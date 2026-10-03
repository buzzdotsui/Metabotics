'use client';

import { ReactNode, forwardRef } from 'react';
import styles from './Container.module.css';

export type ContainerSize = 'default' | 'wide' | 'reading';

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: 'div' | 'main' | 'section' | 'article';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'default', className, as: Component = 'div', ...props }, ref) => {
    const sizeClass = {
      default: styles.container,
      wide: styles.containerWide,
      reading: styles.containerReading,
    }[size];

    return (
      <Component ref={ref} className={`${styles.base} ${sizeClass} ${className || ''}`} {...props}>
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';