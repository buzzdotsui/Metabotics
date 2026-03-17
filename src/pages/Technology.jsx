import { Link } from 'react-router-dom'
// Replaced 'Vibrate' with 'Activity' and 'Tool' with 'Wrench'
import {
  Thermometer,
  Activity,
  Wind,
  Cpu,
  Zap,
  PenTool,
  TrendingUp,
  Brain,
  Orbit,
  LayoutDashboard,
  Bell,
  FileText,
  Monitor,
  Network,
  Wrench,
  Cloud
} from 'lucide-react'

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

      {/* Hardware Integration */}
      <section className="section section-alt" id="tech-hardware">
        <div className="container">
          <div className="section-header">
            <span className="section-label">HARDWARE AGNOSTIC</span>
            <h2>Seamless <span className="text-gradient">Sensor Integration</span></h2>
            <p>Our software connects instantly with your existing industrial hardware in extreme environments.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: <Thermometer className="w-8 h-8" />, title: 'Temperature & Thermal', desc: 'Ingests data from high-precision thermocouples and infrared sensors rated up to 1800°C.' },
              { icon: <Activity className="w-8 h-8" />, title: 'Vibration & Mechanical', desc: 'Analyzes streams from MEMS accelerometers to detect mechanical anomalies.' },
              { icon: <Wind className="w-8 h-8" />, title: 'Gas & Atmosphere', desc: 'Processes readings from electrochemical and NDIR sensors monitoring furnace atmospheres.' },
              { icon: <Cpu className="w-8 h-8" />, title: 'Edge Compatibility', desc: 'Deploy our lightweight ingestion agents on any ARM/RISC-V based industrial edge computer.' },
              { icon: <Zap className="w-8 h-8" />, title: 'Controller Integration', desc: 'Communicates bi-directionally with existing PLC modules to actuate valves and heating elements.' },
              { icon: <PenTool className="w-8 h-8" />, title: 'Custom Data Parsers', desc: 'Bespoke protocol translation for proprietary or legacy data acquisition systems.' },
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
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Data Acquisition', desc: 'High-throughput data ingestion pipeline handling thousands of sensor readings per second with time-series storage.' },
              { icon: <Brain className="w-8 h-8" />, title: 'Machine Learning Models', desc: 'LSTM networks, gradient boosting, and reinforcement learning models trained on metallurgical process data.' },
              { icon: <Orbit className="w-8 h-8" />, title: 'Digital Twin Engine', desc: 'Physics-informed neural networks creating virtual replicas of furnaces and processing equipment for simulation.' },
              { icon: <LayoutDashboard className="w-8 h-8" />, title: 'Real-Time Dashboards', desc: 'WebSocket-powered visualization with sub-second updates. Custom views for operators, engineers, and management.' },
              { icon: <Bell className="w-8 h-8" />, title: 'Alert & Notification System', desc: 'Multi-channel alerting via SMS, email, and dashboard. Configurable thresholds and escalation policies.' },
              { icon: <FileText className="w-8 h-8" />, title: 'Reporting & Analytics', desc: 'Automated shift reports, trend analysis, and compliance documentation for quality management systems.' },
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
              { icon: <Monitor className="w-8 h-8" />, title: 'SCADA Systems', desc: 'OPC-UA and Modbus protocol support for seamless integration with existing SCADA infrastructure.' },
              { icon: <Network className="w-8 h-8" />, title: 'Industrial IoT', desc: 'MQTT, CoAP, and HTTP APIs for connecting to cloud platforms and enterprise systems.' },
              // Changed from Tool to Wrench
              { icon: <Wrench className="w-8 h-8" />, title: 'Predictive Maintenance', desc: 'Condition-based monitoring that predicts failures before they happen, reducing unplanned downtime.' },
              { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Analytics', desc: 'Scalable cloud infrastructure for historical analysis, model training, and cross-facility benchmarking.' },
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