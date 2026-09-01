import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, AlertCircle, CheckCircle, XCircle
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Cell, PieChart, Pie } from 'recharts'

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

// Confidence Distribution Data
const confidenceDistribution = [
  { name: 'High Confidence', value: 5, color: '#10B981' },
  { name: 'Medium Confidence', value: 3, color: '#F59E0B' },
  { name: 'Low Confidence', value: 3, color: '#EF4444' }
]

// Role Distribution Data
const roleDistribution = [
  { name: 'Collectors', value: 2, color: '#EF4444' },
  { name: 'Mules', value: 8, color: '#F59E0B' },
  { name: 'Splitters', value: 6, color: '#8B5CF6' },
  { name: 'Consolidators', value: 3, color: '#10B981' },
  { name: 'Bridges', value: 2, color: '#3B82F6' },
  { name: 'Exit Points', value: 1, color: '#F97316' }
]

const consensusData = [
  { name: 'Qwen', support: 87, color: '#3B82F6' },
  { name: 'Mistral', support: 38, color: '#8B5CF6' },
  { name: 'Llama', support: 73, color: '#10B981' }
]

const AIAnalysis = () => {
  const [selectedModel, setSelectedModel] = useState('qwen')

  const getTimelineData = () => {
    return mockModels[0].timeline.map((_, idx) => ({
      day: `Day ${idx + 1}`,
      qwen: mockModels[0].timeline[idx],
      mistral: mockModels[1].timeline[idx],
      llama: mockModels[2].timeline[idx]
    }))
  }

  const getConsensusLevel = () => {
    const avg = consensusData.reduce((sum, d) => sum + d.support, 0) / consensusData.length
    if (avg >= 70) return { level: 'Strong Consensus', color: 'text-emerald-400' }
    if (avg >= 50) return { level: 'Moderate Consensus', color: 'text-amber-400' }
    return { level: 'Low Consensus', color: 'text-rose-400' }
  }

  const consensus = getConsensusLevel()

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
        <div className={`flex items-center gap-2 px-3 py-1 border rounded-lg ${consensus.color}`}>
          <AlertCircle size={16} className={consensus.color} />
          <span className={`text-xs ${consensus.color}`}>Consensus: {consensus.level}</span>
        </div>
      </div>

      {/* Model Cards */}
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

      {/* Confidence Distribution & Role Distribution Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Confidence Distribution */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Confidence Distribution</h3>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={confidenceDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {confidenceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {confidenceDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Role Distribution */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Role Distribution</h3>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roleDistribution} layout="vertical" margin={{ left: 80 }}>
                <XAxis type="number" stroke="#6B7280" fontSize={10} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke="#6B7280" 
                  fontSize={10}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B' }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {roleDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Evidence Timeline & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evidence Timeline */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Evidence Timeline</h3>
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getTimelineData()}>
                <XAxis dataKey="day" stroke="#6B7280" fontSize={10} />
                <YAxis stroke="#6B7280" fontSize={10} domain={[40, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B' }} />
                <Line type="monotone" dataKey="qwen" stroke="#3B82F6" strokeWidth={2} name="Qwen" />
                <Line type="monotone" dataKey="mistral" stroke="#8B5CF6" strokeWidth={2} name="Mistral" />
                <Line type="monotone" dataKey="llama" stroke="#10B981" strokeWidth={2} name="Llama" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model Support Comparison */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Model Support Comparison</h3>
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={consensusData}>
                <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B' }} />
                <Bar dataKey="support" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#9CA3AF', fontSize: 12 }}>
                  {consensusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AIAnalysis
