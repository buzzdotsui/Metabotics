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
  title: 'Energy-Intensive Industries — Metabotics Applications',
  description: 'Efficiency and emissions optimization for high-temperature processes. Energy monitoring, combustion optimization, process heat recovery.',
};

const application = applications.find(a => a.slug === 'energy-intensive');

const processSteps = [
  { id: 'fuel', label: 'FUEL INPUT', description: 'Gas, coal, biomass' },
  { id: 'combustion', label: 'COMBUSTION', description: 'Burner management' },
  { id: 'process', label: 'PROCESS HEAT', description: 'Kiln, furnace, reactor' },
  { id: 'recovery', label: 'HEAT RECOVERY', description: 'Waste heat capture' },
  { id: 'sensing', label: 'SENSING', description: 'Flue gas, temperature, flow' },
  { id: 'data', label: 'DATA', description: 'Energy balance, emissions' },
  { id: 'model', label: 'THERMAL MODEL', description: 'System simulation' },
  { id: 'optimization', label: 'OPTIMIZATION', description: 'Efficiency, emissions' },
  { id: 'control', label: 'CONTROL', description: 'Burner, recovery adjustment' },
];

const systemStages = [
  { id: 'physical', label: 'THERMAL SYSTEM', description: 'Kilns, furnaces, boilers' },
  { id: 'sensors', label: 'SENSORS', description: 'Flue gas (O₂, CO, NOx), temp, flow' },
  { id: 'edge', label: 'EDGE', description: 'Real-time energy balance' },
  { id: 'data', label: 'DATA', description: 'Specific energy, emissions' },
  { id: 'twin', label: 'THERMAL TWIN', description: 'Heat transfer & combustion' },
  { id: 'intelligence', label: 'INTELLIGENCE', description: 'Efficiency prediction' },
  { id: 'optimization', label: 'OPTIMIZATION', description: 'Fuel, air, recovery control' },
];

export default function EnergyIntensivePage() {
  if (!application) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow="APPLICATION / 04"
        title="ENERGY-\nINTENSIVE\nINDUSTRIES"
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
        title="HIGH TEMPERATURE,\nHIGH ENERGY,\nHIGH STAKES."
        description="Cement, glass, chemicals, and metals share a common challenge: converting fuel to process heat efficiently while meeting emissions targets and maintaining product quality."
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
        title="THERMAL ENERGY\nMANAGEMENT."
        description="Metabotics creates a complete energy balance — from fuel input through process heat to waste heat recovery — identifying losses and optimization opportunities at every stage."
        tone="dark"
        visualPosition="left"
      >
        <ProcessFlow steps={processSteps} orientation="horizontal" />
      </FeatureSection>

      <FeatureSection
        eyebrow="THE DATA"
        title="COMPLETE ENERGY\nVISIBILITY."
        description="Flue gas analyzers, thermal imaging, flow meters, and electrical monitoring provide a full picture of energy conversion and loss."
        tone="dark"
        visualPosition="right"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
          {['Flue Gas Analysis (O₂, CO, NOx, SOx)', 'Thermal Imaging & Pyrometry', 'Fuel Flow & Composition', 'Process Temperature Profiles', 'Waste Heat Stream Monitoring', 'Electrical Power & Power Factor'].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="THE INTELLIGENCE"
        title="EFFICIENCY &\nEMISSIONS."
        description="Models optimize the combustion process and heat recovery network — reducing specific energy consumption while maintaining emissions compliance."
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
        title="COMBUSTION &\nRECOVERY CONTROL."
        description="Burner air/fuel ratios, waste heat recovery bypasses, and process setpoints adjust in real-time to minimize energy per unit of production."
        tone="dark"
        visualPosition="right"
      >
        <SystemDiagram stages={systemStages} orientation="horizontal" />
      </FeatureSection>

      <CTASection
        title="REDUCE ENERGY\nPER UNIT OUTPUT."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}