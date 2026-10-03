import { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 / System Not Found — Metabotics',
  description: 'The requested route does not exist.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <PageShell>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={`${styles.code} technical-label`}>404 / SYSTEM NOT FOUND</p>
          <h1 className={styles.title}>The requested route does not exist.</h1>
          <p className={styles.description}>The path you requested could not be found in the system.</p>
          <Link href="/" className={styles.link}>
            <span className="btn btn--primary btn--large">RETURN TO METABOTICS →</span>
          </Link>
        </div>
        <div className={styles.grid} aria-hidden="true" />
      </div>
    </PageShell>
  );
}