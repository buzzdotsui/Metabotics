export default function Contact() {
  return (
    <>
      <section className="page-hero" id="contact-hero">
        <div className="container">
          <div className="accent-line accent-line-center"></div>
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p>Ready to transform your industrial operations? Let's talk.</p>
        </div>
      </section>

      <section className="section" id="contact-main">
        <div className="container">
          <div className="contact-page-grid">
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
                Let's Build Together
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '40px' }}>
                Whether you're exploring smart manufacturing, looking for a technology partner,
                or want to discuss industrial innovation — we'd love to hear from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉</div>
                  <div>
                    <h4>Email</h4>
                    <p>contact@metabotics.io</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Akure, Nigeria</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">🔗</div>
                  <div>
                    <h4>Social</h4>
                    <p>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      &nbsp;·&nbsp;
                      <a href="https://x.com/Metabotics26" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', marginBottom: '16px' }}>
                  Partnership Areas
                </h3>
                <div className="contact-types">
                  {[
                    { icon: '🏭', label: 'Industrial Partnerships — Factories and processing plants' },
                    { icon: '🧪', label: 'Pilot Projects — Test our technology in your facility' },
                    { icon: '🔬', label: 'Research Collaborations — Academic and R&D partnerships' },
                    { icon: '💰', label: 'Investment — Support deep-tech innovation in Africa' },
                  ].map((type, i) => (
                    <div className="contact-type" key={i}>
                      <div className="contact-type-icon">{type.icon}</div>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '36px' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', marginBottom: '24px' }}>
                  Send Us a Message
                </h3>
                <form className="contact-form" id="contact-page-form" onSubmit={e => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name</label>
                      <input type="text" id="contact-name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-company">Company / Organization</label>
                      <input type="text" id="contact-company" placeholder="Your company" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input type="email" id="contact-email" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone (Optional)</label>
                    <input type="tel" id="contact-phone" placeholder="+234 ..." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-interest">Interest Area</label>
                    <select id="contact-interest">
                      <option value="">Select your interest</option>
                      <option value="partnership">Industrial Partnership</option>
                      <option value="pilot">Pilot Project</option>
                      <option value="research">Research Collaboration</option>
                      <option value="investment">Investment</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" placeholder="Tell us about your needs and how we can help..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
