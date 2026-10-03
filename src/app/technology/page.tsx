import { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { SystemDiagram } from '@/components/diagrams/SystemDiagram';
import { CTASection } from '@/components/sections/CTASection';
import { technologyLayers, hardwareIntegrations, softwareLayers, integrationProtocols } from '@/data/technology';

export const metadata: Metadata = {
  title: 'Metabotics Technology — Industrial Intelligence Infrastructure',
  description: 'The engineering architecture behind intelligent industrial automation. Sensors, edge, AI engine, digital twins, and control.',
};

export default function TechnologyPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="TECHNOLOGY / 01"
        title="SOFTWARE FOR\nCOMPLEX PHYSICAL\nSYSTEMS."
        description="A software architecture that connects real-world processes with data, models and intelligence."
        primaryAction={{ label: 'EXPLORE THE PLATFORM →', href: '/technology#platform' }}
        tone="dark"
        image={{
          src: '/images/digital-twin-industrial.jpg',
          alt: 'Digital twin visualization of industrial system',
        }}
      >
        <SystemDiagram
          stages={technologyLayers.map(l => ({ id: l.id, label: l.label, description: l.title }))}
          orientation="vertical"
        />
      </Hero>

      {/* SYSTEM OVERVIEW */}
      <FeatureSection
        eyebrow="SYSTEM OVERVIEW"
        title="END-TO-END\nARCHITECTURE."
        description="The Metabotics platform connects physical sensors through edge processing to data infrastructure, machine learning, digital twins, and operational control — creating a closed loop from observation to action."
        tone="dark"
        visualPosition="right"
      >
        <SystemDiagram
          stages={technologyLayers.map(l => ({ id: l.id, label: l.label, description: l.title }))}
          orientation="horizontal"
        />
      </FeatureSection>

      {/* TECHNOLOGY LAYERS */}
      {technologyLayers.map((layer, index) => (
        <FeatureSection
          key={layer.id}
          eyebrow={`${layer.label} / ${layer.number}`}
          title={layer.title}
          description={layer.description}
          tone={index % 2 === 0 ? 'dark' : 'light'}
          visualPosition={index % 2 === 0 ? 'right' : 'left'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {layer.capabilities.map((cap, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-technical)', minWidth: '2rem', marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </FeatureSection>
      ))}

      {/* HARDWARE INTEGRATION */}
      <FeatureSection
        eyebrow="HARDWARE INTEGRATION"
        title="HARDWARE-AGNOSTIC\nCONNECTIVITY."
        description="The platform integrates with existing industrial hardware through standard protocols and custom parsers — no rip-and-replace required."
        tone="dark"
        visualPosition="right"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          {hardwareIntegrations.map((item, i) => (
            <div key={i} style={{ padding: 'var(--space-5)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-surface)' }}>
              <p className="technical-label" style={{ marginBottom: 'var(--space-3)' }}>{item.category}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {item.protocols.map((p, j) => (
                  <li key={j} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', padding: 'var(--space-1) var(--space-3)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-sm)' }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FeatureSection>

      {/* SOFTWARE LAYERS */}
      <FeatureSection
        eyebrow="SOFTWARE LAYER"
        title="COMPUTATIONAL\nINFRASTRUCTURE."
        description="Each layer of the software stack is designed for industrial-grade reliability, scalability, and real-time performance."
        tone="light"
        visualPosition="left"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {softwareLayers.map((layer, i) => (
            <div key={layer.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)' }}>
              <span className="technical-label" style={{ minWidth: '3rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 600, margin: '0 0 var(--space-1)' }}>{layer.label}</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>{layer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FeatureSection>

      {/* INTEGRATION LAYER */}
      <FeatureSection
        eyebrow="INTEGRATION LAYER"
        title="INDUSTRIAL\nCONNECTIVITY."
        description="The platform speaks the languages of industrial automation — from legacy PLCs to modern cloud analytics platforms."
        tone="dark"
        visualPosition="right"
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
          {integrationProtocols.map((protocol, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', padding: 'var(--space-2) var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-sm)' }}>
              {protocol}
            </span>
          ))}
        </div>
      </FeatureSection>

      {/* CTA */}
      <CTASection
        title="READY TO EXPLORE\nTHE PLATFORM?"
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}