import { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ApplicationList } from '@/components/applications/ApplicationList';
import { CTASection } from '@/components/sections/CTASection';
import { applications } from '@/data/applications';

export const metadata: Metadata = {
  title: 'Metabotics Applications — Intelligent Industrial Systems',
  description: 'Where Metabotics applies: Steel & Foundries, Heat Treatment, Mining & Materials, Energy-Intensive Industries.',
};

export default function ApplicationsPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="APPLICATIONS / 01"
        title="INTELLIGENCE FOR\nTHE SYSTEMS THAT\nPOWER INDUSTRY."
        description="Metabotics applies to industries where physical processes are complex, energy-intensive, and critical to global infrastructure."
        primaryAction={{ label: 'CONTACT METABOTICS →', href: '/contact' }}
        tone="dark"
        image={{
          src: '/images/application-steel-foundry.jpg',
          alt: 'Steel foundry operation',
        }}
      />

      <FeatureSection
        eyebrow="APPLICATION DOMAINS"
        title="WHERE METABOTICS\nOPERATES."
        description="Each application domain presents unique physical challenges. The Metabotics platform adapts to the specific physics, constraints, and operational requirements of each industrial context."
        tone="light"
        visualPosition="right"
      >
        <ApplicationList applications={applications} />
      </FeatureSection>

      <CTASection
        title="DISCUSS YOUR\nAPPLICATION."
        description="Every industrial system is unique. Let's explore how Metabotics can address your specific challenges."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}