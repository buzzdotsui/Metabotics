'use client';

import { ReactNode } from 'react';
import { ResearchRow } from './ResearchRow';
import { ResearchItem } from '@/data/research';
import styles from './ResearchList.module.css';

interface ResearchListProps {
  items: ResearchItem[];
  variant?: 'default' | 'compact';
  className?: string;
  heading?: ReactNode;
}

export function ResearchList({ items, variant = 'default', className, heading }: ResearchListProps) {
  if (items.length === 0) {
    return (
      <div className={styles.empty} role="status">
        <p className="technical-label">NO RESEARCH</p>
        <p className="body-base">No research items are currently available.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.list} ${className || ''}`}>
      {heading && <div className={styles.heading}>{heading}</div>}
      <div className={styles.rows} role="list" aria-label="Research publications">
        {items.map((item, index) => (
          <ResearchRow key={item.slug} item={item} variant={variant} />
        ))}
      </div>
    </div>
  );
}