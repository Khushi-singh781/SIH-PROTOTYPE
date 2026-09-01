import React, { useState } from 'react'
import { Download, Share2, Printer } from 'lucide-react'

const ReportViewer = () => {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-300">Investigation Report</h3>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 transition-colors">
            <Download size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 transition-colors">
            <Share2 size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 transition-colors">
            <Printer size={16} />
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4 border-b border-blue-900/30">
        {['summary', 'transactions', 'network', 'evidence'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-xs font-medium capitalize transition-colors border-b-2 ${
              activeTab === tab
                ? 'text-blue-400 border-blue-400'
                : 'text-gray-400 border-transparent hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="bg-navy-900/50 rounded-lg p-3 border border-blue-900/20">
          <h4 className="text-xs font-medium text-gray-300 mb-2">Case Overview</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Case #2025-1047 - Fraudulent Investment Scam. Total loss: ₹18,72,000. 
            37 wallets identified across 4 clusters. High confidence trace (87%).
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-navy-900/50 rounded-lg p-3 border border-blue-900/20">
            <span className="text-xs text-gray-400">Wallets Analyzed</span>
            <div className="text-lg font-bold text-white mt-1">37</div>
          </div>
          <div className="bg-navy-900/50 rounded-lg p-3 border border-blue-900/20">
            <span className="text-xs text-gray-400">High Risk Wallets</span>
            <div className="text-lg font-bold text-red-400 mt-1">12</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportViewer