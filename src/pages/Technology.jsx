import { Link } from 'react-router-dom'

export default function Technology() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" id="technology-hero">
        <div className="container">
          <div className="accent-line accent-line-center"></div>
          <h1><span className="text-gradient">Technology</span></h1>
          <p>The engineering behind intelligent industrial automation.</p>
        </div>
      </section>

      {/* Data Flow */}
      <section className="section" id="tech-flow-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">DATA PIPELINE</span>
            <h2>From <span className="text-gradient">Sensor</span> to <span className="text-gradient">Action</span></h2>
            <p>Our end-to-end architecture ensures real-time responsiveness at every layer.</p>
          </div>
          <div className="tech-flow">
            {[
              { step: 'SENSORS', desc: 'Data capture' },
              null,
              { step: 'EDGE', desc: 'Local processing' },
              null,
              { step: 'AI ENGINE', desc: 'Analysis & prediction' },
              null,
              { step: 'CONTROL', desc: 'Automated action' },
              null,
              { step: 'DASHBOARD', desc: 'Visualization' },
            ].map((item, i) =>
              item === null ? (
                <div className="tech-flow-arrow" key={i}>→</div>
              ) : (
                <div className="tech-flow-step" key={i}>
                  <h4>{item.step}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{item.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="section section-alt" id="tech-hardware">
        <div className="container">
          <div className="section-header">
            <span className="section-label">HARDWARE LAYER</span>
            <h2>Industrial-Grade <span className="text-gradient">Sensing</span></h2>
            <p>Purpose-built for extreme environments — from molten metal to high-vibration zones.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🌡️', title: 'Temperature Sensors', desc: 'High-precision thermocouples and infrared sensors rated for 0–1800°C. Continuous monitoring with ±0.5°C accuracy.' },
              { icon: '📳', title: 'Vibration Sensors', desc: 'MEMS accelerometers and piezoelectric sensors for detecting mechanical anomalies and predicting equipment failure.' },
              { icon: '💨', title: 'Gas & Atmosphere Sensors', desc: 'Electrochemical and NDIR sensors for monitoring furnace atmosphere composition — O₂, CO, CO₂, and reactive gases.' },
              { icon: '📊', title: 'Edge Computing Units', desc: 'ARM/RISC-V based industrial computers for local data processing. Sub-millisecond latency for time-critical decisions.' },
              { icon: '🔌', title: 'Industrial Controllers', desc: 'PLC-compatible control modules that interface directly with actuators, valves, and heating elements.' },
              { icon: '🛠️', title: 'Custom PCB Modules', desc: 'Bespoke signal conditioning and data acquisition boards designed for metallurgical sensor integration.' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="section" id="tech-software">
        <div className="container">
          <div className="section-header">
            <span className="section-label">SOFTWARE LAYER</span>
            <h2>Intelligent <span className="text-gradient-orange">Software</span> Stack</h2>
            <p>From raw data to actionable insights — powered by machine learning.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: '📈', title: 'Data Acquisition', desc: 'High-throughput data ingestion pipeline handling thousands of sensor readings per second with time-series storage.' },
              { icon: '🧠', title: 'Machine Learning Models', desc: 'LSTM networks, gradient boosting, and reinforcement learning models trained on metallurgical process data.' },
              { icon: '🔮', title: 'Digital Twin Engine', desc: 'Physics-informed neural networks creating virtual replicas of furnaces and processing equipment for simulation.' },
              { icon: '📊', title: 'Real-Time Dashboards', desc: 'WebSocket-powered visualization with sub-second updates. Custom views for operators, engineers, and management.' },
              { icon: '🔔', title: 'Alert & Notification System', desc: 'Multi-channel alerting via SMS, email, and dashboard. Configurable thresholds and escalation policies.' },
              { icon: '📋', title: 'Reporting & Analytics', desc: 'Automated shift reports, trend analysis, and compliance documentation for quality management systems.' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon card-icon-orange">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section section-alt" id="tech-integration">
        <div className="container">
          <div className="section-header">
            <span className="section-label">INTEGRATION LAYER</span>
            <h2>Seamless <span className="text-gradient">Integration</span></h2>
            <p>Designed to work within existing industrial infrastructure.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { icon: '🖥️', title: 'SCADA Systems', desc: 'OPC-UA and Modbus protocol support for seamless integration with existing SCADA infrastructure.' },
              { icon: '🌐', title: 'Industrial IoT', desc: 'MQTT, CoAP, and HTTP APIs for connecting to cloud platforms and enterprise systems.' },
              { icon: '🔧', title: 'Predictive Maintenance', desc: 'Condition-based monitoring that predicts failures before they happen, reducing unplanned downtime.' },
              { icon: '☁️', title: 'Cloud Analytics', desc: 'Scalable cloud infrastructure for historical analysis, model training, and cross-facility benchmarking.' },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Ready to See It in Action?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Let's discuss how Metabotics technology can transform your operations.
          </p>
          <Link to="/contact" className="btn btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  )
}
