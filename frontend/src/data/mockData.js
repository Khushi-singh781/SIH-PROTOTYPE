// frontend/src/data/mockData.js
export const mockCases = [
  {
    id: '2025-1047',
    title: 'Fraudulent Investment Scam',
    risk: 'HIGH',
    status: 'active',
    amount: 1872000,
    wallets: 37,
    clusters: 4,
    confidence: 87,
    lastUpdated: '2025-09-02T14:32:00'
  },
  {
    id: '2025-1048',
    title: 'Pump and Dump Scheme',
    risk: 'MEDIUM',
    status: 'investigating',
    amount: 950000,
    wallets: 23,
    clusters: 3,
    confidence: 72,
    lastUpdated: '2025-09-02T12:15:00'
  }
]

export const mockTransactions = [
  {
    id: 'tx1',
    from: '0x82f3...a91',
    to: '0x41ab...672',
    amount: 500000,
    timestamp: '2025-09-02T10:00:00',
    type: 'transfer',
    confidence: 87
  },
  {
    id: 'tx2',
    from: '0x41ab...672',
    to: '0x9a21...3f4',
    amount: 250000,
    timestamp: '2025-09-02T10:02:00',
    type: 'split',
    confidence: 85
  },
  {
    id: 'tx3',
    from: '0x41ab...672',
    to: '0x7c91...a44',
    amount: 250000,
    timestamp: '2025-09-02T10:02:00',
    type: 'split',
    confidence: 84
  },
  {
    id: 'tx4',
    from: '0x9a21...3f4',
    to: '0x3e12...812',
    amount: 250000,
    timestamp: '2025-09-02T10:04:00',
    type: 'bridge',
    confidence: 72
  }
]

export const mockWallets = [
  {
    address: '0x82f3...a91',
    role: 'Victim',
    confidence: 95,
    risk: 'LOW',
    transactions: 14
  },
  {
    address: '0x41ab...672',
    role: 'Mule',
    confidence: 87,
    risk: 'HIGH',
    transactions: 28
  },
  {
    address: '0x9a21...3f4',
    role: 'Splitter',
    confidence: 72,
    risk: 'MEDIUM',
    transactions: 12
  },
  {
    address: '0x7c91...a44',
    role: 'Bridge',
    confidence: 68,
    risk: 'HIGH',
    transactions: 8
  },
  {
    address: '0x3e12...812',
    role: 'Exchange',
    confidence: 65,
    risk: 'MEDIUM',
    transactions: 5
  }
]

export const mockAnalysis = {
  verdict: 'SUPPORTED',
  confidence: 87,
  evidence: [
    '14 unrelated sources',
    '91% funds moved in 8 minutes',
    'Matches known mule pattern'
  ],
  pattern: 'MULE_PATTERN',
  riskScore: 92
}

export const mockNetworkData = {
  nodes: [
    { id: 'victim', label: 'Victim', type: 'victim', confidence: 95, x: 100, y: 200 },
    { id: 'mule1', label: 'Mule', type: 'mule', confidence: 87, x: 250, y: 100 },
    { id: 'mule2', label: 'Mule', type: 'mule', confidence: 85, x: 250, y: 300 },
    { id: 'splitter', label: 'Splitter', type: 'splitter', confidence: 72, x: 400, y: 50 },
    { id: 'bridge', label: 'Bridge', type: 'bridge', confidence: 68, x: 400, y: 200 },
    { id: 'consolidator', label: 'Consolidator', type: 'consolidator', confidence: 70, x: 400, y: 350 },
    { id: 'exchange', label: 'Exchange', type: 'exchange', confidence: 65, x: 550, y: 200 }
  ],
  edges: [
    { source: 'victim', target: 'mule1' },
    { source: 'victim', target: 'mule2' },
    { source: 'mule1', target: 'splitter' },
    { source: 'mule2', target: 'bridge' },
    { source: 'splitter', target: 'exchange' },
    { source: 'bridge', target: 'exchange' },
    { source: 'bridge', target: 'consolidator' },
    { source: 'consolidator', target: 'exchange' }
  ]
}