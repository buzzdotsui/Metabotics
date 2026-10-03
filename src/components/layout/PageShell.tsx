import { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import styles from './PageShell.module.css';

interface PageShellProps {
  children: ReactNode;
  headerTransparent?: boolean;
}

export function PageShell({ children, headerTransparent = false }: PageShellProps) {
  return (
    <div className={styles.wrapper}>
      <SiteHeader transparent={headerTransparent} />
      <main id="main-content" className={styles.main} role="main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}