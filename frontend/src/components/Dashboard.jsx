import React from 'react'
import { TrendingUp, Wallet, Layers } from 'lucide-react'

const Dashboard = () => {
  const metrics = [
    {
      label: 'Total Amount Lost',
      value: '₹18,72,000',
      icon: TrendingUp,
      color: 'text-red-400',
      borderColor: 'border-red-500/30'
    },
    {
      label: 'Trace Confidence',
      value: '87%',
      icon: TrendingUp,
      color: 'text-green-400',
      borderColor: 'border-green-500/30'
    },
    {
      label: 'Wallets Identified',
      value: '37',
      icon: Wallet,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30'
    },
    {
      label: 'Clusters Found',
      value: '4',
      icon: Layers,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30'
    }
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className={`card border ${metric.borderColor} hover:border-opacity-70 transition-all duration-200`}
          >
            <div className="flex items-start justify-between">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                {metric.label}
              </span>
              <metric.icon size={16} className={metric.color} />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                {metric.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Network Summary</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-xs text-gray-400">Collectors</span>
              <span className="text-xs font-medium text-white ml-auto">2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span className="text-xs text-gray-400">Mules</span>
              <span className="text-xs font-medium text-white ml-auto">8</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="text-xs text-gray-400">Splitters</span>
              <span className="text-xs font-medium text-white ml-auto">6</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-xs text-gray-400">Consolidators</span>
              <span className="text-xs font-medium text-white ml-auto">3</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-xs text-gray-400">Bridges</span>
              <span className="text-xs font-medium text-white ml-auto">2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              <span className="text-xs text-gray-400">Exit Points</span>
              <span className="text-xs font-medium text-white ml-auto">1</span>
            </div>
          </div>
          <button className="mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors">
            View Network Graph →
          </button>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Recent Activity</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
              <span className="text-xs text-gray-300">Victim → Mule transfer</span>
              <span className="text-xs text-red-400">₹5,00,000</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
              <span className="text-xs text-gray-300">Funds split</span>
              <span className="text-xs text-yellow-400">3 wallets</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
              <span className="text-xs text-gray-300">Exchange interaction</span>
              <span className="text-xs text-blue-400">Detected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard