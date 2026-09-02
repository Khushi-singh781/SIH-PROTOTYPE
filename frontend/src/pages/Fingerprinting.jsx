import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Fingerprint, AlertTriangle, TrendingUp, TrendingDown,
  BarChart3, Shield, AlertCircle, CheckCircle, XCircle,
  Activity, Zap, Users, Clock, ArrowRight,
  ExternalLink, ChevronRight, Eye
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

const mockFingerprint = {
  id: '0x82d9a3f7...',
  behavior: {
    inflow: 92,
    holdingPeriod: 85,
    splitting: 78,
    hopCount: 88,
    exchangeDeposit: 90
  }
}

const radarData = [
  { subject: 'Inflow', A: mockFingerprint.behavior.inflow, fullMark: 100 },
  { subject: 'Holding Period', A: mockFingerprint.behavior.holdingPeriod, fullMark: 100 },
  { subject: 'Splitting', A: mockFingerprint.behavior.splitting, fullMark: 100 },
  { subject: 'Hop Count', A: mockFingerprint.behavior.hopCount, fullMark: 100 },
  { subject: 'Exchange Deposit', A: mockFingerprint.behavior.exchangeDeposit, fullMark: 100 }
]

// Previous Cases Comparison Data
const previousCases = [
  {
    id: '#117',
    similarity: 87,
    date: '2025-01-10',
    type: 'Mule Network',
    amount: '₹12,40,000',
    wallets: 28,
    status: 'Resolved',
    details: {
      pattern: 'Similar mule network pattern with 4-hop transfers',
      flow: 'Victim → Splitter → Mule A → Mule B → Exchange',
      similarities: [
        'Same 4-hop transfer pattern',
        'Similar holding period (7-9 min)',
        'Connected to same exchange',
        'Identical splitting behavior'
      ],
      keyFindings: [
        'All 28 wallets identified',
        '87% funds recovered',
        '3 perpetrators arrested'
      ]
    }
  },
  {
    id: '#142',
    similarity: 79,
    date: '2025-01-08',
    type: 'Splitter Pattern',
    amount: '₹8,60,000',
    wallets: 19,
    status: 'Under Investigation',
    details: {
      pattern: 'Splitter-based money laundering',
      flow: 'Victim → Splitter A → Splitter B → Multiple Mules',
      similarities: [
        'Similar splitting behavior',
        'Same number of wallets',
        'Connected to previous scam reports'
      ],
      keyFindings: [
        '19 wallets under monitoring',
        '45% funds traced',
        'Ongoing investigation'
      ]
    }
  },
  {
    id: '#108',
    similarity: 65,
    date: '2025-01-05',
    type: 'Bridge Network',
    amount: '₹5,20,000',
    wallets: 15,
    status: 'Resolved',
    details: {
      pattern: 'Bridge-based fund movement',
      flow: 'Victim → Bridge A → Bridge B → Consolidator → Exchange',
      similarities: [
        'Similar bridge pattern',
        'Same exchange used',
        'Comparable transaction volume'
      ],
      keyFindings: [
        '15 wallets identified',
        '100% funds recovered',
        'Case closed'
      ]
    }
  },
  {
    id: '#89',
    similarity: 52,
    date: '2025-01-02',
    type: 'Exchange Pattern',
    amount: '₹3,80,000',
    wallets: 9,
    status: 'Resolved',
    details: {
      pattern: 'Direct exchange manipulation',
      flow: 'Victim → Collector → Exchange',
      similarities: [
        'Same exchange platform',
        'Similar timing patterns',
        'Related transaction amounts'
      ],
      keyFindings: [
        '9 wallets identified',
        '92% funds recovered',
        '2 perpetrators arrested'
      ]
    }
  }
]

