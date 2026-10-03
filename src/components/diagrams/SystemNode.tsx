'use client';

import styles from './SystemNode.module.css';

export type NodeStatus = 'default' | 'active' | 'complete';

interface SystemNodeProps {
  index?: string;
  title: string;
  description?: string;
  status?: NodeStatus;
  className?: string;
}

export function SystemNode({ index, title, description, status = 'default', className }: SystemNodeProps) {
  const statusClass = status !== 'default' ? styles[status] : '';

  return (
    <div className={`${styles.node} ${statusClass} ${className || ''}`} role="status" aria-live={status === 'active' ? 'polite' : 'off'}>
      {index && <span className={styles.index}>{index}</span>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      <span className={`${styles.statusIndicator} ${statusClass}`} aria-hidden="true">
        {status === 'active' && <span className={styles.pulse} />}
        {status === 'complete' && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6l2 2 4-4" />
          </svg>
        )}
      </span>
    </div>
  );
}