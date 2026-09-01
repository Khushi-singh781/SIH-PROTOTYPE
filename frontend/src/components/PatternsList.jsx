import React from 'react'
import { AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react'

const PatternsList = () => {
  const patterns = [
    { id: 1, name: 'Rapid Movement', severity: 'high', description: 'Funds moved within 8 minutes', icon: Zap },
    { id: 2, name: 'Fund Splitting', severity: 'medium', description: 'Divided into 6 wallets', icon: AlertTriangle },
    { id: 3, name: 'Mule Pattern', severity: 'high', description: 'Matches known mule behavior', icon: AlertTriangle },
  ]

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Detected Patterns</h3>
      <div className="space-y-2">
        {patterns.map((pattern) => {
          const Icon = pattern.icon
          return (
            <div key={pattern.id} className="flex items-center gap-2 p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
              <Icon size={14} className={pattern.severity === 'high' ? 'text-red-400' : 'text-yellow-400'} />
              <div className="flex-1">
                <span className="text-xs font-medium text-gray-300">{pattern.name}</span>
                <span className="text-[10px] text-gray-500 block">{pattern.description}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded ${
                pattern.severity === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {pattern.severity}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PatternsList