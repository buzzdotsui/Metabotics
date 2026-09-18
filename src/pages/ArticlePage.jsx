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
    image: 'https://images.unsplash.com/photo-1542125387-c71274d94f0a?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1504938096384-e9102377c0bd?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Engineering for Extremes</h2>
      <p>Deploying sensors in a server room is easy. Deploying them two meters away from a 1500°C melt is a completely different engineering challenge in materials science and thermodynamics.</p>
      <h3>Sensor Shielding and Cooling</h3>
      <p>Our approach at Metabotics involves custom-designed water-cooled jackets and ceramic heat shields for vital telemetry equipment. For data transmission, high-frequency vibrations in foundries often destroy standard PCB solder joints within weeks, necessitating specialized potting compounds and conformal coatings.</p>
      <h3>Protocol Selection: MQTT vs. OPC-UA</h3>
      <p>For high-frequency sensor data, we utilize edge-hosted MQTT brokers. This lightweight publish-subscribe protocol handles intermittent connectivity far better than traditional polling mechanisms, ensuring that no critical safety data is ever lost due to network jitter.</p>
    `
  },
  'digital-twins': {
    emoji: <Cpu className="w-16 h-16 text-accent-purple" />,
    tag: 'DIGITAL TWINS',
    title: 'Digital Twins for Materials Processing: A Practical Guide',
    desc: 'Creating virtual replicas of physical processes using physics-informed neural networks. How digital twins can reduce experimental costs and accelerate process optimization.',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>What is a Digital Twin?</h2>
      <p>A digital twin is a real-time virtual model of a physical asset or process, continuously updated with live sensor data. In materials processing, this means having a software replica of a furnace, rolling mill, or casting line that behaves exactly as its physical counterpart.</p>
      <h3>Physics-Informed Neural Networks</h3>
      <p>Pure data-driven models fail when operating in regimes not covered by training data. Physics-informed neural networks (PINNs) embed fundamental thermodynamic and mechanical laws directly into the model architecture, ensuring predictions remain physically plausible even for novel process conditions.</p>
      <h3>Reducing Experimental Cost</h3>
      <p>Traditionally, optimizing a heat treatment cycle requires dozens of expensive destructive tests on material samples. With a validated digital twin, engineers can simulate thousands of parameter combinations in minutes, narrowing physical trials to only the most promising configurations—often cutting R&D cycle times by 60% or more.</p>
      <h3>Implementation Roadmap</h3>
      <p>Building a digital twin starts with high-fidelity instrumentation of the physical process. Once sufficient historical data is collected, a baseline physics model is constructed and then augmented with ML layers. Continuous validation against real-world outcomes keeps the twin calibrated and trustworthy.</p>
    `
  },
  'reinforcement-learning': {
    emoji: <Brain className="w-16 h-16 text-accent-orange" />,
    tag: 'AI IN MANUFACTURING',
    title: 'Reinforcement Learning for Autonomous Process Control',
    desc: 'Training AI agents to make real-time decisions in metallurgical processes. From reward function design to safe deployment in production environments.',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    content: `
      <h2>Beyond Supervised Learning</h2>
      <p>Supervised learning requires labeled examples of correct behavior. In complex, dynamic metallurgical processes, the "correct" action at any moment depends on hundreds of interacting variables—making it nearly impossible to label every scenario manually. Reinforcement Learning (RL) sidesteps this by letting an agent learn optimal control policies through trial and feedback.</p>
      <h3>Reward Function Design</h3>
      <p>The reward function is the most critical component of any RL system. In a steel melting furnace, the reward must balance product quality (target chemistry, temperature uniformity), energy cost (kWh consumed per heat), and safety constraints (no overtemperature events, no refractory damage). Poor reward design leads to agents exploiting unintended shortcuts.</p>
      <h3>Safe Exploration in Production</h3>
      <p>Deploying an RL agent that is still learning on live production equipment is dangerous. Our approach uses constrained RL with safety layers: hard limits on actuator commands are enforced at the control layer, and the agent is initially trained in a digital twin before being deployed in shadow mode—where its recommendations are logged but not executed—until confidence thresholds are met.</p>
      <h3>Results in the Field</h3>
      <p>In pilot deployments, RL-based controllers have demonstrated 8–14% reductions in energy consumption and measurable improvements in heat-to-heat consistency compared to experienced human operators following standard procedures.</p>
    `
  },
  'energy-efficiency': {
    emoji: <Zap className="w-16 h-16 text-accent-green" />,
    tag: 'ENERGY EFFICIENCY',
    title: 'Reducing Energy Waste in High-Temperature Operations',
    desc: 'Data-driven strategies for minimizing energy consumption in furnaces, kilns, and heat treatment equipment without compromising product quality.',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1473625247510-8b548b111559?q=80&w=2066&auto=format&fit=crop',
    content: `
      <h2>The Scale of the Problem</h2>
      <p>High-temperature industrial processes—steelmaking, cement kilns, glass furnaces, and heat treatment lines—collectively account for roughly 20% of global industrial energy consumption. Even modest efficiency improvements translate into significant cost savings and carbon reductions at scale.</p>
      <h3>Identifying Waste with Data</h3>
      <p>The first step is visibility. Many plants operate legacy equipment without real-time energy metering at the process level. Installing sub-metering and correlating energy draw with production metrics immediately reveals inefficiency patterns: idle heating during shift changes, over-soaking of parts, or excessive purge cycles.</p>
      <h3>Load Shifting and Grid Arbitrage</h3>
      <p>With accurate production scheduling and predictive models, energy-intensive operations can shift load to off-peak tariff windows. For plants on time-of-use electricity contracts, this alone can reduce energy costs by 15–25% without changing any process parameters.</p>
      <h3>Process Optimization</h3>
      <p>Data-driven setpoint optimization—finding the minimum energy path to achieve a target metallurgical outcome—is the most impactful lever. By continuously learning from process outcomes, ML models refine temperature profiles and atmosphere compositions to eliminate unnecessary energy input while maintaining product specifications.</p>
    `
  },
  'predictive-maintenance': {
    emoji: <Activity className="w-16 h-16 text-accent-cyan" />,
    tag: 'PREDICTIVE MAINTENANCE',
    title: 'Predictive Maintenance in Metallurgical Equipment',
    desc: 'Using vibration analysis, thermal imaging, and ML models to predict equipment failures before they cause costly downtime.',
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1580983586259-715783321522?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>From Reactive to Predictive</h2>
      <p>Traditional maintenance strategies are either reactive (fix it when it breaks) or time-based preventive (replace parts on a schedule). Both are wasteful: reactive maintenance causes unplanned downtime, while time-based approaches often replace components that still have significant useful life remaining. Predictive maintenance uses real-time condition data to intervene at precisely the right moment.</p>
      <h3>Vibration Analysis</h3>
      <p>Rotating equipment—motors, fans, pumps, and gearboxes—emits characteristic vibration signatures. Accelerometers mounted on bearing housings capture these signals continuously. Fast Fourier Transform (FFT) analysis decomposes the vibration spectrum, and ML anomaly detection flags deviations from the established baseline, often detecting bearing wear weeks before catastrophic failure.</p>
      <h3>Thermal Imaging and Electrical Analysis</h3>
      <p>Infrared thermography identifies hotspots in electrical panels, refractory linings, and mechanical couplings. Combined with motor current signature analysis (MCSA), which detects rotor bar faults and air-gap eccentricity from current waveform harmonics, these non-invasive techniques provide a comprehensive health picture without stopping production.</p>
      <h3>ROI in Metallurgical Environments</h3>
      <p>In a continuous casting line, an unplanned breakout or roll replacement can cost hundreds of thousands of dollars in lost production and damaged equipment. Plants implementing AI-driven predictive maintenance programs typically report a 30–50% reduction in unplanned downtime and a 10–25% reduction in total maintenance costs within the first year.</p>
    `
  },
  'emerging-markets': {
    emoji: <Globe2 className="w-16 h-16 text-accent-purple" />,
    tag: 'EMERGING MARKETS',
    title: 'The Case for Industrial Intelligence in Emerging Markets',
    desc: 'Why Africa and developing economies stand to gain the most from industrial automation — and the unique challenges they face in adoption.',
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1541888049756-1fb9c4edce6f?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>The Leapfrog Opportunity</h2>
      <p>Emerging economies have historically leapfrogged legacy infrastructure stages—mobile banking bypassed landline banking, and mobile internet bypassed desktop broadband. The same dynamic is possible in industrial automation: rather than replicating the 40-year incremental digitization journey of European and North American plants, new and recently upgraded African facilities can deploy modern IIoT and AI systems from the outset.</p>
      <h3>Unique Challenges</h3>
      <p>The path is not without obstacles. Grid instability demands edge-first architectures that operate autonomously without cloud dependency. A skills gap in advanced automation engineering requires solutions designed for simpler local maintenance. Import duties on sophisticated hardware, currency volatility, and connectivity costs all factor into the total cost of ownership calculation.</p>
      <h3>Why the ROI is Higher</h3>
      <p>Paradoxically, the operational inefficiencies common in emerging market industrial plants mean that the baseline for improvement is lower—and the gains from AI-driven optimization are proportionally larger. A plant losing 20% of potential output to avoidable downtime has far more to gain from predictive maintenance than one already operating at 95% equipment effectiveness.</p>
      <h3>Building Local Capacity</h3>
      <p>Sustainable industrial intelligence in emerging markets cannot depend on ongoing foreign expertise. Metabotics prioritizes deep technology transfer: training local engineers not just to operate systems, but to understand, maintain, and extend them. This builds resilient industrial capability that outlasts any single project engagement.</p>
    `
  },
  'edge-computing': {
    emoji: <Network className="w-16 h-16 text-accent-orange" />,
    tag: 'EDGE COMPUTING',
    title: 'Edge Computing in Industrial Automation: Architecture & Trade-offs',
    desc: 'Balancing latency, reliability, and cost when deploying edge computing in industrial environments with unreliable connectivity.',
    date: 'July 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    content: `
      <h2>Why Edge?</h2>
      <p>Cloud computing offers virtually unlimited compute and storage, but it introduces latency and a critical dependency on network connectivity. In industrial control applications where a closed-loop response must occur within milliseconds—and where network outages cannot be permitted to halt production—the edge is not optional. It is the only viable architecture.</p>
      <h3>The Edge-Cloud Continuum</h3>
      <p>Modern industrial systems rarely choose between pure edge and pure cloud. Instead, they implement a tiered architecture: real-time control and safety logic run at the machine edge (PLC/embedded level), aggregation and local ML inference run at a plant-floor edge server, and longer-horizon analytics, model training, and fleet-wide monitoring run in the cloud. Data flows upward; intelligence flows downward.</p>
      <h3>Hardware Selection Trade-offs</h3>
      <p>Industrial edge servers must balance compute power, ruggedization (wide temperature range, vibration resistance, IP-rated enclosures), power consumption, and cost. GPU-equipped edge nodes enable faster ML inference but draw more power and generate more heat—challenging in already hot foundry environments. Purpose-built AI accelerator modules (like those from NVIDIA or Intel) offer a middle ground.</p>
      <h3>Connectivity and Failover</h3>
      <p>Even edge-first architectures benefit from intermittent cloud sync for model updates and telemetry reporting. Designing robust failover—ensuring that loss of WAN connectivity degrades gracefully to local autonomy rather than triggering a plant shutdown—is a critical and often underestimated aspect of industrial edge architecture.</p>
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
      <section className="page-hero" id="article-hero" style={{ paddingBottom: '0', position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'flex-end' }}>
        <div className="article-hero-bg" style={{ backgroundImage: `url(${article.image})` }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '60px' }}>
          <div className="article-hero-content">
            <div className="accent-line"></div>
            <span className="blog-tag" style={{ marginBottom: '16px', display: 'inline-block', background: 'var(--accent-cyan)', color: '#000', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold' }}>{article.tag}</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>{article.title}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '16px' }}>{article.date} • Metabotics Research</p>
          </div>
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
