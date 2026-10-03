'use client';

import { ReactNode } from 'react';
import { ApplicationRow } from './ApplicationRow';
import { Application } from '@/data/applications';
import styles from './ApplicationList.module.css';

interface ApplicationListProps {
  applications: Application[];
  variant?: 'default' | 'compact';
  className?: string;
  heading?: ReactNode;
}

export function ApplicationList({ applications, variant = 'default', className, heading }: ApplicationListProps) {
  if (applications.length === 0) {
    return (
      <div className={styles.empty} role="status">
        <p className="technical-label">NO APPLICATIONS</p>
        <p className="body-base">No applications are currently configured.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.list} ${className || ''}`}>
      {heading && <div className={styles.heading}>{heading}</div>}
      <div className={styles.rows} role="list" aria-label="Applications">
        {applications.map((app, _index) => (
          <ApplicationRow key={app.slug} application={app} variant={variant} />
        ))}
      </div>
    </div>
  );
}