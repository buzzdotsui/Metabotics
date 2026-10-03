import { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Metabotics — Intelligent Industrial Technology',
  description: 'Why Metabotics exists. Building software for the physical world. Vision, team, and research.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="ABOUT / 01"
        title="BUILDING SOFTWARE\nFOR THE PHYSICAL\nWORLD."
        description="Metabotics builds intelligent software infrastructure for industrial systems. We operate at the intersection of physical processes, data, and computation."
        tone="dark"
        image={{
          src: '/images/about-industrial-engineer.jpg',
          alt: 'Industrial engineer at work in facility',
        }}
      />

      <FeatureSection
        eyebrow="WHY WE EXIST"
        title="THE PHYSICAL WORLD\nIS COMPLEX."
        description="The systems that shape industry — furnaces, reactors, mills, kilns — are dynamic, interconnected, and difficult to model. They generate enormous amounts of physical data. Most of it never becomes intelligence.\n\nWe build software to make those systems more observable, understandable, and optimizable. Not by replacing human expertise, but by extending it with computational capabilities that operate at the speed and scale of modern industrial processes."
        tone="light"
        visualPosition="right"
      />

      <FeatureSection
        eyebrow="WHAT WE BUILD"
        title="INTELLIGENT\nINFRASTRUCTURE."
        description="Not dashboards. Not generic AI. We build the computational layer that connects physical sensors to operational decisions — sensors, edge, data, models, digital twins, intelligence, control. A complete stack for industrial intelligence."
        tone="dark"
        visualPosition="left"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {[
            'Sensor integration & edge computing',
            'Industrial time-series data infrastructure',
            'Physics-informed digital twins',
            'Machine learning for process optimization',
            'Real-time analytics & alerting',
            'Closed-loop control integration',
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)' }}>
              <span className="technical-label" style={{ minWidth: '2rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="HOW WE THINK"
        title="FIRST PRINCIPLES,\nDATA-DRIVEN."
        description="We start from the physics of the process. Data validates, refines, and extends physical models — it doesn't replace them. This approach ensures our systems are interpretable, extrapolate safely, and earn the trust of domain experts who operate critical infrastructure."
        tone="dark"
        visualPosition="right"
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
          {[
            { title: 'PHYSICS FIRST', desc: 'Models grounded in conservation laws and thermodynamics' },
            { title: 'DATA VALIDATES', desc: 'Measurements correct and calibrate physical models' },
            { title: 'INTERPRETABILITY', desc: 'Every prediction traceable to physical principles' },
            { title: 'SAFE EXTRAPOLATION', desc: 'Constraints prevent unsafe operating regions' },
            { title: 'EXPERT IN THE LOOP', desc: 'Automation augments, never replaces, judgment' },
            { title: 'CONTINUOUS LEARNING', desc: 'Models improve with every operational cycle' },
          ].map((item, i) => (
            <div key={i} style={{ padding: 'var(--space-5)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-surface)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 600, margin: '0 0 var(--space-2)', color: 'var(--color-text-primary)' }}>{item.title}</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </ul>
      </FeatureSection>

      <FeatureSection
        eyebrow="TEAM / 01"
        title="FOUNDER"
        description="Testimony Owolabi Ifeoluwa — Founder, Metabotics. Background in industrial automation, intelligent monitoring, and smart manufacturing. Motivated by the gap between industrial data generation and its computational utilization."
        tone="light"
        visualPosition="left"
        image={{
          src: '/founder.jpg',
          alt: 'Testimony Owolabi Ifeoluwa, Founder of Metabotics',
        }}
      />

      <FeatureSection
        eyebrow="VISION"
        title="AUTONOMOUS\nFACTORIES.\nDIGITAL TWINS.\nAI-OPTIMIZED\nPLANTS."
        description="The next generation of industrial software will understand the physical world. Not as a metaphor — as a computational reality where every process variable is observable, every decision is informed by simulation, and every optimization respects the laws of physics."
        tone="dark"
        visualPosition="right"
      />

      <CTASection
        title="JOIN US IN BUILDING\nTHE FUTURE OF\nINDUSTRIAL INTELLIGENCE."
        actionLabel="CONTACT METABOTICS →"
        actionHref="/contact"
        tone="dark"
      />
    </PageShell>
  );
}