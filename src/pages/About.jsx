import { Link } from 'react-router-dom'
import { Globe, Target, Leaf, Users, Ruler, Unlock, Rocket } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="page-hero" id="about-hero">
        <div className="container">
          <div className="accent-line accent-line-center"></div>
          <h1>About <span className="text-gradient">Metabotics</span></h1>
          <p>The origin, mission, and people behind the platform.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" id="mission-section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <span className="section-label" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '12px' }}>
                OUR MISSION
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '20px' }}>
                Democratizing Industrial Intelligence
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px' }}>
                Metabotics was founded on a simple but powerful observation: the metallurgical
                and materials processing industries — especially in Africa — are decades behind
                in automation and process intelligence.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px' }}>
                While factories in developed economies leverage AI, IoT, and digital twins to
                optimize every parameter, most operations in emerging markets still rely on
                manual observation and operator intuition.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                We're building the technology to change that — making world-class industrial
                intelligence accessible, affordable, and adapted to the realities of African
                manufacturing.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="card" style={{ padding: '40px', textAlign: 'center', maxWidth: '360px' }}>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <Globe className="w-12 h-12 text-accent-cyan" />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Africa-First Innovation</h3>
                <p>Building technology for the unique challenges and opportunities of industrial operations in emerging markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" id="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">OUR VALUES</span>
            <h2>What <span className="text-gradient">Drives</span> Us</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: <Target className="w-8 h-8" />, title: 'Engineering Excellence', desc: 'We build industrial-grade systems that work in real-world conditions, not lab demos.' },
              { icon: <Leaf className="w-8 h-8" />, title: 'Sustainable Industry', desc: 'Reducing energy waste and emissions through intelligent process optimization.' },
              { icon: <Users className="w-8 h-8" />, title: 'Collaborative Innovation', desc: 'Partnering with industry and academia to push the boundaries of what\'s possible.' },
              { icon: <Ruler className="w-8 h-8" />, title: 'Rigorous Science', desc: 'Every algorithm and system design is grounded in metallurgical science and engineering principles.' },
              { icon: <Unlock className="w-8 h-8" />, title: 'Accessible Technology', desc: 'Making advanced automation affordable and practical for operations of all sizes.' },
              { icon: <Rocket className="w-8 h-8" />, title: 'Bold Vision', desc: 'Thinking big about the future of manufacturing while executing with discipline and precision.' },
            ].map((val, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section" id="about-founder">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FOUNDER</span>
            <h2>The Person Behind <span className="text-gradient">Metabotics</span></h2>
          </div>
          <div className="founder-grid">
            <div className="founder-photo">
              <img src="/founder.jpg" alt="Testimony Owolabi Ifeoluwa" />
            </div>
            <div className="founder-info">
              <h3>Testimony Owolabi Ifeoluwa</h3>
              <div className="founder-title">FOUNDER &amp; CEO — METABOTICS</div>
              <p style={{ marginBottom: '16px' }}>
                Material &amp; Metallurgical Engineering student with a deep passion for
                industrial automation, intelligent monitoring systems, and the future of
                smart manufacturing in Africa.
              </p>
              <p>
                Testimony combines hands-on engineering experience with a systems-thinking
                approach to industrial problems. His vision: to build Africa's first intelligent
                industrial automation platform, starting with the metallurgical sector and
                expanding across all materials processing industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt" id="about-timeline">
        <div className="container">
          <div className="section-header">
            <span className="section-label">OUR JOURNEY</span>
            <h2><span className="text-gradient">Milestones</span></h2>
          </div>
          <div className="timeline">
            {[
              { year: '2026 Q1', title: 'Metabotics Founded', desc: 'Formally established the company as a pure software venture to build intelligent industrial platforms.' },
              { year: '2026 Q2', title: 'Architecture Design', desc: 'Developing the core data ingestion pipeline, API architecture, and initial ML models.' },
              { year: '2026 Q3', title: 'Platform Alpha', desc: 'Internal testing of the cloud analytics platform and predictive maintenance algorithms.' },
              { year: '2026 Q4', title: 'API Integration Hub', desc: 'Building seamless connectors for existing industrial SCADA and IoT sensor networks.' },
              { year: '2027', title: 'First Partnerships', desc: 'Securing initial trial deployments with forward-thinking foundries in Nigeria.' },
              { year: 'NEXT', title: 'Pan-African Expansion', desc: 'Scaling the platform across major metallurgical and materials processing hubs in Africa.' },
            ].map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Join the Journey</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Whether as a partner, investor, or collaborator — help us build the future of industrial intelligence in Africa.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Partner With Us →</Link>
            <Link to="/technology" className="btn btn-secondary">See Our Technology</Link>
          </div>
        </div>
      </section>
    </>
  )
}
