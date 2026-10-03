export interface ResearchItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  href: string;
  coverImage?: string;
  coverImageAlt?: string;
  tags?: string[];
}

export const researchItems: ResearchItem[] = [
  {
    slug: 'digital-twins-complex-industrial-systems',
    category: 'DIGITAL TWINS',
    title: 'Digital Twins for Complex Industrial Systems',
    description: 'How physics-informed digital twins enable real-time optimization of metallurgical processes without disrupting production.',
    publishedAt: '2026-03-15',
    readingTime: 12,
    href: '/research/digital-twins-complex-industrial-systems',
    coverImage: '/images/research-industrial-lab.jpg',
    coverImageAlt: 'Industrial research laboratory with monitoring equipment',
    tags: ['Digital Twins', 'Physics-Informed ML', 'Metallurgy'],
  },
  {
    slug: 'data-driven-process-optimization',
    category: 'PROCESS OPTIMIZATION',
    title: 'Data-Driven Process Optimization in Steel Manufacturing',
    description: 'Applying time-series analysis and reinforcement learning to reduce energy consumption in electric arc furnace operations.',
    publishedAt: '2026-02-28',
    readingTime: 8,
    href: '/research/data-driven-process-optimization',
    coverImage: '/images/research-simulation.jpg',
    coverImageAlt: 'Process simulation visualization on screen',
    tags: ['Reinforcement Learning', 'Steel Manufacturing', 'Energy Efficiency'],
  },
  {
    slug: 'industrial-iot-architecture-edge',
    category: 'INDUSTRIAL IOT',
    title: 'Industrial IoT Architecture for Edge Computing',
    description: 'Designing resilient edge-to-cloud architectures for high-frequency sensor data in harsh industrial environments.',
    publishedAt: '2026-01-20',
    readingTime: 10,
    href: '/research/industrial-iot-architecture-edge',
    tags: ['Edge Computing', 'Industrial IoT', 'Architecture'],
  },
  {
    slug: 'reinforcement-learning-process-control',
    category: 'AI IN MANUFACTURING',
    title: 'Reinforcement Learning for Autonomous Process Control',
    description: 'Training RL agents to optimize furnace setpoints in simulation before deployment to production systems.',
    publishedAt: '2025-12-10',
    readingTime: 15,
    href: '/research/reinforcement-learning-process-control',
    tags: ['Reinforcement Learning', 'Process Control', 'Simulation'],
  },
  {
    slug: 'energy-efficiency-industrial-furnaces',
    category: 'ENERGY EFFICIENCY',
    title: 'Energy Efficiency in Industrial Furnace Operations',
    description: 'Combustion optimization and waste heat recovery strategies for reducing specific energy consumption.',
    publishedAt: '2025-11-05',
    readingTime: 9,
    href: '/research/energy-efficiency-industrial-furnaces',
    tags: ['Energy Efficiency', 'Combustion', 'Heat Recovery'],
  },
  {
    slug: 'predictive-maintenance-heavy-industry',
    category: 'PREDICTIVE MAINTENANCE',
    title: 'Predictive Maintenance for Heavy Industry',
    description: 'Multi-modal sensor fusion for early detection of refractory wear, bearing degradation, and electrode consumption.',
    publishedAt: '2025-10-12',
    readingTime: 11,
    href: '/research/predictive-maintenance-heavy-industry',
    tags: ['Predictive Maintenance', 'Sensor Fusion', 'Condition Monitoring'],
  },
];

export const researchCategories = [
  'DIGITAL TWINS',
  'INDUSTRY 4.0',
  'SMART FURNACES',
  'INDUSTRIAL IOT',
  'AI IN MANUFACTURING',
  'ENERGY EFFICIENCY',
  'PREDICTIVE MAINTENANCE',
  'EMERGING MARKETS',
  'EDGE COMPUTING',
];