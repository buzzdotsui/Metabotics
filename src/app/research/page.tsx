import { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ResearchList } from '@/components/research/ResearchList';
import { CTASection } from '@/components/sections/CTASection';
import { researchItems } from '@/data/research';

export const metadata: Metadata = {
  title: 'Metabotics Research — Industrial AI, Automation & Digital Twins',
  description: 'Building the computational foundations for industrial intelligence. Digital twins, process optimization, edge computing.',
};

export default function ResearchPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="RESEARCH / 01"
        title="BUILDING THE\nCOMPUTATIONAL\nFOUNDATIONS FOR\nINDUSTRIAL\nINTELLIGENCE."
        primaryAction={{ label: 'VIEW ALL RESEARCH →', href: '/research' }}
        tone="dark"
        image={{
          src: '/images/research-industrial-lab.jpg',
          alt: 'Industrial research laboratory with monitoring equipment',
        }}
      />

      <FeatureSection
        eyebrow="RESEARCH AREAS"
        title="WHERE WE\nFOCUS."
        description="Our research spans the complete stack from sensor physics to decision-making algorithms — always grounded in real industrial problems."
        tone="light"
        visualPosition="right"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
          {['DIGITAL TWINS', 'INDUSTRY 4.0', 'SMART FURNACES', 'INDUSTRIAL IOT', 'AI IN MANUFACTURING', 'ENERGY EFFICIENCY', 'PREDICTIVE MAINTENANCE', 'EMERGING MARKETS', 'EDGE COMPUTING'].map((area, i) => (
            <div key={i} style={{ padding: 'var(--space-5)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-surface)' }}>
              <p className="technical-label" style={{ marginBottom: 'var(--space-3)' }}>{String(i + 1).padStart(2, '0')}</p>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0, color: 'var(--color-text-primary)' }}>{area}</h4>
            </div>
          ))}
        </div>
      </FeatureSection>

      <FeatureSection
        eyebrow="FEATURED RESEARCH"
        title="RECENT\nPUBLICATIONS."
        description="Peer-reviewed and technical publications demonstrating our approach to industrial intelligence."
        tone="dark"
        visualPosition="left"
      >
        <ResearchList items={researchItems.slice(0, 3)} />
      </FeatureSection>

      <CTASection
        title="EXPLORE OUR\nRESEARCH ARCHIVE."
        actionLabel="VIEW ALL RESEARCH →"
        actionHref="/research"
        tone="dark"
      />
    </PageShell>
  );
}