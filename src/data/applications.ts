export interface Application {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  industry: string;
  challenges: string[];
  capabilities: string[];
  systems: string[];
}

export const applications: Application[] = [
  {
    slug: 'steel-foundries',
    number: '01',
    title: 'STEEL & FOUNDRIES',
    description: 'Industrial intelligence for complex materials-processing systems.',
    href: '/applications/steel-foundries',
    image: '/images/application-steel-foundry.jpg',
    imageAlt: 'Steel foundry operation with molten metal pouring',
    industry: 'Steel Manufacturing & Foundries',
    challenges: [
      'Furnace temperature instability',
      'High energy consumption',
      'Casting quality variation',
      'Refractory wear unpredictability',
      'Manual process adjustments',
    ],
    capabilities: [
      'Real-time furnace monitoring',
      'Temperature profile optimization',
      'Energy consumption reduction',
      'Casting defect prediction',
      'Refractory life prediction',
    ],
    systems: [
      'Electric arc furnace monitoring',
      'Ladle metallurgy control',
      'Continuous casting optimization',
      'Heat treatment integration',
    ],
  },
  {
    slug: 'heat-treatment',
    number: '02',
    title: 'HEAT TREATMENT',
    description: 'Precision control for thermal processing and material properties.',
    href: '/applications/heat-treatment',
    image: '/images/application-heat-treatment.jpg',
    imageAlt: 'Heat treatment furnace with glowing workpiece',
    industry: 'Heat Treatment & Thermal Processing',
    challenges: [
      'Temperature uniformity',
      'Cycle time optimization',
      'Distortion control',
      'Atmosphere consistency',
      'Material property verification',
    ],
    capabilities: [
      'Multi-zone temperature control',
      'Atmosphere monitoring',
      'Quench optimization',
      'Distortion prediction',
      'Hardness prediction',
    ],
    systems: [
      'Carburizing furnace control',
      'Nitriding process monitoring',
      'Vacuum furnace optimization',
      'Induction heating control',
    ],
  },
  {
    slug: 'mining-materials',
    number: '03',
    title: 'MINING & MATERIALS',
    description: 'Process intelligence for extraction and beneficiation operations.',
    href: '/applications/mining-materials',
    image: '/images/application-mining-materials.jpg',
    imageAlt: 'Mining operation with haul trucks and processing plant',
    industry: 'Mining & Materials Processing',
    challenges: [
      'Ore grade variability',
      'Comminution energy waste',
      'Flotation circuit instability',
      'Tailings management',
      'Equipment downtime',
    ],
    capabilities: [
      'Ore tracking and blending',
      'Grinding circuit optimization',
      'Flotation recovery maximization',
      'Predictive maintenance',
      'Water recovery optimization',
    ],
    systems: [
      'SAG/Ball mill optimization',
      'Flotation bank control',
      'Hydrocyclone monitoring',
      'Thickener and filtration control',
    ],
  },
  {
    slug: 'energy-intensive',
    number: '04',
    title: 'ENERGY-INTENSIVE INDUSTRIES',
    description: 'Efficiency and emissions optimization for high-temperature processes.',
    href: '/applications/energy-intensive',
    image: '/images/application-energy.jpg',
    imageAlt: 'Industrial energy facility with piping and vessels',
    industry: 'Energy-Intensive Manufacturing',
    challenges: [
      'High fuel consumption',
      'Emissions compliance',
      'Process heat recovery',
      'Load balancing',
      'Asset reliability',
    ],
    capabilities: [
      'Combustion optimization',
      'Waste heat recovery',
      'Emissions monitoring',
      'Predictive asset management',
      'Energy benchmarking',
    ],
    systems: [
      'Cement kiln optimization',
      'Glass furnace control',
      'Chemical reactor monitoring',
      'Power plant efficiency',
    ],
  },
];

export const applicationCategories = [
  { id: 'steel-foundries', label: 'Steel & Foundries', count: applications.filter(a => a.slug === 'steel-foundries').length },
  { id: 'heat-treatment', label: 'Heat Treatment', count: applications.filter(a => a.slug === 'heat-treatment').length },
  { id: 'mining-materials', label: 'Mining & Materials', count: applications.filter(a => a.slug === 'mining-materials').length },
  { id: 'energy-intensive', label: 'Energy', count: applications.filter(a => a.slug === 'energy-intensive').length },
];