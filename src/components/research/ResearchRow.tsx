'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ResearchRow.module.css';
import { ResearchItem } from '@/data/research';

interface ResearchRowProps {
  item: ResearchItem;
  variant?: 'default' | 'compact';
}

export function ResearchRow({ item, variant = 'default' }: ResearchRowProps) {
  return (
    <motion.article
      className={`${styles.row} ${variant === 'compact' ? styles.compact : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.meta}>
        <span className={styles.category}>{item.category}</span>
        <span className={styles.divider} aria-hidden="true" />
        <time className={styles.date} dateTime={item.publishedAt}>
          {new Date(item.publishedAt).getFullYear()}
        </time>
        <span className={styles.readingTime}>
          {item.readingTime} MIN READ
        </span>
      </div>

      <Link href={item.href} className={styles.link} aria-label={`Read research: ${item.title}`}>
        <div className={styles.content}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>

        {item.coverImage && (
          <div className={styles.imageWrapper} aria-hidden="true">
            <Image
              src={item.coverImage}
              alt={item.coverImageAlt || ''}
              fill
              sizes="(max-width: 767px) 100vw, 35vw"
              className={styles.image}
              quality={85}
            />
          </div>
        )}

        <span className={styles.arrow} aria-hidden="true">READ →</span>
      </Link>

      <div className={styles.divider} aria-hidden="true" />
    </motion.article>
  );
}