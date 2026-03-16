import { Link } from 'react-router-dom'

const articles = [
  {
    emoji: '🏭',
    tag: 'INDUSTRY 4.0',
    title: 'The Future of Industry 4.0 in African Metallurgy',
    desc: 'The Fourth Industrial Revolution is transforming manufacturing globally, but African metallurgical operations have been slow to adopt. This article explores the opportunities and challenges of bringing smart manufacturing to the continent.',
    date: 'March 2026',
  },
  {
    emoji: '🔥',
    tag: 'SMART FURNACES',
    title: 'Smart Furnaces: AI-Driven Temperature Control Systems',
    desc: 'How machine learning algorithms can predict thermal behavior, prevent overheating events, and optimize energy consumption in industrial furnace operations.',
    date: 'February 2026',
  },
  {
    emoji: '🌐',
    tag: 'INDUSTRIAL IOT',
    title: 'Industrial IoT Architecture for Harsh Environments',
    desc: 'Designing robust sensor networks for extreme temperature and vibration conditions. Protocols, hardware selection, and deployment strategies for metallurgical plants.',
    date: 'January 2026',
  },
  {
    emoji: '🔬',
    tag: 'DIGITAL TWINS',
    title: 'Digital Twins for Materials Processing: A Practical Guide',
    desc: 'Creating virtual replicas of physical processes using physics-informed neural networks. How digital twins can reduce experimental costs and accelerate process optimization.',
    date: 'December 2025',
  },
  {
    emoji: '🤖',
    tag: 'AI IN MANUFACTURING',
    title: 'Reinforcement Learning for Autonomous Process Control',
    desc: 'Training AI agents to make real-time decisions in metallurgical processes. From reward function design to safe deployment in production environments.',
    date: 'November 2025',
  },
  {
    emoji: '⚡',
    tag: 'ENERGY EFFICIENCY',
    title: 'Reducing Energy Waste in High-Temperature Operations',
    desc: 'Data-driven strategies for minimizing energy consumption in furnaces, kilns, and heat treatment equipment without compromising product quality.',
    date: 'October 2025',
  },
  {
    emoji: '📊',
    tag: 'PREDICTIVE MAINTENANCE',
    title: 'Predictive Maintenance in Metallurgical Equipment',
    desc: 'Using vibration analysis, thermal imaging, and ML models to predict equipment failures before they cause costly downtime.',
    date: 'September 2025',
  },
  {
    emoji: '🌍',
    tag: 'EMERGING MARKETS',
    title: 'The Case for Industrial Intelligence in Emerging Markets',
    desc: 'Why Africa and developing economies stand to gain the most from industrial automation — and the unique challenges they face in adoption.',
    date: 'August 2025',
  },
  {
    emoji: '🔧',
    tag: 'EDGE COMPUTING',
    title: 'Edge Computing in Industrial Automation: Architecture & Trade-offs',
    desc: 'Balancing latency, reliability, and cost when deploying edge computing in industrial environments with unreliable connectivity.',
    date: 'July 2025',
  },
]

export default function Research() {
  return (
    <>
      <section className="page-hero" id="research-hero">
        <div className="container">
          <div className="accent-line accent-line-center"></div>
          <h1>Research &amp; <span className="text-gradient">Insights</span></h1>
          <p>Thought leadership at the intersection of metallurgy, AI, and Industry 4.0.</p>
        </div>
      </section>

      <section className="section" id="blog-listing">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article, i) => (
              <div className="card blog-card" key={i}>
                <div className="blog-card-image">{article.emoji}</div>
                <div className="blog-card-body">
                  <span className="blog-tag">{article.tag}</span>
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Want to Contribute?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            We welcome researchers and engineers to share their insights on smart manufacturing and metallurgical innovation.
          </p>
          <Link to="/contact" className="btn btn-primary">Submit a Paper →</Link>
        </div>
      </section>
    </>
  )
}
