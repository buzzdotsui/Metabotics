'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, LinkButton } from '@/components/ui/Button';
import { MobileNavigation } from './MobileNavigation';
import styles from './SiteHeader.module.css';
import { navigation } from '@/data/navigation';

interface SiteHeaderProps {
  transparent?: boolean;
}

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${transparent ? styles.transparent : ''} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
      role="banner"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Metabotics — Home">
          <svg className={styles.logoMark} viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <use href="/brand/mark.svg#metabotics-mark" />
          </svg>
          <span className={styles.logoText}>METABOTICS</span>
        </Link>

        <nav className={styles.navDesktop} role="navigation" aria-label="Main navigation">
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LinkButton variant="primary" size="default" href="/contact" className={styles.contactBtn}>
            CONTACT →
          </LinkButton>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        currentPath={pathname}
      />

      <div className={styles.border} aria-hidden="true" />
    </header>
  );
}