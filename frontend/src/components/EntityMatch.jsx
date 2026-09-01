import React, { useState } from 'react'
import { Search, User, Wallet } from 'lucide-react'

const EntityMatch = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const entities = [
    { id: 1, address: '0x82f3...a91', role: 'Victim', confidence: 95 },
    { id: 2, address: '0x41ab...672', role: 'Mule', confidence: 87 },
    { id: 3, address: '0x9a21...3f4', role: 'Splitter', confidence: 72 },
    { id: 4, address: '0x7c91...a44', role: 'Exchange', confidence: 68 },
  ]

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Entity Matching</h3>
      
      <div className="relative mb-3">
        <Search size={14} className="absolute left-3 top-2.5 text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-dark w-full pl-9"
          placeholder="Search entities..."
        />
      </div>

      <div className="space-y-2">
        {entities.map((entity) => (
          <div key={entity.id} className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
            <div className="flex items-center gap-2">
              <Wallet size={14} className="text-blue-400" />
              <span className="text-xs font-mono text-gray-300">{entity.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-0.5 rounded ${
                entity.role === 'Victim' ? 'bg-red-500/20 text-red-400' :
                entity.role === 'Mule' ? 'bg-pink-500/20 text-pink-400' :
                entity.role === 'Splitter' ? 'bg-purple-500/20 text-purple-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {entity.role}
              </span>
              <span className="text-xs text-gray-400">{entity.confidence}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EntityMatch