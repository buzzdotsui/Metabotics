import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Zap, TrendingDown, Trash2, Users, Radio, Brain, Settings, HardDrive, Monitor, Link as LinkIcon, Factory, Flame, Pickaxe, Thermometer, Globe, Cpu, Droplet, Rocket, Briefcase, TestTube, Banknote } from 'lucide-react'

export default function Home() {
  const [dynamicText, setDynamicText] = useState('Metallurgical')
  
  useEffect(() => {
    const words = ['Metallurgical', 'Heat Treatment', 'Foundries', 'Mining']
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % words.length
      setDynamicText(words[i])
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ====== 1. HERO ====== */}
      <section className="hero" id="hero-section">
        <div className="hero-bg">
          <img src="/hero-bg.webp" alt="Industrial furnace with smart monitoring" />
        </div>
        <div className="hero-grid-overlay"></div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="container">
          <div className="hero-content glass-panel">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Building the Future of Smart Manufacturing
            </div>
            <h1>
              Intelligent Automation for{' '}
              <span className="text-gradient dynamic-text">{dynamicText}</span> &amp;{' '}
              <span className="text-gradient">Materials Processing</span>
            </h1>
            <p className="hero-subtitle">
              Metabotics builds smart monitoring and control systems that transform
              furnaces, heat treatment, and industrial processes into self-optimizing systems.
            </p>
            <div className="hero-buttons">
              <Link to="/technology" className="btn btn-primary" id="hero-cta-tech">
                See Our Technology →
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat animate-fade-up animate-delay-3">
                <h4>Industry 4.0</h4>
                <p>Ready Solutions</p>
              </div>
              <div className="hero-stat animate-fade-up animate-delay-4">
                <h4>AI-Powered</h4>
                <p>Process Intelligence</p>
              </div>
              <div className="hero-stat animate-fade-up animate-delay-5">
                <h4>Africa-First</h4>
                <p>Industrial Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2. THE PROBLEM ====== */}
      <section className="section problem-section" id="problem-section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="accent-line"></div>
              <span className="section-label" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--accent-orange)', display: 'block', marginBottom: '12px' }}>
                THE PROBLEM
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '20px' }}>
                Industrial materials processing still runs like it's{' '}
                <span className="text-gradient-orange">1980</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', lineHeight: 1.8 }}>
                Especially in Africa and emerging markets, critical industrial operations lack
                the intelligence and automation needed to compete globally.
              </p>
              <div className="problem-list">
                {[
                  { icon: <Activity className="w-6 h-6" />, title: 'Limited Real-Time Monitoring', desc: 'Critical parameters go untracked for hours' },
                  { icon: <Zap className="w-6 h-6" />, title: 'Massive Energy Waste', desc: 'Inefficient heating cycles burn resources' },
                  { icon: <TrendingDown className="w-6 h-6" />, title: 'Process Instability', desc: 'Inconsistent outputs and uncontrolled variables' },
                  { icon: <Trash2 className="w-6 h-6" />, title: 'High Scrap Rates', desc: 'Defective products from poor process control' },
                  { icon: <Users className="w-6 h-6" />, title: 'Manual Decision Making', desc: 'Operators rely on experience over data' },
                ].map((item, i) => (
                  <div className="problem-item" key={i}>
                    <div className="problem-item-icon">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="problem-visual">
              <div className="problem-visual-inner">
                <div className="problem-stat">
                  <div className="stat-number">80%</div>
                  <div className="stat-label">of African metallurgical operations lack real-time process intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. THE SOLUTION ====== */}
      <section className="section solution-section" id="solution-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">THE SOLUTION</span>
            <h2>The <span className="text-gradient">Metabotics Platform</span></h2>
            <p>End-to-end intelligent automation — from sensor to control action.</p>
          </div>
          <div className="solution-grid">
            {[
              {
                icon: <Radio className="w-10 h-10" />,
                color: '',
                title: 'Smart Monitoring',
                desc: 'Industrial-grade sensors capturing critical process data in real-time.',
                items: ['Temperature profiles', 'Vibration analysis', 'Furnace atmosphere', 'Material behavior'],
              },
              {
                icon: <Brain className="w-10 h-10" />,
                color: 'card-icon-orange',
                title: 'AI Process Intelligence',
                desc: 'ML algorithms that analyze conditions and predict outcomes.',
                items: ['Failure prediction', 'Inefficiency detection', 'Optimal parameter tuning', 'Quality forecasting'],
              },
              {
                icon: <Settings className="w-10 h-10" />,
                color: '',
                title: 'Autonomous Control',
                desc: 'Systems that automatically adjust processes for optimal results.',
                items: ['Heating cycle optimization', 'Cooling rate control', 'Process timing adjustments', 'Self-correcting loops'],
              },
            ].map((card, i) => (
              <div className="card solution-card" key={i}>
                <div className={`card-icon ${card.color}`}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <ul>
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. TECHNOLOGY STACK ====== */}
      <section className="section section-alt" id="techstack-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">TECHNOLOGY STACK</span>
            <h2>Engineering That <span className="text-gradient">Delivers</span></h2>
            <p>Purpose-built for the harsh demands of metallurgical environments.</p>
          </div>
          <div className="tech-grid">
            {[
              {
                icon: <HardDrive className="w-8 h-8" />,
                title: 'DATA INGESTION',
                bg: 'var(--accent-cyan-dim)',
                color: 'var(--accent-cyan)',
                items: ['Hardware-agnostic APIs', 'Edge computing agents', 'Legacy SCADA integration', 'IoT protocol parsing'],
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: 'INTELLIGENCE',
                bg: 'var(--accent-orange-dim)',
                color: 'var(--accent-orange)',
                items: ['Time-series databases', 'Machine learning prediction', 'Digital twin modeling', 'Anomaly detection'],
              },
              {
                icon: <LinkIcon className="w-8 h-8" />,
                title: 'ACTION & CONTROL',
                bg: 'rgba(139, 92, 246, 0.15)',
                color: 'var(--accent-purple)',
                items: ['Real-time dashboards', 'Automated alerts', 'Predictive maintenance', 'Control system webhooks'],
              },
            ].map((cat, i) => (
              <div className="card tech-category" key={i}>
                <div className="category-header">
                  <div className="category-icon" style={{ background: cat.bg, color: cat.color }}>{cat.icon}</div>
                  <h3>{cat.title}</h3>
                </div>
                <div className="tech-list">
                  {cat.items.map((item, j) => (
                    <div className="tech-item" key={j}>
                      <span className="tech-dot" style={{ background: cat.color }}></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 5. APPLICATIONS ====== */}
      <section className="section" id="applications-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">APPLICATIONS</span>
            <h2>Where Our <span className="text-gradient">Systems</span> Work</h2>
            <p>Industry-specific solutions for high-temperature processing and materials operations.</p>
          </div>
          <div className="applications-grid">
            {[
              { icon: <Factory className="w-8 h-8" />, bg: 'var(--accent-orange-dim)', color: 'var(--accent-orange)', title: 'Steel & Foundries', desc: 'Optimize furnace operations, reduce energy waste, and improve casting quality through real-time monitoring and AI-driven control.' },
              { icon: <Flame className="w-8 h-8" />, bg: 'var(--accent-cyan-dim)', color: 'var(--accent-cyan)', title: 'Heat Treatment Plants', desc: 'Control material microstructure precisely with intelligent heating and cooling cycles. Achieve consistent metallurgical properties.' },
              { icon: <Pickaxe className="w-8 h-8" />, bg: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-purple)', title: 'Mining & Materials Processing', desc: 'Improve yield and reduce waste through predictive analytics and automated process adjustments in mineral processing operations.' },
              { icon: <Thermometer className="w-8 h-8" />, bg: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-green)', title: 'Energy-Intensive Industries', desc: 'Monitor and optimize high-temperature operations to reduce energy consumption and carbon footprint across industrial processes.' },
            ].map((app, i) => (
              <div className="card application-card" key={i}>
                <div className="app-icon" style={{ background: app.bg, color: app.color }}>{app.icon}</div>
                <div>
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6. $1B OPPORTUNITY ====== */}
      <section className="section opportunity-section" id="opportunity-section">
        <div className="container">
          <div className="opportunity-content">
            <div className="accent-line accent-line-center"></div>
            <span className="section-label" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--accent-orange)', display: 'block', marginBottom: '12px' }}>
              MARKET OPPORTUNITY
            </span>
            <div className="opportunity-amount">
              <span className="text-gradient-orange">$1 Billion+</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '24px', fontWeight: 600 }}>
              The Untapped Industrial Intelligence Market
            </h2>
            <p>
              Most metallurgical operations in Africa still operate with limited automation
              and minimal process intelligence. Metabotics aims to digitize and optimize these
              processes — unlocking billions in productivity gains across the continent's
              growing industrial sector.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 7. PLATFORM ARCHITECTURE ====== */}
      <section className="section section-alt" id="platform-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">PLATFORM ARCHITECTURE</span>
            <h2>Intelligent <span className="text-gradient">Data Pipeline</span></h2>
            <p>A pure software approach to complex industrial automation.</p>
          </div>
          <div className="pilot-grid">
            <div className="pilot-visual">
              <div className="pilot-visual-header">
                <span className="status-dot"></span>
                <span>SYSTEM SIMULATION</span>
              </div>
              <div className="pilot-metrics">
                <div className="pilot-metric">
                  <div className="metric-value">ML</div>
                  <div className="metric-label">Prediction Engine</div>
                </div>
                <div className="pilot-metric">
                  <div className="metric-value">API</div>
                  <div className="metric-label">Integration Layer</div>
                </div>
                <div className="pilot-metric">
                  <div className="metric-value">IoT</div>
                  <div className="metric-label">Data Ingestion</div>
                </div>
                <div className="pilot-metric">
                  <div className="metric-value">Db</div>
                  <div className="metric-label">Time-Series Data</div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
                Scalable Software Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.8 }}>
                Our platform is designed as a highly scalable software-as-a-service solution, 
                capable of ingesting massive amounts of process data and applying advanced ML models.
              </p>
              <div className="pilot-features">
                {[
                  'Hardware-agnostic API integration',
                  'High-throughput time-series database',
                  'Custom ML models for process optimization',
                  'Real-time analytics and alerting engine',
                  'Secure, cloud-native deployment',
                ].map((feat, i) => (
                  <div className="pilot-feature" key={i}>
                    <div className="feature-check">✓</div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 8. VISION ====== */}
      <section className="section vision-section" id="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="accent-line accent-line-center"></div>
            <span className="section-label" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '24px', textAlign: 'center' }}>
              OUR VISION
            </span>
            <p className="vision-quote">
              "Our vision is to build Africa's first intelligent industrial automation platform
              for materials and metallurgical processing."
            </p>
            <div className="vision-goals">
              {[
                { icon: <Factory className="w-8 h-8" />, title: 'Autonomous Factories', desc: 'Self-managing production facilities driven by AI and IoT' },
                { icon: <Cpu className="w-8 h-8" />, title: 'Digital Twins', desc: 'Virtual replicas of metallurgical processes for simulation and optimization' },
                { icon: <Brain className="w-8 h-8" />, title: 'AI-Optimized Plants', desc: 'Production facilities that learn and improve with every cycle' },
              ].map((goal, i) => (
                <div className="card vision-goal" key={i}>
                  <div className="goal-icon">{goal.icon}</div>
                  <h4>{goal.title}</h4>
                  <p>{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 9. FOUNDER ====== */}
      <section className="section founder-section" id="founder-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FOUNDER</span>
            <h2>Meet the <span className="text-gradient">Visionary</span></h2>
          </div>
          <div className="founder-grid">
            <div className="founder-photo">
              <img src="/founder.jpg" alt="Testimony Owolabi Ifeoluwa" />
            </div>
            <div className="founder-info">
              <h3>Testimony Owolabi Ifeoluwa</h3>
              <div className="founder-title">FOUNDER — METABOTICS</div>
              <p>
                Material &amp; Metallurgical Engineering student with a relentless focus on
                industrial automation, intelligent monitoring systems, and the future of
                smart manufacturing in Africa. Driven by the conviction that emerging markets
                deserve world-class industrial technology, Testimony founded Metabotics to
                bridge the automation gap in Africa's metallurgical sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 10. RESEARCH PREVIEW ====== */}
      <section className="section" id="research-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">RESEARCH &amp; INSIGHTS</span>
            <h2>Thought <span className="text-gradient">Leadership</span></h2>
            <p>Exploring the intersection of metallurgy, AI, and Industry 4.0.</p>
          </div>
          <div className="research-grid">
            {[
              { slug: 'future-of-industry-4-0', emoji: <Factory className="w-12 h-12" />, tag: 'INDUSTRY 4.0', title: 'The Future of Industry 4.0 in African Metallurgy', desc: 'How smart manufacturing technologies are reshaping industrial operations across the continent.' },
              { slug: 'smart-furnaces', emoji: <Flame className="w-12 h-12" />, tag: 'SMART FURNACES', title: 'Smart Furnaces: AI-Driven Temperature Control', desc: 'Exploring how machine learning algorithms can predict and prevent furnace failures.' },
              { slug: 'industrial-iot-architecture', emoji: <Globe className="w-12 h-12" />, tag: 'INDUSTRIAL IOT', title: 'Industrial IoT Architecture for Harsh Environments', desc: 'Designing robust sensor networks for extreme temperature and vibration conditions.' },
            ].map((article, i) => (
              <Link to={`/research/${article.slug}`} className="card research-card" key={i} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="research-card-image">{article.emoji}</div>
                <div className="research-card-body">
                  <span className="tag">{article.tag}</span>
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/research" className="btn btn-secondary">View All Research →</Link>
          </div>
        </div>
      </section>

      {/* ====== 11. CONTACT CTA ====== */}
      <section className="section contact-cta-section" id="contact-cta-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">PARTNERSHIPS</span>
            <h2>Work <span className="text-gradient">With Us</span></h2>
            <p>Let's build the future of industrial intelligence together.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Ready to transform your operations?</h3>
              <p>
                Whether you're an industrial operator looking to optimize, a researcher
                exploring smart manufacturing, or an investor seeking deep-tech innovation
                — we want to hear from you.
              </p>
              <div className="contact-types">
                {[
                  { icon: <Factory className="w-5 h-5" />, label: 'Industrial Partnerships' },
                  { icon: <TestTube className="w-5 h-5" />, label: 'Pilot Projects' },
                  { icon: <Briefcase className="w-5 h-5" />, label: 'Research Collaborations' },
                  { icon: <Banknote className="w-5 h-5" />, label: 'Investment Opportunities' },
                ].map((type, i) => (
                  <div className="contact-type" key={i}>
                    <div className="contact-type-icon">{type.icon}</div>
                    <span style={{ color: 'var(--text-secondary)' }}>{type.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="contact-form" id="home-contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" placeholder="Your company" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Interest Area</label>
                  <select id="interest">
                    <option value="">Select your interest</option>
                    <option value="partnership">Industrial Partnership</option>
                    <option value="pilot">Pilot Project</option>
                    <option value="research">Research Collaboration</option>
                    <option value="investment">Investment</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
