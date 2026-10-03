import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ProcessFlow } from '@/components/diagrams/ProcessFlow';
import { SystemDiagram } from '@/components/diagrams/SystemDiagram';
import { CTASection } from '@/components/sections/CTASection';
import { applications } from '@/data/applications';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Steel & Foundries — Metabotics Applications',
  description: 'Industrial intelligence for complex materials-processing systems. Furnace operations, energy optimization, casting quality.',
};

const application = applications.find(a => a.slug === 'steel-foundries');

const processSteps = [
  { id: 'input', label: 'RAW MATERIALS', description: 'Iron ore, scrap, alloys' },
  { id: 'process', label: 'EAF / FURNACE', description: 'Melting and refining' },
  { id: 'sensing', label: 'SENSING', description: 'Thermal, vibration, gas' },
  { id: 'data', label: 'DATA', description: 'Time-series aggregation' },
  { id: 'model', label: 'DIGITAL TWIN', description: 'Process simulation' },
  { id: 'decision', label: 'INTELLIGENCE', description: 'Optimization & prediction' },
  { id: 'control', label: 'CONTROL', description: 'Setpoint adjustment' },
];

const systemStages = [
  { id: 'physical', label: 'PHYSICAL SYSTEM', description: 'Electric arc furnace, ladle, caster' },
  { id: 'sensors', label: 'SENSORS', description: 'Pyrometers, accelerometers, gas analyzers' },
  { id: 'edge', label: 'EDGE', description: 'Local preprocessing, filtering' },
  { id: 'data', label: 'DATA', description: 'Structured time-series' },
  { id: 'twin', label: 'DIGITAL TWIN', description: 'Thermal-mechanical model' },
  { id: 'intelligence', label: 'INTELLIGENCE', description: 'Temperature prediction, anomaly detection' },
  { id: 'optimization', label: 'OPTIMIZATION', description: 'Power profile, tap temperature, alloy' },
];

export default function SteelFoundriesPage() {
  if (!application) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow="APPLICATION / 01"
        title="STEEL &\nFOUNDRIES"
        description={application!.description}
        primaryAction={{ label: 'CONTACT METABOTICS →', href: '/contact' }}
        tone="dark"
        image={{
          src: application!.image,
          alt: application!.imageAlt,
        }}
      />

      <FeatureSection
        eyebrow="THE CHALLENGE"
        title="COMPLEX MATERIALS\nPROCESSING."
        description="Steel production involves extreme temperatures, rapid phase changes, and multi-physics interactions. Small variations in process conditions lead to significant quality and energy impacts."
        tone="light"
        visualPosition="right"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {application!.challenges.map((challenge, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)' }}>
              <span className="technical-label" style={{ minWidth: '2rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: 'var(--color-text-secondary)' }}>{challenge}</span>
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="THE SYSTEM"
        title="PROCESS FLOW\nINTEGRATION."
        description="Metabotics integrates at each stage of the steelmaking process — from raw material handling through final casting — creating a continuous data thread."
        tone="dark"
        visualPosition="left"
      >
        <ProcessFlow steps={processSteps} orientation="horizontal" />
      </FeatureSection>

      <FeatureSection
        eyebrow="THE DATA"
        title="MULTI-MODAL\nSENSING."
        description="High-frequency data from thermal, mechanical, and chemical sensors provides complete visibility into furnace and casting conditions."
        tone="dark"
        visualPosition="right"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
          {['Thermal Imaging & Pyrometry', 'Vibration & Acoustic Monitoring', 'Off-gas Analysis (CO, CO₂, O₂)', 'Electrical Parameters (V, I, Power)', 'Mechanical Position & Force', 'Ambient Environment'].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="THE INTELLIGENCE"
        title="PREDICTIVE\nCAPABILITIES."
        description="Machine learning models trained on process data enable prediction and optimization across the steelmaking chain."
        tone="light"
        visualPosition="left"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {application!.capabilities.map((cap, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)' }}>
              <span className="technical-label" style={{ minWidth: '2rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: 'var(--color-text-secondary)' }}>{cap}</span>
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="THE OPTIMIZATION"
        title="CLOSED-LOOP\nCONTROL."
        description="Intelligence translates to operational decisions — power profiles, tap temperatures, alloy additions, and casting parameters."
        tone="dark"
        visualPosition="right"
      >
        <SystemDiagram stages={systemStages} orientation="horizontal" />
      </FeatureSection>

      <CTASection
        title="APPLY METABOTICS\nTO YOUR OPERATION."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}