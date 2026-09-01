import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Fingerprint, AlertTriangle, TrendingUp, TrendingDown,
  BarChart3, Shield, AlertCircle, CheckCircle, XCircle,
  Activity, Zap, Users, Clock, ArrowRight
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
  },
  matches: [
    { caseId: '#17', similarity: 87, confidence: 'high' },
    { caseId: '#42', similarity: 79, confidence: 'medium' },
    { caseId: '#08', similarity: 65, confidence: 'medium' },
    { caseId: '#33', similarity: 52, confidence: 'low' }
  ],
  alerts: [
    'Criminals may change wallets, but their behavior leaves a fingerprint.',
    'Unusual holding period detected (7 min average)',
    'Pattern matches 4-hop transfer signature',
    'Splitting behavior consistent with known mule networks'
  ]
}

const radarData = [
  { subject: 'Inflow', A: mockFingerprint.behavior.inflow, fullMark: 100 },
  { subject: 'Holding Period', A: mockFingerprint.behavior.holdingPeriod, fullMark: 100 },
  { subject: 'Splitting', A: mockFingerprint.behavior.splitting, fullMark: 100 },
  { subject: 'Hop Count', A: mockFingerprint.behavior.hopCount, fullMark: 100 },
  { subject: 'Exchange Deposit', A: mockFingerprint.behavior.exchangeDeposit, fullMark: 100 }
]

const patternHistory = [
  { case: '#17', similarity: 87, type: 'mule' },
  { case: '#42', similarity: 79, type: 'splitter' },
  { case: '#08', similarity: 65, type: 'bridge' },
  { case: '#33', similarity: 52, type: 'collector' }
]

const Fingerprinting = () => {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [activeTab, setActiveTab] = useState('behavioral')

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
            <p className="text-sm text-gray-300">Criminals may change wallets, but their behavior leaves a fingerprint. 87% similarity with Case #17 detected.</p>
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
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pattern Matcher Engine */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Pattern Matcher Engine</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left text-xs text-gray-400 pb-3 font-semibold">Case ID</th>
                <th className="text-left text-xs text-gray-400 pb-3 font-semibold">Similarity</th>
                <th className="text-left text-xs text-gray-400 pb-3 font-semibold">Type</th>
                <th className="text-left text-xs text-gray-400 pb-3 font-semibold">Confidence</th>
                <th className="text-left text-xs text-gray-400 pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {patternHistory.map((match, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border-b border-dark-border/50 hover:bg-dark-bg/50 transition-all cursor-pointer ${
                    selectedMatch === idx ? 'bg-accent-blue/5' : ''
                  }`}
                  onClick={() => setSelectedMatch(selectedMatch === idx ? null : idx)}
                >
                  <td className="py-3 text-sm font-mono">{match.case}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-dark-border rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${match.similarity}%`,
                            backgroundColor: match.similarity >= 80 ? '#10B981' : 
                                           match.similarity >= 60 ? '#F59E0B' : '#EF4444'
                          }}
                        ></div>
                      </div>
                      <span className={`text-sm font-semibold ${
                        match.similarity >= 80 ? 'text-emerald-400' :
                        match.similarity >= 60 ? 'text-amber-400' :
                        'text-rose-400'
                      }`}>{match.similarity}%</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm capitalize">{match.type}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      match.similarity >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                      match.similarity >= 60 ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }`}>
                      {match.similarity >= 80 ? 'High' : match.similarity >= 60 ? 'Medium' : 'Low'}
                    </span>
                  </td>
                  <td className="py-3">
                    {match.similarity >= 80 ? (
                      <CheckCircle size={16} className="text-emerald-400" />
                    ) : match.similarity >= 60 ? (
                      <AlertCircle size={16} className="text-amber-400" />
                    ) : (
                      <XCircle size={16} className="text-rose-400" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alerts */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Behavioral Alerts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mockFingerprint.alerts.map((alert, idx) => (
            <div key={idx} className="flex items-start gap-2 p-3 bg-dark-bg rounded-lg">
              <AlertTriangle size={16} className={`mt-0.5 ${
                idx === 0 ? 'text-amber-400' : 'text-gray-400'
              }`} />
              <span className="text-sm text-gray-300">{alert}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Fingerprinting
