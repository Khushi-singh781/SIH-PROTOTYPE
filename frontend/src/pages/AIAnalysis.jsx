import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, TrendingUp, TrendingDown, AlertCircle, CheckCircle, XCircle, BarChart3 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const mockModels = [
  {
    id: 'qwen',
    name: 'Qwen (Reasoning)',
    verdict: 'SUPPORTED',
    confidence: 87,
    color: '#3B82F6',
    details: '14 unrelated sources, 91% funds moved in 8 mins',
    evidence: [
      'Multiple transaction patterns detected',
      'Unusual velocity of funds',
      'Connected to 14 unrelated wallets'
    ],
    timeline: [65, 72, 78, 82, 87]
  },
  {
    id: 'mistral',
    name: 'Mistral (Alternative)',
    verdict: 'UNSUPPORTED',
    confidence: 62,
    color: '#8B5CF6',
    details: 'Could be legitimate exchange aggregator',
    evidence: [
      'Legitimate exchange patterns observed',
      'Possible mixing service usage',
      'No direct scam links found'
    ],
    timeline: [55, 58, 60, 61, 62]
  },
  {
    id: 'llama',
    name: 'Llama (Copilot)',
    verdict: 'RECOMMENDED',
    confidence: 73,
    color: '#10B981',
    details: 'Further investigation required',
    evidence: [
      'Additional verification needed',
      'Human-in-the-loop analysis recommended',
      'Cross-reference with other cases'
    ],
    timeline: [58, 65, 68, 70, 73]
  }
]

const consensusData = [
  { name: 'Qwen', support: 87, color: '#3B82F6' },
  { name: 'Mistral', support: 38, color: '#8B5CF6' },
  { name: 'Llama', support: 73, color: '#10B981' }
]

const AIAnalysis = () => {
  const [selectedModel, setSelectedModel] = useState('qwen')
  const [isComparing, setIsComparing] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Analysis Face-Off</h1>
          <p className="text-sm text-gray-400 mt-1">Real-time comparison of multiple AI models</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <AlertCircle size={16} className="text-amber-400" />
            <span className="text-xs text-amber-400">Disagreement Detected</span>
          </div>
        </div>
      </div>

      {/* Consensus Indicator */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Model Consensus Indicator</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockModels.map((model) => (
            <div 
              key={model.id}
              className={`p-4 rounded-lg border transition-all cursor-pointer ${
                selectedModel === model.id 
                  ? 'border-accent-blue bg-accent-blue/10' 
                  : 'border-dark-border hover:border-dark-border/60'
              }`}
              onClick={() => setSelectedModel(model.id)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{model.name}</span>
                {model.verdict === 'SUPPORTED' && <CheckCircle size={16} className="text-emerald-400" />}
                {model.verdict === 'UNSUPPORTED' && <XCircle size={16} className="text-rose-400" />}
                {model.verdict === 'RECOMMENDED' && <AlertCircle size={16} className="text-amber-400" />}
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Confidence</span>
                  <span className="font-bold" style={{ color: model.color }}>{model.confidence}%</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-2 mt-1">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: `${model.confidence}%`,
                      backgroundColor: model.color
                    }}
                  ></div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                <span className="block">{model.details}</span>
              </div>
              <div className="mt-2 text-xs">
                <span className={`font-semibold ${
                  model.verdict === 'SUPPORTED' ? 'text-emerald-400' :
                  model.verdict === 'UNSUPPORTED' ? 'text-rose-400' :
                  'text-amber-400'
                }`}>
                  {model.verdict}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evidence Timeline */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Evidence Timeline</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockModels[0].timeline.map((_, idx) => ({
              day: `Day ${idx + 1}`,
              qwen: mockModels[0].timeline[idx],
              mistral: mockModels[1].timeline[idx],
              llama: mockModels[2].timeline[idx]
            }))}>
              <XAxis dataKey="day" stroke="#6B7280" fontSize={10} />
              <YAxis stroke="#6B7280" fontSize={10} domain={[40, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="qwen" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="mistral" stroke="#8B5CF6" strokeWidth={2} />
              <Line type="monotone" dataKey="llama" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Evidence Details */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Key Evidence Analysis</h3>
          {mockModels.find(m => m.id === selectedModel)?.evidence.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 mb-3 p-3 bg-dark-bg rounded-lg">
              <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-accent-blue font-bold">{idx + 1}</span>
              </div>
              <div>
                <p className="text-sm text-gray-300">{item}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-16 h-1 bg-dark-border rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${70 + Math.random() * 25}%`,
                        backgroundColor: mockModels.find(m => m.id === selectedModel)?.color
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">Strong</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consensus Bar Chart */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Model Support Comparison</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={consensusData}>
            <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="support" radius={[4, 4, 0, 0]}>
              {consensusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default AIAnalysis
