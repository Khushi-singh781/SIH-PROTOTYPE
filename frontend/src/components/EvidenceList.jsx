import React from 'react'
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react'

const EvidenceList = () => {
  const evidence = [
    { id: 1, type: 'transaction', description: 'Large transfer to unknown wallet', status: 'high', time: '10:02 AM' },
    { id: 2, type: 'pattern', description: 'Multiple small deposits detected', status: 'medium', time: '10:04 AM' },
    { id: 3, type: 'entity', description: 'Connected to known scam exchange', status: 'high', time: '10:08 AM' },
  ]

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Evidence List</h3>
      <div className="space-y-2">
        {evidence.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
            <div className="flex items-center gap-2">
              {item.status === 'high' ? (
                <AlertTriangle size={14} className="text-red-400" />
              ) : (
                <Clock size={14} className="text-yellow-400" />
              )}
              <span className="text-xs text-gray-300">{item.description}</span>
            </div>
            <span className="text-[10px] text-gray-500">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EvidenceList