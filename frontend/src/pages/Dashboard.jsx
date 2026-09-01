import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Wallet, Users, Activity, Play, Pause } from 'lucide-react'

const mockCaseData = {
  caseId: '#2025-1047',
  status: 'High Risk',
  lastUpdated: new Date().toISOString(),
  metrics: {
    totalLost: 1872000,
    confidence: 87,
    walletsIdentified: 37,
    clustersFound: 4
  },
  networkSummary: {
    collectors: 2,
    mules: 8,
    splitters: 6,
    consolidators: 3,
    bridges: 2,
    exitPoints: 1
  }
}

const mockTransactions = [
  { time: '10:00', from: 'Victim', to: 'Splitter', amount: 500000, type: 'theft' },
  { time: '10:02', from: 'Splitter', to: 'Mule A', amount: 250000, type: 'transfer' },
  { time: '10:04', from: 'Splitter', to: 'Mule B', amount: 250000, type: 'split' },
  { time: '10:08', from: 'Mule A', to: 'Exchange', amount: 250000, type: 'exchange' }
]

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Case Dashboard</h1>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-gray-400">Case {mockCaseData.caseId}</span>
            <span className="status-badge status-high">High Risk</span>
            <span className="text-xs text-gray-500">
              Updated: {new Date(mockCaseData.lastUpdated).toLocaleString()}
            </span>
          </div>
        </div>
        <button className="px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-lg text-sm hover:bg-accent-blue/20 transition-all">
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={TrendingUp} label="Total Amount Lost" value={`₹${mockCaseData.metrics.totalLost.toLocaleString()}`} color="text-rose-400" />
        <MetricCard icon={Activity} label="Tracing Confidence" value={`${mockCaseData.metrics.confidence}%`} color="text-emerald-400" />
        <MetricCard icon={Wallet} label="Wallets Identified" value={mockCaseData.metrics.walletsIdentified} color="text-accent-blue" />
        <MetricCard icon={Users} label="Clusters Found" value={mockCaseData.metrics.clustersFound} color="text-accent-purple" />
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Network Role Distribution</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <RoleCard label="Collectors" count={2} color="rose" />
          <RoleCard label="Mules" count={8} color="amber" />
          <RoleCard label="Splitters" count={6} color="purple" />
          <RoleCard label="Consolidators" count={3} color="emerald" />
          <RoleCard label="Bridges" count={2} color="blue" />
          <RoleCard label="Exit Points" count={1} color="orange" />
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Money Flow Trace</h3>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg hover:bg-dark-bg transition-all"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between gap-2 overflow-x-auto py-4">
          {mockTransactions.map((tx, idx) => {
            let bgColor = 'bg-emerald-500/20 text-emerald-400'
            if (tx.type === 'theft') bgColor = 'bg-rose-500/20 text-rose-400'
            else if (tx.type === 'transfer') bgColor = 'bg-amber-500/20 text-amber-400'
            else if (tx.type === 'split') bgColor = 'bg-purple-500/20 text-purple-400'
            
            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center min-w-[80px]">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${bgColor}`}>
                    {tx.amount/1000}k
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{tx.from}</span>
                  <span className="text-[10px] text-gray-500">→ {tx.to}</span>
                  <span className="text-[10px] text-gray-500">{tx.time}</span>
                </div>
                {idx < mockTransactions.length - 1 && (
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-rose-400 to-emerald-400 min-w-[20px]"></div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

const MetricCard = ({ icon: Icon, label, value, color }) => (
  <div className="glass-card p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <Icon size={24} className={color} />
    </div>
  </div>
)

const RoleCard = ({ label, count, color }) => {
  const colors = {
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  }
  
  return (
    <div className={`p-3 rounded-lg border text-center ${colors[color]}`}>
      <p className="text-lg font-bold">{count}</p>
      <p className="text-xs opacity-80">{label}</p>
    </div>
  )
}

export default Dashboard
