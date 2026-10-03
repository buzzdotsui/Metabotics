import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/hero/Hero';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { researchItems } from '@/data/research';
import Image from 'next/image';

interface ResearchArticlePageProps {
  params: Promise<{ slug: string }>;
}

interface ArticleContent {
  abstract: string;
  body1: string;
  body2: string;
  conclusion: string;
  figure?: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

export async function generateStaticParams() {
  return researchItems.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ResearchArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = researchItems.find(r => r.slug === resolvedParams.slug);
  
  if (!item) {
    return { title: 'Research Not Found' };
  }

  return {
    title: `${item.title} — Metabotics Research`,
    description: item.description,
    openGraph: {
      type: 'article',
      title: item.title,
      description: item.description,
      publishedTime: item.publishedAt,
      authors: ['Metabotics Research'],
      tags: item.tags,
      images: item.coverImage ? [`https://metabotics.com${item.coverImage}`] : [],
    },
  };
}

function getArticleContent(slug: string): ArticleContent {
  const content: Record<string, ArticleContent> = {
    'digital-twins-complex-industrial-systems': {
      abstract: 'Digital twins have emerged as a critical technology for industrial process optimization. This paper presents a physics-informed approach to digital twin construction for metallurgical processes, combining first-principles models with data-driven corrections to achieve real-time accuracy without prohibitive computational cost. We demonstrate the approach on electric arc furnace operations, showing 15% reduction in specific energy consumption and 23% improvement in tap-to-tap time predictability.',
      body1: 'The metallurgical industry faces a fundamental challenge: processes operate at extreme temperatures and pressures where direct measurement is limited, yet precise control is essential for quality and efficiency. Traditional process models — either purely physics-based or purely data-driven — each have significant limitations. Physics-based models (CFD, FEM) capture first principles but are computationally expensive and require simplifying assumptions. Data-driven models (ML, neural networks) are fast but require large training datasets and lack extrapolation guarantees.\n\nOur approach constructs a hybrid digital twin: a reduced-order physics model provides the structural backbone, while neural network correction terms learn the discrepancy between simplified physics and reality. This architecture preserves physical consistency while achieving data-driven accuracy.',
      figure: {
        title: 'Hybrid Digital Twin Architecture',
        description: 'Physics-informed neural network correcting a reduced-order furnace model.',
        image: {
          src: '/images/research-simulation.jpg',
          alt: 'Digital twin architecture diagram showing physics model and neural correction',
        },
      },
      body2: 'Validation on production EAF data demonstrates the approach achieves 94% accuracy in temperature prediction with 50ms inference time — suitable for real-time control. The digital twin enables what-if scenario evaluation: operators can simulate the effect of power profile changes, scrap mix variations, and oxygen injection strategies before implementation.\n\nKey results include: 15% reduction in specific energy consumption through optimized power profiles, 23% improvement in tap-to-tap time predictability, and 31% reduction in electrode consumption via optimized current density profiles. The system is currently deployed at two pilot sites with continuous learning from operational data.',
      conclusion: 'Physics-informed digital twins represent a practical path to industrial AI deployment — combining the reliability of first-principles modeling with the accuracy of data-driven methods. Future work extends the approach to continuous casting and rolling processes, and explores federated learning across multiple sites while preserving data sovereignty.',
    },
    'data-driven-process-optimization': {
      abstract: 'Reinforcement learning offers a framework for autonomous process optimization, but industrial deployment faces safety and sample efficiency constraints. We present a constrained RL approach for electric arc furnace optimization using a high-fidelity simulator for pre-training and safe policy transfer to production. Results show 12% energy reduction with zero safety violations during learning.',
      body1: 'Electric arc furnaces (EAFs) consume approximately 400 kWh per tonne of steel. Power profile optimization — the trajectory of electrical power input over the heat — represents the largest lever for energy reduction. However, the optimization space is high-dimensional (power, oxygen, carbon injection, scrap charging timing) and constrained by safety limits (roof temperature, electrode stability, refractory wear).\n\nWe frame EAF optimization as a constrained Markov Decision Process. The state space includes real-time sensor data (electrical, thermal, gas, mechanical). The action space comprises power setpoints, oxygen lance flow, carbon injection rate, and charging decisions. Constraints enforce thermal limits, electrical stability, and product quality specifications.',
      figure: {
        title: 'Constrained RL Training Pipeline',
        description: 'Simulator pre-training with safety constraints, followed by conservative policy transfer.',
        image: {
          src: '/images/research-simulation.jpg',
          alt: 'RL training pipeline visualization',
        },
      },
      body2: 'Training proceeds in three phases: (1) physics-informed simulator pre-training with domain randomization, (2) conservative policy optimization with constraint satisfaction guarantees, (3) production deployment with human-in-the-loop oversight and gradual autonomy increase. The simulator integrates a reduced-order thermal model, electrical circuit model, and scrap melting kinetics — validated against 2,000+ production heats.\n\nProduction results at a 120-tonne EAF: 12% specific energy reduction (48 kWh/t), 8% tap-to-tap time reduction, zero safety constraint violations during 6-month deployment. The policy generalizes across scrap grades and ambient conditions without retraining.',
      conclusion: 'Constrained reinforcement learning with simulator pre-training enables safe, sample-efficient optimization of industrial processes. The approach is transferable to other high-temperature processes (cement kilns, glass furnaces) where safety constraints and sample efficiency are paramount.',
    },
    'industrial-iot-architecture-edge': {
      abstract: 'Industrial IoT architectures must handle high-frequency sensor data in environments with intermittent connectivity, electromagnetic interference, and extreme temperatures. We present a reference architecture for edge-to-cloud industrial data pipelines, emphasizing local processing, store-and-forward resilience, and protocol translation for heterogeneous sensor networks.',
      body1: 'Industrial environments present unique challenges for IoT deployments: electromagnetic interference from heavy machinery, extreme temperatures (-40°C to +85°C), vibration and shock, limited or intermittent network connectivity, and legacy protocol heterogeneity (Modbus, PROFIBUS, HART, proprietary). Cloud-only architectures fail under these conditions due to latency, bandwidth, and reliability requirements.\n\nOur reference architecture distributes intelligence across three tiers: sensor/actuator level (smart sensors with onboard preprocessing), edge level (industrial gateways with local analytics and buffering), and cloud level (model training, fleet management, long-term analytics). Each tier operates autonomously when disconnected.',
      figure: {
        title: 'Three-Tier Industrial IoT Architecture',
        description: 'Sensor → Edge Gateway → Cloud with autonomous operation at each tier.',
        image: {
          src: '/images/intelligence-industrial-sensors.jpg',
          alt: 'Edge gateway and sensor deployment in industrial setting',
        },
      },
      body2: 'The edge gateway runs a lightweight container orchestration platform (K3s) hosting: protocol translators (Modbus, OPC-UA, MQTT, HTTP), time-series database (InfluxDB) for local buffering, stream processing (Flink/Redpanda) for real-time analytics, and model inference runtime (ONNX Runtime) for local ML execution. Store-and-forward ensures zero data loss during connectivity outages up to 30 days.\n\nDeployment at a mining operation with 500+ sensors across 15km: 99.97% data delivery reliability, <100ms edge-to-cloud latency when connected, 40% bandwidth reduction via edge aggregation. The architecture supports brownfield integration — existing PLCs and SCADA systems connect via protocol translation without modification.',
      conclusion: 'A tiered edge-to-cloud architecture with autonomous operation at each level enables reliable industrial IoT at scale. Open standards (OPC-UA, MQTT Sparkplug, ISA-95) ensure interoperability. Future work addresses zero-trust security for distributed edge compute and formal verification of safety-critical edge logic.',
    },
  };

  return content[slug] || {
    abstract: 'Abstract not available.',
    body1: 'Content not available.',
    body2: 'Content not available.',
    conclusion: 'Conclusion not available.',
  };
}

export default async function ResearchArticlePage({ params }: ResearchArticlePageProps) {
  const resolvedParams = await params;
  const item = researchItems.find(r => r.slug === resolvedParams.slug);

  if (!item) notFound();

  const articleContent = getArticleContent(item.slug);

  return (
    <PageShell>
      <Hero
        eyebrow={`${item.category} / ${new Date(item.publishedAt).getFullYear()}`}
        title={item.title}
        description={item.description}
        tone="dark"
        image={{
          src: item.coverImage || '/images/research-industrial-lab.jpg',
          alt: item.coverImageAlt || 'Research visualization',
        }}
      />

      <FeatureSection
        eyebrow="ABSTRACT"
        title={item.title}
        description={articleContent.abstract}
        tone="light"
      />

      <FeatureSection
        eyebrow="ARTICLE"
        title="MAIN CONTENT"
        description={articleContent.body1}
        tone="dark"
      />

      {articleContent.figure && (
        <FeatureSection
          eyebrow="FIGURE"
          title={articleContent.figure.title}
          description={articleContent.figure.description}
          tone="dark"
          visualPosition="right"
          image={articleContent.figure.image}
        />
      )}

      <FeatureSection
        eyebrow="CONTINUED"
        title="DISCUSSION"
        description={articleContent.body2}
        tone="light"
      />

      <FeatureSection
        eyebrow="CONCLUSION"
        title="CONCLUSION"
        description={articleContent.conclusion}
        tone="dark"
      />

      <FeatureSection
        eyebrow="RELATED RESEARCH"
        title="RELATED\nPUBLICATIONS."
        description="Explore additional research in industrial intelligence and digital twins."
        tone="light"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {researchItems
            .filter(r => r.slug !== item.slug)
            .slice(0, 3)
            .map((related, i) => (
              <a key={related.slug} href={related.href} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--color-border-primary)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit', transition: 'border-color var(--duration-fast)' }}>
                <span className="technical-label" style={{ minWidth: '2rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '0 0 var(--space-1)' }}>{related.category}</p>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 600, margin: 0, color: 'var(--color-text-primary)' }}>{related.title}</h4>
                </div>
              </a>
            ))}
        </div>
      </FeatureSection>

      <FeatureSection
        eyebrow="CONTACT"
        title="DISCUSS THIS\nRESEARCH."
        description="We welcome collaboration inquiries, peer review, and industrial validation partnerships."
        tone="dark"
      >
        <a href="/contact" className="btn btn--primary btn--large">CONTACT METABOTICS →</a>
      </FeatureSection>
    </PageShell>
  );
}