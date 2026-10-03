'use client';

import { ReactNode } from 'react';
import styles from './Grid.module.css';

export type GridColumns = 1 | 2 | 3 | 4 | 12;
export type GridGap = 'small' | 'default' | 'large';

interface GridProps {
  children: ReactNode;
  columns?: GridColumns;
  gap?: GridGap;
  className?: string;
  as?: 'div' | 'ul' | 'ol';
}

export function Grid({ children, columns = 1, gap = 'default', className, as: Component = 'div', ...props }: GridProps) {
  const gapClass = {
    small: styles.gapSmall,
    default: styles.gapDefault,
    large: styles.gapLarge,
  }[gap];

  const columnsStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  } as React.CSSProperties;

  return (
    <Component
      className={`${styles.base} ${gapClass} ${className || ''}`}
      style={columnsStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

Grid.displayName = 'Grid';