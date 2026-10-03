import Link from 'next/link';
import styles from './SiteFooter.module.css';
import { footerNavigation } from '@/data/navigation';

export function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Metabotics — Home">
              <svg className={styles.logoMark} viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <use href="/brand/mark.svg#metabotics-mark" />
              </svg>
              <span className={styles.logoText}>METABOTICS</span>
            </Link>
            <p className={styles.tagline}>SOFTWARE FOR THE PHYSICAL WORLD.</p>
          </div>

          <nav className={styles.navSection} aria-label="Company">
            <h3 className={styles.navTitle}>COMPANY</h3>
            <ul className={styles.navList}>
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.navSection} aria-label="Technology">
            <h3 className={styles.navTitle}>TECHNOLOGY</h3>
            <ul className={styles.navList}>
              {footerNavigation.technology.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.navSection} aria-label="Connect">
            <h3 className={styles.navTitle}>CONNECT</h3>
            <ul className={styles.navList}>
              {footerNavigation.connect.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-label={item.external ? `${item.label} (opens in new tab)` : item.label}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 METABOTICS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}