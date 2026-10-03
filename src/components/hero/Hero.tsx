'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Button, LinkButton } from '@/components/ui/Button';
import { SystemDiagram } from '@/components/diagrams/SystemDiagram';
import styles from './Hero.module.css';
import { systemStages } from '@/data/technology';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  visual?: ReactNode;
  children?: ReactNode;
  tone?: 'dark' | 'light';
  alignment?: 'left' | 'center';
  image?: {
    src: string;
    alt: string;
  };
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  visual,
  children,
  tone = 'dark',
  alignment = 'left',
  image,
}: HeroProps) {
  const toneClass = tone === 'light' ? styles.light : styles.dark;
  const alignmentClass = alignment === 'center' ? styles.center : styles.left;

  return (
    <section className={`${styles.hero} ${toneClass} ${alignmentClass}`} aria-labelledby="hero-title">
      <div className={styles.background} aria-hidden="true">
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 55vw"
              className={styles.image}
              quality={90}
            />
          </div>
        )}
        <div className={styles.overlay} />
        <div className="technical-grid" />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            {eyebrow && <p className={`${styles.eyebrow} technical-label`}>{eyebrow}</p>}
            <h1 id="hero-title" className={`${styles.title} heading-hero`}>
              {title.split('\n').map((line, i) => (
                <span key={i} className={styles.titleLine}>{line}</span>
              ))}
            </h1>
            {description && <p className={`${styles.description} body-large`}>{description}</p>}
            <div className={styles.actions}>
              {primaryAction && (
                <LinkButton variant={tone === 'dark' ? 'primary' : 'light'} size="large" href={primaryAction.href}>
                  {primaryAction.label}
                </LinkButton>
              )}
              {secondaryAction && (
                <LinkButton variant={tone === 'dark' ? 'secondary' : 'text'} size="default" href={secondaryAction.href}>
                  {secondaryAction.label}
                </LinkButton>
              )}
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            {children || visual || (
              <SystemDiagram
                stages={systemStages}
                orientation="vertical"
                className={styles.diagram}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}