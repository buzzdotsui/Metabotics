import { Link } from 'react-router-dom'
import { Factory } from 'lucide-react'

export default function SteelAndFoundries() {
  const ind = {
    icon: <Factory className="w-24 h-24" />,
    bg: 'var(--accent-orange-dim)',
    color: 'var(--accent-orange)',
    title: 'Steel & Foundries',
    headline: 'Optimize Furnace Operations',
    desc: 'Steel production and foundry operations involve extreme temperatures, complex chemical reactions, and tight quality requirements. Our systems bring intelligence to every step.',
    features: [
      'Real-time furnace temperature mapping',
      'Melt composition monitoring and control',
      'Energy consumption optimization',
      'Casting quality prediction',
      'Automated slag management',
    ],
  }

  return (
    <>
      <section className="page-hero" id="steel-hero">
        <div className="container">
          <div className="accent-line accent-line-center"></div>
          <h1><span className="text-gradient">{ind.title}</span></h1>
          <p>{ind.headline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <span className="section-label" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: ind.color, display: 'block', marginBottom: '12px' }}>
                OVERVIEW
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '16px' }}>
                {ind.headline}
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.8 }}>
                {ind.desc}
              </p>
              <div className="pilot-features">
                {ind.features.map((feat, j) => (
                  <div className="pilot-feature" key={j}>
                    <div className="feature-check">✓</div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1',
                borderRadius: 'var(--radius-lg)',
                background: ind.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${ind.color}33`,
              }}>
                {ind.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Ready to Optimize Your Foundry?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Our platform is adaptable to your specific furnace types and operational needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Let's Talk →</Link>
            <Link to="/applications" className="btn btn-secondary">← Back to Applications</Link>
          </div>
        </div>
      </section>
    </>
  )
}
