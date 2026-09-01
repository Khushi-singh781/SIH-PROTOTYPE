import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, AlertTriangle, TrendingUp, TrendingDown, 
  ExternalLink, Info, ChevronDown, ChevronUp,
  BarChart3, Shield, AlertCircle
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const mockWallets = [
  {
    id: '0x82d9a3f7e1b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8',
    rank: 1,
    value: 680000,
    riskScore: 92,
    controlPercentage: 34,
    pattern: 'mule',
    evidenceStrength: 92,
    reasons: [
      'Received funds from 14 unrelated wallets',
      'Transferred 91% within 8 minutes',
      'Split across 6 wallets',
      'Connected to previous scam reports'
    ],
    transactions: [
      { time: '10:02', from: 'Splitter', amount: 250000 },
      { time: '10:04', from: 'Splitter', amount: 250000 },
      { time: '10:08', to: 'Mule B', amount: 200000 }
    ]
  },
  {
    id: '0x91a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9',
    rank: 2,
    value: 420000,
    riskScore: 78,
    controlPercentage: 21,
    pattern: 'splitter',
    evidenceStrength: 78,
    reasons: [
      'High transaction frequency',
      'Multiple bridge connections',
      'Suspicious timing patterns'
    ],
    transactions: [
      { time: '10:01', from: 'Victim', amount: 500000 },
      { time: '10:03', to: 'Mule A', amount: 250000 },
      { time: '10:05', to: 'Mule C', amount: 250000 }
    ]
  },
  {
    id: '0xa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9',
    rank: 3,
    value: 180000,
    riskScore: 65,
    controlPercentage: 9,
    pattern: 'bridge',
    evidenceStrength: 65,
    reasons: [
      'Bridge to exchange',
      'Multiple consolidation points',
      'Unusual transaction patterns'
    ],
    transactions: [
      { time: '10:06', from: 'Mule A', amount: 125000 },
      { time: '10:07', from: 'Mule B', amount: 225000 }
    ]
  }
]

const riskBreakdown = [
  { name: 'Rapid Movement', score: 15, max: 20 },
  { name: 'Multi-Hop Flow', score: 15, max: 20 },
  { name: 'Fund Splitting', score: 10, max: 15 },
  { name: 'Anomaly Detection', score: 18, max: 20 },
  { name: 'Graph Risk', score: 14, max: 20 },
  { name: 'Entity Interaction', score: 8, max: 15 }
]

const Prioritizer = () => {
  const [selectedWallet, setSelectedWallet] = useState(mockWallets[0])
  const [expandedWallets, setExpandedWallets] = useState([mockWallets[0].id])
  const [showDrawer, setShowDrawer] = useState(true)

  const toggleWallet = (id) => {
    setExpandedWallets(prev => 
      prev.includes(id) 
        ? prev.filter(w => w !== id)
        : [...prev, id]
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Next Best Wallet Prioritizer</h1>
          <p className="text-sm text-gray-400 mt-1">Ranked wallets based on information gain</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-lg">
          <Shield size={16} className="text-accent-blue" />
          <span className="text-xs text-accent-blue">Top Priority: {mockWallets[0].id.slice(0, 8)}...</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet List */}
        <div className="lg:col-span-2 space-y-4">
          {mockWallets.map((wallet) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`glass-card p-4 border transition-all cursor-pointer ${
                selectedWallet?.id === wallet.id 
                  ? 'border-accent-blue' 
                  : 'border-dark-border hover:border-dark-border/60'
              }`}
              onClick={() => setSelectedWallet(wallet)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-blue/10">
                      <span className="text-sm font-bold text-accent-blue">#{wallet.rank}</span>
                    </div>
                    <div>
                      <p className="font-mono text-sm">{wallet.id.slice(0, 12)}...{wallet.id.slice(-8)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          wallet.riskScore >= 80 ? 'bg-rose-500/20 text-rose-400' :
                          wallet.riskScore >= 60 ? 'bg-amber-500/20 text-amber-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          Risk: {wallet.riskScore}/100
                        </span>
                        <span className="text-xs text-gray-400">
                          Value: ₹{wallet.value.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400">
                          Controls: {wallet.controlPercentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleWallet(wallet.id)
                  }}
                  className="p-1 hover:bg-dark-bg rounded-lg transition-all"
                >
                  {expandedWallets.includes(wallet.id) ? 
                    <ChevronUp size={16} className="text-gray-400" /> : 
                    <ChevronDown size={16} className="text-gray-400" />
                  }
                </button>
              </div>

              {/* Expanded Details */}
              {expandedWallets.includes(wallet.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 pt-3 border-t border-dark-border"
                >
                  <div className="space-y-2">
                    {wallet.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <AlertCircle size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{reason}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>Evidence Strength</span>
                      <div className="flex-1 h-1 bg-dark-border rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${wallet.evidenceStrength}%`,
                            backgroundColor: wallet.evidenceStrength >= 80 ? '#10B981' : 
                                           wallet.evidenceStrength >= 60 ? '#F59E0B' : '#EF4444'
                          }}
                        ></div>
                      </div>
                      <span className="font-semibold">{wallet.evidenceStrength}%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Suspicious Wallet Details */}
        {selectedWallet && showDrawer && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Suspicious Wallet Details</h3>
              <button className="text-xs text-gray-400 hover:text-gray-200">
                <ExternalLink size={14} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400">Wallet Address</p>
                <p className="font-mono text-sm truncate">{selectedWallet.id}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-gray-400">Risk Score</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold ${
                      selectedWallet.riskScore >= 80 ? 'text-rose-400' :
                      selectedWallet.riskScore >= 60 ? 'text-amber-400' :
                      'text-emerald-400'
                    }`}>
                      {selectedWallet.riskScore}
                    </span>
                    <span className="text-xs text-gray-400">/ 100</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400">Control %</p>
                  <p className="text-2xl font-bold text-accent-blue">{selectedWallet.controlPercentage}%</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">Top 5 Suspicious Indicators</p>
                <div className="space-y-2">
                  {selectedWallet.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-dark-bg rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[8px] text-rose-400">{idx + 1}</span>
                      </div>
                      <span className="text-gray-300">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">Transaction Pattern</p>
                <ResponsiveContainer width="100%" height={80}>
                  <BarChart data={selectedWallet.transactions}>
                    <XAxis dataKey="time" fontSize={8} tick={{ fill: '#6B7280' }} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="amount" radius={[2, 2, 0, 0]}>
                      {selectedWallet.transactions.map((_, idx) => (
                        <Cell key={idx} fill={idx % 2 === 0 ? '#3B82F6' : '#8B5CF6'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Risk Breakdown */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Risk Breakdown Histogram</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={riskBreakdown} layout="vertical">
            <XAxis type="number" domain={[0, 20]} stroke="#6B7280" fontSize={10} />
            <YAxis type="category" dataKey="name" stroke="#6B7280" fontSize={10} />
            <Tooltip />
            <Bar dataKey="score" radius={[0, 4, 4, 0]}>
              {riskBreakdown.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.score >= 15 ? '#EF4444' : entry.score >= 10 ? '#F59E0B' : '#3B82F6'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default Prioritizer
