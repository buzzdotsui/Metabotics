'use client';

import { ReactNode } from 'react';
import styles from './Section.module.css';

export type SectionTone = 'dark' | 'light';

interface SectionProps {
  children: ReactNode;
  id?: string;
  label?: string;
  tone?: SectionTone;
  className?: string;
  size?: 'default' | 'large' | 'medium';
  as?: 'section' | 'div';
}

export function Section({ children, id, label, tone = 'dark', className, size = 'default', as: Component = 'section', ...props }: SectionProps) {
  const toneClass = tone === 'light' ? styles.light : styles.dark;
  const sizeClass = {
    default: styles.default,
    large: styles.large,
    medium: styles.medium,
  }[size];

  return (
    <Component
      id={id}
      className={`${styles.base} ${toneClass} ${sizeClass} ${className || ''}`}
      {...props}
    >
      {label && <div className={styles.labelWrapper}><p className="technical-label">{label}</p></div>}
      {children}
    </Component>
  );
}

Section.displayName = 'Section';