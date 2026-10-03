'use client';

import { motion } from 'framer-motion';
import { SystemNode } from './SystemNode';
import styles from './SystemDiagram.module.css';
import { SystemStage } from '@/data/technology';

interface SystemDiagramProps {
  stages: SystemStage[];
  orientation?: 'horizontal' | 'vertical';
  activeStageId?: string;
  className?: string;
  showConnections?: boolean;
}

export function SystemDiagram({
  stages,
  orientation = 'horizontal',
  activeStageId,
  className,
  showConnections = true,
}: SystemDiagramProps) {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`${styles.container} ${isVertical ? styles.vertical : styles.horizontal} ${className || ''}`}
      role="img"
      aria-label={`System diagram showing ${stages.map(s => s.label).join(', ')}`}
    >
      <div className={styles.stages} style={{ '--stages-count': stages.length } as React.CSSProperties}>
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            className={styles.stageWrapper}
            initial={{ opacity: 0, y: isVertical ? 20 : 0, x: isVertical ? 0 : 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SystemNode
              index={String(index + 1).padStart(2, '0')}
              title={stage.label}
              description={stage.description}
              status={activeStageId === stage.id ? 'active' : index < (stages.findIndex(s => s.id === activeStageId) ?? stages.length) ? 'complete' : 'default'}
            />

            {showConnections && index < stages.length - 1 && (
              <motion.div
                className={`${styles.connection} ${isVertical ? styles.verticalConn : styles.horizontalConn}`}
                initial={{ scaleY: 0, scaleX: 0 }}
                animate={{ scaleY: 1, scaleX: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ '--connection-index': index } as React.CSSProperties}
                aria-hidden="true"
              >
                <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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

      <div className={styles.accessibleDescription} aria-hidden="true">
        <p>
          The Metabotics system connects physical systems to data, digital twins, intelligence and optimization.
        </p>
      </div>
    </div>
  );
}