'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ApplicationRow.module.css';
import { Application } from '@/data/applications';

interface ApplicationRowProps {
  application: Application;
  variant?: 'default' | 'compact';
}

export function ApplicationRow({ application, variant = 'default' }: ApplicationRowProps) {
  return (
    <motion.article
      className={`${styles.row} ${variant === 'compact' ? styles.compact : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
    >
      <Link href={application.href} className={styles.link} aria-label={`View ${application.title} application`}>
        <div className={styles.numberWrapper}>
          <span className={styles.number}>{application.number}</span>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{application.title}</h3>
          <p className={styles.description}>{application.description}</p>
        </div>

        <div className={styles.imageWrapper} aria-hidden="true">
          <Image
            src={application.image}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 40vw"
            className={styles.image}
            quality={85}
          />
        </div>

        <span className={styles.arrow} aria-hidden="true">→</span>
      </Link>

      <div className={styles.divider} aria-hidden="true" />
    </motion.article>
  );
}