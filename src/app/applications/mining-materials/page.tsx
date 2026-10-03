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
  title: 'Mining & Materials — Metabotics Applications',
  description: 'Process intelligence for extraction and beneficiation operations. Process monitoring, yield optimization, waste reduction.',
};

const application = applications.find(a => a.slug === 'mining-materials');

const processSteps = [
  { id: 'input', label: 'ORE BODY', description: 'Grade variability' },
  { id: 'comminution', label: 'COMMINUTION', description: 'Crushing & grinding' },
  { id: 'classification', label: 'CLASSIFICATION', description: 'Size separation' },
  { id: 'concentration', label: 'CONCENTRATION', description: 'Flotation, magnetic, gravity' },
  { id: 'sensing', label: 'SENSING', description: 'Online analyzers, sensors' },
  { id: 'data', label: 'DATA', description: 'Real-time assays, flow' },
  { id: 'model', label: 'PROCESS MODEL', description: 'Circuit simulation' },
  { id: 'prediction', label: 'PREDICTION', description: 'Recovery, grade, throughput' },
  { id: 'control', label: 'CONTROL', description: 'Reagent, setpoint adjustment' },
];

const systemStages = [
  { id: 'physical', label: 'PROCESS PLANT', description: 'Crushers, mills, flotation' },
  { id: 'sensors', label: 'SENSORS', description: 'Online XRF, density, flow, level' },
  { id: 'edge', label: 'EDGE', description: 'Data conditioning, aggregation' },
  { id: 'data', label: 'DATA', description: 'Time-series, assays, KPIs' },
  { id: 'twin', label: 'DIGITAL TWIN', description: 'Circuit model, mass balance' },
  { id: 'intelligence', label: 'INTELLIGENCE', description: 'Recovery optimization' },
  { id: 'optimization', label: 'OPTIMIZATION', description: 'Reagent control, setpoints' },
];

export default function MiningMaterialsPage() {
  if (!application) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow="APPLICATION / 03"
        title="MINING &\nMATERIALS"
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
        title="VARIABLE ORE,\nFIXED INFRASTRUCTURE."
        description="Ore grade and mineralogy vary continuously. Fixed plant infrastructure must adapt to maximize recovery and minimize energy and reagent consumption."
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
        title="BENEFICIATION\nCIRCUIT INTELLIGENCE."
        description="Metabotics connects comminution, classification, and concentration into a unified optimization loop — from mine to concentrate."
        tone="dark"
        visualPosition="left"
      >
        <ProcessFlow steps={processSteps} orientation="horizontal" />
      </FeatureSection>

      <FeatureSection
        eyebrow="THE DATA"
        title="REAL-TIME\nASSAY & FLOW."
        description="Online elemental analyzers, density gauges, flow meters, and level sensors provide the data foundation for circuit control."
        tone="dark"
        visualPosition="right"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
          {['Online XRF/XRD Analyzers', 'Nucleonic Density Gauges', 'Electromagnetic Flow Meters', 'Radar/Laser Level Sensors', 'Froth Cameras & Image Analysis', 'Motor Current & Vibration'].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="THE INTELLIGENCE"
        title="RECOVERY\nMAXIMIZATION."
        description="Models predict circuit response to ore changes and reagent adjustments — enabling proactive control rather than reactive correction."
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
        title="ADAPTIVE\nCIRCUIT CONTROL."
        description="Setpoints adjust continuously — reagent dosages, classifier speeds, cell levels, and mill loading — to maintain optimal recovery."
        tone="dark"
        visualPosition="right"
      >
        <SystemDiagram stages={systemStages} orientation="horizontal" />
      </FeatureSection>

      <CTASection
        title="IMPROVE YOUR\nPROCESS RECOVERY."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}