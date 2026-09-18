import { Link } from 'react-router-dom'
import { Factory, Flame, Pickaxe, Thermometer } from 'lucide-react'

const industries = [
  {
    icon: <Factory className="w-16 h-16" />,
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
    image: 'https://images.unsplash.com/photo-1504938096384-e9102377c0bd?q=80&w=2070&auto=format&fit=crop' // Steel/Foundry image
  },
  {
    icon: <Flame className="w-16 h-16" />,
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
    image: 'https://images.unsplash.com/photo-1598075308696-6e4facbaf7cd?q=80&w=2069&auto=format&fit=crop' // Heat treatment/glowing metal image
  },
  {
    icon: <Pickaxe className="w-16 h-16" />,
    bg: 'rgba(139, 92, 246, 0.15)',
    color: 'var(--accent-purple)',
    title: 'Mining & Materials Processing',
    headline: 'Improve Yield and Reduce Waste',
    desc: 'From ore beneficiation to mineral extraction, our AI-driven analytics help mining operations maximize yield while minimizing energy consumption and environmental impact.',
    features: [
      'Ore grade prediction and sorting',
      'Grinding circuit optimization',
      'Flotation process control',
      'Tailings management intelligence',
      'Water and energy use reduction',
    ],
    image: 'https://images.unsplash.com/photo-1588661706689-f542d992d9f6?q=80&w=2070&auto=format&fit=crop' // Mining/heavy machinery image
  },
  {
    icon: <Thermometer className="w-16 h-16" />,
    bg: 'rgba(16, 185, 129, 0.15)',
    color: 'var(--accent-green)',
    title: 'Energy-Intensive Industries',
    headline: 'Monitor High-Temperature Operations',
    desc: 'Cement, glass, ceramics, and other high-temperature industries can benefit from intelligent monitoring that reduces energy waste and improves product consistency.',
    features: [
      'Kiln temperature optimization',
      'Combustion efficiency monitoring',
      'Emissions tracking and compliance',
      'Predictive equipment maintenance',
      'Process parameter auto-tuning',
    ],
    image: 'https://images.unsplash.com/photo-1563884841777-70e61d8b1393?q=80&w=2072&auto=format&fit=crop' // Factory/energy plant image
  },
]

export default function Applications() {
  return (
    <>
      <section className="page-hero" id="applications-hero">
        <div className="container">
          <div className="accent-line accent-line-center"></div>
          <h1><span className="text-gradient">Applications</span></h1>
          <p>Industry-specific solutions for materials and metallurgical processing.</p>
        </div>
      </section>

      {industries.map((ind, i) => (
        <section className={`section ${i % 2 === 0 ? '' : 'section-alt'}`} key={i} id={`app-${i}`}>
          <div className="container">
            <div className="problem-grid">
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <span className="section-label" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: ind.color, display: 'block', marginBottom: '12px' }}>
                  {ind.title.toUpperCase()}
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
                <div className="img-container" style={{
                  width: '100%',
                  maxWidth: '480px',
                  aspectRatio: '4/3',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <img 
                    src={ind.image} 
                    alt={ind.title}
                    className="img-cover"
                    style={{ filter: 'brightness(0.75) contrast(1.1)' }}
                  />
                  <div className="img-overlay-grid"></div>
                  <div style={{ 
                    position: 'absolute', 
                    top: '24px', 
                    right: '24px',
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-md)',
                    background: ind.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${ind.color}55`,
                    color: ind.color,
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'var(--shadow-card)'
                  }}>
                    {ind.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Have a Different Use Case?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Our platform is adaptable to any high-temperature or materials processing operation.
          </p>
          <Link to="/contact" className="btn btn-primary">Let's Talk →</Link>
        </div>
      </section>
    </>
  )
}
