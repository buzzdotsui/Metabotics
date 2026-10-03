import { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { SystemDiagram } from '@/components/diagrams/SystemDiagram';
import { ApplicationList } from '@/components/applications/ApplicationList';
import { ResearchList } from '@/components/research/ResearchList';
import { CTASection } from '@/components/sections/CTASection';
import { applications } from '@/data/applications';
import { researchItems } from '@/data/research';
import { systemStages } from '@/data/technology';

export const metadata: Metadata = {
  title: 'Metabotics — Software for the Physical World',
  description: 'Intelligent software infrastructure for industrial and metallurgical systems. From physical process to intelligent control.',
};

export default function HomePage() {
  return (
    <PageShell headerTransparent>
      {/* HERO */}
      <Hero
        eyebrow="METABOTICS / 01"
        title="SOFTWARE FOR\ntHE PHYSICAL\nWORLD."
        description="Intelligent software infrastructure for industrial and metallurgical systems."
        primaryAction={{ label: 'EXPLORE TECHNOLOGY →', href: '/technology' }}
        secondaryAction={{ label: 'VIEW APPLICATIONS →', href: '/applications' }}
        tone="dark"
        alignment="left"
        image={{
          src: '/images/hero-industrial-plant.jpg',
          alt: 'Industrial plant with piping and structures at dusk',
        }}
      >
        <SystemDiagram stages={systemStages} orientation="vertical" />
      </Hero>

      {/* THE PHYSICAL WORLD */}
      <FeatureSection
        eyebrow="THE PHYSICAL WORLD"
        title="INDUSTRY RUNS ON\nPHYSICAL SYSTEMS."
        description="Machines, materials, energy, heat and motion interact continuously. Understanding these systems requires software that can operate at the intersection of physical processes and computation."
        tone="light"
        visualPosition="right"
        image={{
          src: '/images/physical-world-machinery.jpg',
          alt: 'Heavy industrial machinery in operation',
        }}
      />

      {/* THE SYSTEM */}
      <FeatureSection
        eyebrow="THE SYSTEM / 01"
        title="FROM PHYSICAL PROCESS\nTO INTELLIGENT CONTROL."
        description="The Metabotics system transforms industrial operations through four connected stages — each building on the previous to create a closed loop of observation, modeling, understanding, and optimization."
        tone="dark"
        visualPosition="left"
      >
        <SystemDiagram stages={systemStages} orientation="horizontal" className="system-diagram-wide" />
      </FeatureSection>

      {/* PLATFORM */}
      <FeatureSection
        eyebrow="PLATFORM / 01"
        title="SOFTWARE THAT CONNECTS\nTHE PHYSICAL AND\nDIGITAL WORLDS."
        description="An end-to-end architecture that captures signals from physical systems, structures them into usable data, builds computational representations, extracts intelligence, and closes the loop with operational decisions."
        tone="dark"
        visualPosition="right"
        image={{
          src: '/images/platform-control-room.jpg',
          alt: 'Industrial control room with monitoring displays',
        }}
      />

      {/* INTELLIGENCE */}
      <FeatureSection
        eyebrow="INTELLIGENCE / 01"
        title="UNDERSTAND WHAT\nTHE SYSTEM IS DOING."
        description="Machine learning models process high-frequency sensor data to identify patterns, predict behavior, detect anomalies, and support operational reasoning — turning raw signals into actionable intelligence."
        tone="light"
        visualPosition="left"
        image={{
          src: '/images/intelligence-industrial-sensors.jpg',
          alt: 'Industrial sensors and monitoring equipment',
        }}
      />

      {/* APPLICATIONS */}
      <section className="applications-section" aria-labelledby="applications-heading">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--padding-inline)' }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <p className="technical-label">APPLICATIONS</p>
            <h2 id="applications-heading" className="heading-section">INTELLIGENCE FOR THE SYSTEMS THAT POWER INDUSTRY.</h2>
          </div>
          <ApplicationList applications={applications} />
        </div>
      </section>

      {/* RESEARCH */}
      <section className="research-section" aria-labelledby="research-heading">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--padding-inline)' }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <p className="technical-label">RESEARCH</p>
            <h2 id="research-heading" className="heading-section">BUILDING THE SOFTWARE FOR INDUSTRIAL INTELLIGENCE.</h2>
          </div>
          <ResearchList items={researchItems.slice(0, 3)} />
        </div>
      </section>

      {/* VISION */}
      <FeatureSection
        eyebrow="THE VISION"
        title="THE NEXT GENERATION OF\nINDUSTRIAL SOFTWARE\nWILL UNDERSTAND THE\nPHYSICAL WORLD."
        description="Software is moving beyond screens and databases. It is becoming part of the systems that produce, move, transform and control physical things. Metabotics builds the computational foundation for this transition — where intelligence doesn't just observe the physical world, but participates in it."
        tone="dark"
        visualPosition="right"
      />

      {/* CONTACT CTA */}
      <CTASection
        title="LET'S BUILD INTELLIGENT\nSYSTEMS FOR THE\nPHYSICAL WORLD."
        description="Partnerships. Industrial systems. Research."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}