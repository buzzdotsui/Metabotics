import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ProcessFlow } from '@/components/diagrams/ProcessFlow';
import { SystemDiagram } from '@/components/diagrams/SystemDiagram';
import { CTASection } from '@/components/sections/CTASection';
import { applications } from '@/data/applications';

export const metadata: Metadata = {
  title: 'Heat Treatment — Metabotics Applications',
  description: 'Precision control for thermal processing and material properties. Heating cycles, cooling cycles, temperature profiles.',
};

const application = applications.find(a => a.slug === 'heat-treatment');

const processSteps = [
  { id: 'input', label: 'WORKPIECE', description: 'Material loading' },
  { id: 'heating', label: 'HEATING', description: 'Ramp to target temperature' },
  { id: 'soak', label: 'SOAK', description: 'Hold at temperature' },
  { id: 'cooling', label: 'COOLING', description: 'Controlled quench/cool' },
  { id: 'sensing', label: 'SENSING', description: 'Thermocouples, pyrometers' },
  { id: 'data', label: 'DATA', description: 'Cycle recording' },
  { id: 'model', label: 'MODEL', description: 'Thermal simulation' },
  { id: 'prediction', label: 'PREDICTION', description: 'Hardness, distortion' },
  { id: 'control', label: 'CONTROL', description: 'Profile adjustment' },
];

const systemStages = [
  { id: 'physical', label: 'FURNACE', description: 'Batch, continuous, vacuum' },
  { id: 'sensors', label: 'SENSORS', description: 'Multi-zone thermocouples, IR' },
  { id: 'edge', label: 'EDGE', description: 'Cycle data capture' },
  { id: 'data', label: 'DATA', description: 'Thermal profiles' },
  { id: 'twin', label: 'THERMAL MODEL', description: 'Heat transfer simulation' },
  { id: 'intelligence', label: 'INTELLIGENCE', description: 'Property prediction' },
  { id: 'optimization', label: 'OPTIMIZATION', description: 'Cycle time, energy, quality' },
];

export default function HeatTreatmentPage() {
  if (!application) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow="APPLICATION / 02"
        title="HEAT\nTREATMENT"
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
        title="PRECISION THERMAL\nPROCESSING."
        description="Heat treatment demands exact temperature uniformity, controlled atmospheres, and precise cooling rates. Variations cause distortion, incorrect hardness, and scrap."
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
        title="THERMAL CYCLE\nINTELLIGENCE."
        description="Metabotics monitors the complete thermal cycle — heating, soaking, and cooling — building a digital representation of the thermal field within the furnace and workpiece."
        tone="dark"
        visualPosition="left"
      >
        <ProcessFlow steps={processSteps} orientation="horizontal" />
      </FeatureSection>

      <FeatureSection
        eyebrow="THE DATA"
        title="MULTI-ZONE\nMONITORING."
        description="Distributed thermocouples, infrared pyrometers, and atmosphere sensors provide complete thermal and chemical visibility."
        tone="dark"
        visualPosition="right"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
          {['Multi-zone Thermocouples', 'Infrared Pyrometry', 'Atmosphere Composition (C, O, N)', 'Pressure & Flow Monitoring', 'Workpiece Temperature (embedded)', 'Quench Medium Temperature'].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="THE INTELLIGENCE"
        title="PROPERTY\nPREDICTION."
        description="Physics-informed ML models predict final material properties from thermal history — enabling real-time cycle adjustment."
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
        title="CYCLE\nOPTIMIZATION."
        description="Intelligence drives decisions — reducing cycle time, minimizing energy, ensuring uniformity, and eliminating distortion."
        tone="dark"
        visualPosition="right"
      >
        <SystemDiagram stages={systemStages} orientation="horizontal" />
      </FeatureSection>

      <CTASection
        title="OPTIMIZE YOUR\nHEAT TREATMENT."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}