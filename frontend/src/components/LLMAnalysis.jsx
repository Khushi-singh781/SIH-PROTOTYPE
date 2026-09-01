import React, { useState } from 'react'
import { Bot, Sparkles, AlertCircle, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react'

const LLMAnalysis = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Bot size={16} className="text-purple-400" />
          AI Analysis
        </h3>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 hover:text-white"
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {expanded && (
        <div className="space-y-3">
          <div className="bg-navy-900/50 rounded-lg p-3 border border-purple-500/20">
            <div className="flex items-start gap-2">
              <Sparkles size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-300 leading-relaxed">
                Based on the transaction patterns and network structure, this wallet shows signs of being a mule account. The rapid movement of funds and multiple incoming sources indicate a high probability of fraud.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Verdict:</span>
              <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                <CheckCircle size={12} /> Supported
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Confidence:</span>
              <span className="text-xs font-medium text-blue-400">87%</span>
            </div>
          </div>

          <div className="bg-navy-900/30 rounded-lg p-2">
            <span className="text-xs text-gray-400">Key Evidence:</span>
            <ul className="text-xs text-gray-300 mt-1 space-y-1 list-disc list-inside">
              <li>14 unrelated sources</li>
              <li>91% funds moved in 8 minutes</li>
              <li>Matches known mule pattern</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default LLMAnalysis