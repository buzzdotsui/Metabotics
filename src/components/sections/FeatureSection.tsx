'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './FeatureSection.module.css';

interface FeatureSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  visual?: ReactNode;
  children?: ReactNode;
  visualPosition?: 'left' | 'right';
  tone?: 'dark' | 'light';
  className?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export function FeatureSection({
  eyebrow,
  title,
  description,
  visual,
  children,
  visualPosition = 'right',
  tone = 'dark',
  className,
  image,
}: FeatureSectionProps) {
  const toneClass = tone === 'light' ? styles.light : styles.dark;
  const positionClass = visualPosition === 'left' ? styles.left : styles.right;

  return (
    <section className={`${styles.section} ${toneClass} ${positionClass} ${className || ''}`} aria-labelledby={eyebrow ? undefined : 'feature-title'}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            {eyebrow && <p className={`${styles.eyebrow} technical-label`}>{eyebrow}</p>}
            <h2 id="feature-title" className={`${styles.title} heading-section`}>{title}</h2>
            <p className={`${styles.description} body-large`}>{description}</p>
          </div>

          <div className={styles.visual} aria-hidden="true">
            {children || visual || (image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={styles.image}
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}