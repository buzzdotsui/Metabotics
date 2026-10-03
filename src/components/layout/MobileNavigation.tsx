'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';
import styles from './MobileNavigation.module.css';
import { navigation } from '@/data/navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileNavigation({ isOpen, onClose, currentPath }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      panelRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      ref={panelRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      tabIndex={-1}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo} onClick={onClose} aria-label="Metabotics — Home">
            <svg className={styles.logoMark} viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <use href="/brand/mark.svg#metabotics-mark" />
            </svg>
            <span className={styles.logoText}>METABOTICS</span>
          </Link>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation menu"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className={styles.nav} role="navigation" aria-label="Mobile navigation">
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${currentPath === item.href ? styles.active : ''}`}
                  onClick={onClose}
                  aria-current={currentPath === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={styles.navItem}>
              <LinkButton variant="primary" size="large" href="/contact" className={styles.contactBtn}>
                CONTACT →
              </LinkButton>
            </li>
          </ul>
        </nav>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.footer}>
          <p className={styles.copyright}>© 2026 METABOTICS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}