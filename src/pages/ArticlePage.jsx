import { useParams, Link } from 'react-router-dom'
import { Factory, Flame, Globe, Cpu, Brain, Zap, Activity, Globe2, Network } from 'lucide-react'

// Same data as in Research.jsx, but with standard slugs
const articlesData = {
  'future-of-industry-4-0': {
    emoji: <Factory className="w-16 h-16 text-accent-cyan" />,
    tag: 'INDUSTRY 4.0',
    title: 'The Future of Industry 4.0 in African Metallurgy',
    desc: 'The Fourth Industrial Revolution is transforming manufacturing globally, but African metallurgical operations have been slow to adopt...',
    date: 'March 2026',
    content: `
      <h2>The Opportunity for Smart Manufacturing</h2>
      <p>African metallurgical operations face unique challenges: inconsistent power grids, harsh operating environments, and often a lack of specialized local maintenance expertise. However, this also presents a massive leapfrogging opportunity.</p>
      <p>Industry 4.0 technologies—specifically Industrial IoT (IIoT) and Edge computing—allow foundries to move from reactive maintenance to predictive insights.</p>
      <h3>Edge Computing as a Necessity</h3>
      <p>Unlike operations in Europe or North America where cloud connectivity is assumed to be 99.9% reliable, African industrial sites must operate autonomously. This is why Metabotics focuses on heavy edge-compute architectures, ensuring that machine learning models make split-second decisions locally, even when internet connectivity drops.</p>
      <h3>The Path Forward</h3>
      <p>The transformation won't happen overnight. It starts with retrofitting legacy equipment with modern sensor arrays, establishing a reliable local data ingestion pipeline, and gradually introducing AI-driven recommendations before moving to fully autonomous control.</p>
    `
  },
  'smart-furnaces': {
    emoji: <Flame className="w-16 h-16 text-accent-orange" />,
    tag: 'SMART FURNACES',
    title: 'Smart Furnaces: AI-Driven Temperature Control Systems',
    desc: 'How machine learning algorithms can predict thermal behavior, prevent overheating events, and optimize energy consumption in industrial furnace operations.',
    date: 'February 2026',
    content: `
      <h2>Beyond Traditional PID Controllers</h2>
      <p>For decades, industrial furnaces have relied on Proportional-Integral-Derivative (PID) controllers. While reliable, they are purely reactive. They cannot anticipate a drop in temperature based on the specific mass of the metal being loaded, nor can they optimize for grid energy costs.</p>
      <h3>Predictive Thermal Modeling</h3>
      <p>By applying Long Short-Term Memory (LSTM) neural networks to historical furnace data, we can accurately predict thermal inertia. The AI learns exactly how long a specific furnace takes to heat up or cool down under various load conditions.</p>
      <h3>Energy Optimization</h3>
      <p>In highly energy-intensive operations like steelmaking, even a 2% improvement in thermal efficiency translates to massive cost savings and carbon footprint reduction. Smart furnaces achieve this by precisely modulating fuel or power input just in time, rather than overshooting target temperatures.</p>
    `
  },
  'industrial-iot-architecture': {
    emoji: <Globe className="w-16 h-16 text-accent-cyan" />,
    tag: 'INDUSTRIAL IOT',
    title: 'Industrial IoT Architecture for Harsh Environments',
    desc: 'Designing robust sensor networks for extreme temperature and vibration conditions. Protocols, hardware selection, and deployment strategies for metallurgical plants.',
    date: 'January 2026',
    content: `
      <h2>Engineering for Extremes</h2>
      <p>Deploying sensors in a server room is easy. Deploying them two meters away from a 1500°C melt is a completely different engineering challenge in materials science and thermodynamics.</p>
      <h3>Sensor Shielding and Cooling</h3>
      <p>Our approach at Metabotics involves custom-designed water-cooled jackets and ceramic heat shields for vital telemetry equipment. For data transmission, high-frequency vibrations in foundries often destroy standard PCB solder joints within weeks, necessitating specialized potting compounds and conformal coatings.</p>
      <h3>Protocol Selection: MQTT vs. OPC-UA</h3>
      <p>For high-frequency sensor data, we utilize edge-hosted MQTT brokers. This lightweight publish-subscribe protocol handles intermittent connectivity far better than traditional polling mechanisms, ensuring that no critical safety data is ever lost due to network jitter.</p>
    `
  }
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articlesData[slug]

  if (!article) {
    return (
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Article Not Found</h1>
          <p>The research paper you are looking for does not exist or has been moved.</p>
          <Link to="/research" className="btn btn-primary" style={{ marginTop: '24px' }}>Return to Research</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero" id="article-hero" style={{ paddingBottom: '20px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <div className="accent-line"></div>
          <span className="blog-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{article.tag}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{article.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '16px' }}>{article.date}</p>
        </div>
      </section>

      <section className="section article-content-section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '40px', 
            borderRadius: 'var(--radius-lg)',
            border: 'var(--border-subtle)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.05, transform: 'scale(3)' }}>
              {article.emoji}
            </div>
            
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '40px', color: 'var(--text-primary)', fontWeight: 500 }}>
              {article.desc}
            </p>
            
            <div 
              className="article-body" 
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                lineHeight: 1.8,
                color: 'var(--text-secondary)'
              }}
            />
          </div>
          
          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/research" className="btn btn-secondary">← Back to Insights</Link>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Share:</span>
              <a href="#" style={{ color: 'var(--accent-cyan)' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--accent-cyan)' }}>Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
