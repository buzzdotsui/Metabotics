import { Link } from 'react-router-dom'
import { Flame } from 'lucide-react'

export default function HeatTreatment() {
  const ind = {
    icon: <Flame className="w-24 h-24" />,
    bg: 'var(--accent-cyan-dim)',
    color: 'var(--accent-cyan)',
    title: 'Heat Treatment Plants',
    headline: 'Control Material Microstructure Precisely',
    desc: 'Heat treatment determines the final mechanical properties of metals. Our platform ensures precise control of heating and cooling profiles for consistent metallurgical outcomes.',
    features: [
      'Programmable heating cycle control',
      'Quench rate optimization',
      'Microstructure prediction via digital twins',
      'Hardness and tensile strength forecasting',
      'Batch consistency monitoring',
    ],
  }

  return (
    <>
      <section className="page-hero" id="heat-hero">
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
          <h2 style={{ marginBottom: '16px' }}>Ready to Perfect Your Processes?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Bring reliable, software-defined control to your heat treatment operations.
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
