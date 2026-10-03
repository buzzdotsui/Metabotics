'use client';

import { Button, LinkButton } from '@/components/ui/Button';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title: string;
  description?: string;
  actionLabel: string;
  actionHref: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function CTASection({ title, description, actionLabel, actionHref, tone = 'dark', className }: CTASectionProps) {
  const toneClass = tone === 'light' ? styles.light : styles.dark;

  return (
    <section className={`${styles.section} ${toneClass} ${className || ''}`} aria-labelledby="cta-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="cta-title" className={`${styles.title} heading-section`}>{title}</h2>
          {description && <p className={`${styles.description} body-large`}>{description}</p>}
          <LinkButton variant={tone === 'dark' ? 'primary' : 'light'} size="large" href={actionHref} className={styles.button}>
            {actionLabel}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}