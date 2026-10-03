'use client';

import { ReactNode } from 'react';
import styles from './TechnicalAnnotation.module.css';

export type AnnotationPosition = 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface TechnicalAnnotationProps {
  label: string;
  detail?: string;
  position?: AnnotationPosition;
  offset?: { x: number; y: number };
  children?: ReactNode;
  className?: string;
}

export function TechnicalAnnotation({
  label,
  detail,
  position = 'top',
  offset = { x: 0, y: 0 },
  children,
  className,
}: TechnicalAnnotationProps) {
  const positionStyles = {
    top: { bottom: '100%', left: '50%', transform: `translateX(-50%) translateY(-8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    bottom: { top: '100%', left: '50%', transform: `translateX(-50%) translateY(8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    left: { right: '100%', top: '50%', transform: `translateY(-50%) translateX(-8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    right: { left: '100%', top: '50%', transform: `translateY(-50%) translateX(8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    'top-left': { bottom: '100%', left: '0', transform: `translateY(-8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    'top-right': { bottom: '100%', right: '0', transform: `translateY(-8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    'bottom-left': { top: '100%', left: '0', transform: `translateY(8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
    'bottom-right': { top: '100%', right: '0', transform: `translateY(8px) ${offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : ''}` },
  }[position];

  return (
    <div className={`${styles.wrapper} ${className || ''}`} style={{ ...positionStyles }} role="note" aria-label={label}>
      <div className={styles.annotation}>
        <span className={styles.label}>{label}</span>
        {detail && <span className={styles.detail}>{detail}</span>}
      </div>
      <div className={`${styles.connector} ${styles[position]}`} aria-hidden="true" />
      {children}
    </div>
  );
}