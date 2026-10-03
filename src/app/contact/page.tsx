'use client';

import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactFormValues } from '@/components/contact/ContactForm';

function handleSubmit(values: ContactFormValues) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log('Form submitted:', values);
      if (Math.random() > 0.1) {
        resolve();
      } else {
        reject(new Error('Network error. Please try again.'));
      }
    }, 1500);
  });
}

export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="CONTACT / 01"
        title="LET'S WORK ON\nTHE PHYSICAL\nWORLD."
        description="Industrial partnerships. Pilot projects. Research collaboration. Investment."
        tone="dark"
        image={{
          src: '/images/contact-industrial-facility.jpg',
          alt: 'Industrial facility exterior',
        }}
      />

      <FeatureSection
        eyebrow="GET IN TOUCH"
        title="START A\nCONVERSATION."
        description="Every engagement begins with understanding your system. We'll discuss your process, challenges, and objectives — then outline how Metabotics can help."
        tone="light"
        visualPosition="right"
      >
        <ContactForm onSubmit={handleSubmit} />
      </FeatureSection>

      <FeatureSection
        eyebrow="CONTACT INFORMATION"
        title="OTHER WAYS\nTO REACH US."
        description="Direct contact channels for inquiries and partnership discussions."
        tone="dark"
        visualPosition="left"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <a href="mailto:hello@metabotics.com" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit', transition: 'border-color var(--duration-fast)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', minWidth: '5rem' }}>EMAIL</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>hello@metabotics.com</span>
          </a>
          <a href="https://linkedin.com/company/metabotics" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit', transition: 'border-color var(--duration-fast)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', minWidth: '5rem' }}>LINKEDIN</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>linkedin.com/company/metabotics</span>
          </a>
        </div>
      </FeatureSection>
    </PageShell>
  );
}