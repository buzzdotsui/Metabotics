export interface SystemStage {
  id: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export const systemStages: SystemStage[] = [
  {
    id: 'physical-system',
    label: 'PHYSICAL SYSTEM',
    description: 'Machines, processes and physical signals',
  },
  {
    id: 'sensors',
    label: 'SENSORS',
    description: 'Temperature, vibration, gas, optical',
  },
  {
    id: 'edge',
    label: 'EDGE',
    description: 'Local processing and data conditioning',
  },
  {
    id: 'data',
    label: 'DATA',
    description: 'Structured time-series and event streams',
  },
  {
    id: 'digital-twin',
    label: 'DIGITAL TWIN',
    description: 'Computational representation of the system',
  },
  {
    id: 'intelligence',
    label: 'INTELLIGENCE',
    description: 'Prediction, anomaly detection, reasoning',
  },
  {
    id: 'optimization',
    label: 'OPTIMIZATION',
    description: 'Operational decisions and closed-loop control',
  },
];

export const technologyLayers = [
  {
    id: 'observe',
    number: '01',
    label: 'OBSERVE',
    title: 'Capture Physical Signals',
    description: 'Industrial-grade sensors and edge hardware capture temperature, vibration, gas composition, and process data at high frequency.',
    capabilities: [
      'Thermal imaging and pyrometry',
      'Vibration and acoustic monitoring',
      'Gas and atmosphere analysis',
      'High-frequency data acquisition',
      'Edge preprocessing and filtering',
    ],
  },
  {
    id: 'model',
    number: '02',
    label: 'MODEL',
    title: 'Build Digital Representations',
    description: 'Physics-informed models and data-driven digital twins represent the real-time state and behavior of industrial processes.',
    capabilities: [
      'Physics-based process models',
      'Data-driven surrogate models',
      'Real-time state estimation',
      'Multi-physics simulation',
      'Uncertainty quantification',
    ],
  },
  {
    id: 'understand',
    number: '03',
    label: 'UNDERSTAND',
    title: 'Extract Intelligence',
    description: 'Machine learning identifies patterns, predicts behavior, detects anomalies, and supports operational reasoning.',
    capabilities: [
      'Time-series forecasting',
      'Anomaly detection',
      'Process optimization',
      'Root cause analysis',
      'Decision support',
    ],
  },
  {
    id: 'act',
    number: '04',
    label: 'ACT',
    title: 'Close the Loop',
    description: 'Insights become actions — alerts, automated adjustments, setpoint optimization, and predictive maintenance scheduling.',
    capabilities: [
      'Real-time alerting',
      'Automated setpoint control',
      'Predictive maintenance',
      'Operator decision support',
      'Continuous optimization loops',
    ],
  },
];

export const hardwareIntegrations = [
  { category: 'Temperature & Thermal', protocols: ['Modbus TCP', 'OPC-UA', 'PROFINET', 'EtherNet/IP'] },
  { category: 'Vibration & Mechanical', protocols: ['IEPE', 'Modbus RTU', 'WirelessHART', 'MQTT'] },
  { category: 'Gas & Atmosphere', protocols: ['4-20mA', 'HART', 'Foundation Fieldbus', 'OPC-UA'] },
  { category: 'Edge Compatibility', protocols: ['Linux', 'Windows IoT', 'Docker', 'Kubernetes (K3s)'] },
  { category: 'Controller Integration', protocols: ['Siemens S7', 'Allen-Bradley', 'Schneider M580', 'Custom PLC parsers'] },
  { category: 'Custom Data Parsers', protocols: ['CSV', 'JSON', 'Parquet', 'InfluxDB line protocol'] },
];

export const softwareLayers = [
  { id: 'acquisition', label: 'DATA ACQUISITION', description: 'High-frequency ingestion from heterogeneous industrial sources' },
  { id: 'storage', label: 'TIME-SERIES STORAGE', description: 'Optimized for industrial time-series with compression and retention policies' },
  { id: 'ml', label: 'MACHINE LEARNING', description: 'Training, deployment, and monitoring of industrial ML models' },
  { id: 'twin', label: 'DIGITAL TWIN ENGINE', description: 'Real-time simulation and what-if analysis' },
  { id: 'analytics', label: 'REAL-TIME ANALYTICS', description: 'Streaming aggregation, windowing, and complex event processing' },
  { id: 'alerts', label: 'ALERTING', description: 'Multi-channel notification with escalation and acknowledgment' },
  { id: 'reporting', label: 'REPORTING', description: 'Automated operational reports and compliance documentation' },
];

export const integrationProtocols = [
  'SCADA',
  'Industrial IoT',
  'PLC Systems',
  'MQTT',
  'OPC-UA',
  'Modbus (TCP/RTU)',
  'HTTP/REST APIs',
  'Cloud Analytics (AWS/Azure/GCP)',
];