const Fingerprinting = () => {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [selectedCase, setSelectedCase] = useState(null)
  const [viewDetails, setViewDetails] = useState(null)

  const handleViewDetails = (caseId) => {
    setViewDetails(viewDetails === caseId ? null : caseId)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Criminal Network Fingerprinting</h1>
          <p className="text-sm text-gray-400 mt-1">Behavioral fingerprint analysis & pattern matching</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <AlertTriangle size={16} className="text-amber-400" />
          <span className="text-xs text-amber-400">Behavioral Match Found</span>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="glass-card p-4 border border-amber-500/20 bg-amber-500/5">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-400">Behavioral Pattern Detected</p>
            <p className="text-sm text-gray-300">Criminals may change wallets, but their behavior leaves a fingerprint. 87% similarity with Case #117 detected.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Behavioral Fingerprint */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Fingerprint size={20} className="text-accent-blue" />
            <h3 className="text-lg font-semibold">Behavioral Fingerprint Analysis</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
              <div>
                <p className="text-xs text-gray-400">Wallet ID</p>
                <p className="font-mono text-sm">{mockFingerprint.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Active</span>
              </div>
            </div>

            {Object.entries(mockFingerprint.behavior).map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className={`font-semibold ${
                    value >= 80 ? 'text-emerald-400' :
                    value >= 60 ? 'text-amber-400' :
                    'text-rose-400'
                  }`}>{value}%</span>
                </div>
                <div className="w-full h-1.5 bg-dark-border rounded-full overflow-hidden mt-1">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${value}%`,
                      backgroundColor: value >= 80 ? '#10B981' : value >= 60 ? '#F59E0B' : '#EF4444'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Behavioral Profile Radar</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1E293B" />
              <PolarAngleAxis dataKey="subject" stroke="#6B7280" fontSize={10} />
              <PolarRadiusAxis stroke="#6B7280" fontSize={10} domain={[0, 100]} />
              <Radar 
                name="Behavioral Profile" 
                dataKey="A" 
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.3} 
              />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comparison with Previous Cases */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 size={20} className="text-accent-purple" />
          <h3 className="text-lg font-semibold">Comparison with Previous Cases</h3>
          <span className="ml-auto text-xs text-gray-400">{previousCases.length} matches found</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {previousCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border transition-all ${
                viewDetails === caseItem.id 
                  ? 'border-accent-blue bg-accent-blue/5' 
                  : 'border-dark-border hover:border-dark-border/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-400">Case {caseItem.id}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  caseItem.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400' :
                  'bg-amber-500/20 text-amber-400'
                }`}>
                  {caseItem.status}
                </span>
              </div>

              <div className="mt-3 text-center">
                <div className={`text-3xl font-bold ${
                  caseItem.similarity >= 80 ? 'text-emerald-400' :
                  caseItem.similarity >= 60 ? 'text-amber-400' :
                  'text-rose-400'
                }`}>
                  {caseItem.similarity}%
                </div>
                <div className="text-xs text-gray-500 mt-1">Behavioral Similarity</div>
              </div>

              <div className="mt-3 space-y-1 text-xs text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Type</span>
                  <span className="text-gray-300">{caseItem.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Amount</span>
                  <span className="text-gray-300">{caseItem.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Wallets</span>
                  <span className="text-gray-300">{caseItem.wallets}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Date</span>
                  <span className="text-gray-300">{caseItem.date}</span>
                </div>
              </div>

              <button
                onClick={() => handleViewDetails(caseItem.id)}
                className="mt-3 w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-accent-blue/10 hover:bg-accent-blue/20 rounded-lg text-xs text-accent-blue transition-all"
              >
                <Eye size={12} />
                View Details
                <ChevronRight size={12} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Case Details Modal/Expanded View */}
        <AnimatePresence>
          {viewDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              {previousCases.filter(c => c.id === viewDetails).map((caseItem) => (
                <div key={caseItem.id} className="p-4 bg-dark-bg rounded-lg border border-accent-blue/20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">Case {caseItem.id} - Details</h4>
                      <p className="text-sm text-gray-400">Similarity: {caseItem.similarity}% • {caseItem.type}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      caseItem.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {caseItem.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-400 mb-2">Pattern</p>
                      <p className="text-sm text-gray-300">{caseItem.details.pattern}</p>
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-400 mb-2">Flow</p>
                        <div className="flex items-center gap-2 text-sm text-gray-300 flex-wrap">
                          {caseItem.details.flow.split('→').map((step, idx, arr) => (
                            <React.Fragment key={idx}>
                              <span className="px-2 py-1 bg-dark-border rounded">{step.trim()}</span>
                              {idx < arr.length - 1 && <ArrowRight size={14} className="text-gray-500" />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-400 mb-2">Similarities</p>
                        <ul className="space-y-1">
                          {caseItem.details.similarities.map((sim, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{sim}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-400 mb-2">Key Findings</p>
                      <ul className="space-y-2">
                        {caseItem.details.keyFindings.map((finding, idx) => (
                          <li key={idx} className="flex items-start gap-2 p-2 bg-dark-border/30 rounded-lg">
                            <Shield size={14} className="text-accent-blue mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{finding}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Fingerprint size={14} className="text-emerald-400" />
                          <span className="text-sm text-emerald-400">
                            {caseItem.similarity >= 80 ? 'High behavioral match detected' :
                             caseItem.similarity >= 60 ? 'Moderate behavioral match' :
                             'Low behavioral match'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setViewDetails(null)}
                    className="mt-4 text-sm text-gray-400 hover:text-gray-200 transition-all"
                  >
                    Close Details
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Fingerprinting
