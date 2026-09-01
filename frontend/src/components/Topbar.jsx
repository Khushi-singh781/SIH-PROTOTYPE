import React from 'react'
import { Bell, HelpCircle } from 'lucide-react'

const Topbar = () => {
  return (
    <header className="h-14 bg-navy-800/80 backdrop-blur-sm border-b border-blue-900/30 px-4 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-medium text-gray-300">
          Case <span className="text-blue-400">#2025-1047</span>
        </h2>
        <span className="text-xs text-gray-500">|</span>
        <span className="text-sm text-gray-400">Fraudulent Investment Scam</span>
        <span className="badge-risk-high ml-2">HIGH RISK</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500 hidden md:block">
          Last updated: 02 Sep 2025, 14:32
        </span>
        
        <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-navy-700">
          <Bell size={18} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-navy-700">
          <HelpCircle size={18} />
        </button>
        
        <div className="w-px h-6 bg-blue-900/30" />
        
        <div className="flex items-center gap-2 cursor-pointer hover:bg-navy-700 rounded-lg px-2 py-1.5 transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
            AK
          </div>
          <span className="text-sm text-gray-300 hidden md:block">Admin</span>
        </div>
      </div>
    </header>
  )
}

export default Topbar