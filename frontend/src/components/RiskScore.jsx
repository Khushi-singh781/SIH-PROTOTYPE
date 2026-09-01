import React from 'react'

const RiskScore = () => {
  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Risk Score</h3>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              className="text-navy-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
            <circle
              className="text-red-400"
              strokeWidth="8"
              strokeDasharray={351.86}
              strokeDashoffset={351.86 - (351.86 * 92) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">92</span>
            <span className="text-xs text-red-400">HIGH RISK</span>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Rapid Movement</span>
            <span>+15</span>
          </div>
          <div className="w-full bg-navy-700 rounded-full h-1.5">
            <div className="bg-red-400 h-1.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Multi-Hop Flow</span>
            <span>+10</span>
          </div>
          <div className="w-full bg-navy-700 rounded-full h-1.5">
            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Anomaly Detection</span>
            <span>+18</span>
          </div>
          <div className="w-full bg-navy-700 rounded-full h-1.5">
            <div className="bg-red-400 h-1.5 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskScore