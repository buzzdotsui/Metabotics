'use client';

import { motion } from 'framer-motion';
import styles from './ProcessFlow.module.css';

export interface ProcessStep {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  status?: 'default' | 'active' | 'complete';
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function ProcessFlow({ steps, orientation = 'vertical', className }: ProcessFlowProps) {
  const isVertical = orientation === 'vertical';

  return (
    <div className={`${styles.container} ${isVertical ? styles.vertical : styles.horizontal} ${className || ''}`} role="list" aria-label="Process flow">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className={styles.stepWrapper}
          role="listitem"
          initial={{ opacity: 0, y: isVertical ? 20 : 0, x: isVertical ? 0 : 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`${styles.step} ${step.status || 'default'}`}>
            <span className={styles.stepLabel}>{step.label}</span>
            {step.description && <span className={styles.stepDescription}>{step.description}</span>}
            {step.status === 'active' && <span className={styles.activeIndicator} aria-label="Active" />}
            {step.status === 'complete' && (
              <svg className={styles.completeIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 8l3 3 5-5" />
              </svg>
            )}
          </div>

          {index < steps.length - 1 && (
            <motion.div
              className={`${styles.connection} ${isVertical ? styles.verticalConn : styles.horizontalConn}`}
              initial={{ scaleY: 0, scaleX: 0 }}
              animate={{ scaleY: 1, scaleX: 1 }}
              transition={{ delay: index * 0.1 + 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {isVertical ? (
                  <path d="M12 5v14M12 19l-4-4M12 19l4-4" />
                ) : (
                  <path d="M5 12h14M19 12l-4-4M19 12l-4 4" />
                )}
              </svg>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}