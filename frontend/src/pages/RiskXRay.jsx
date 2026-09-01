import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, AlertTriangle, TrendingUp, TrendingDown,
  BarChart3, Activity, Zap, Clock, AlertCircle,
  Gauge, Layers, Brain, Network
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line } from 'recharts'

const riskData = {
  overall: 88,
  breakdown: [
    { name: 'Rapid Movement', score: 15, max: 20, color: '#EF4444' },
    { name: 'Multi-Hop Flow', score: 15, max: 20, color: '#EF4444' },
    { name: 'Fund Splitting', score: 10, max: 15, color: '#F59E0B' },
    { name: 'Anomaly Detection', score: 18, max: 20, color: '#EF4444' },
    { name: 'Graph Risk', score: 14, max: 20, color: '#F59E0B' },
    { name: 'Entity Interaction', score: 8, max: 15, color: '#3B82F6' }
  ],
  multiPerspective: {
    mlAnomaly: 91,
    graphAnalysis: 85,
    ruleEngine: 82
  },
  timeline: [45, 52, 58, 63, 70, 75, 82, 86, 88]
}

const ruleEngineData = [
  { rule: 'Rapid Movement', active: true, score: 15 },
  { rule: 'Multi-Hop Flow', active: true, score: 15 },
  { rule: 'Fund Splitting', active: true, score: 10 },
  { rule: 'Anomaly Detection', active: true, score: 18 },
  { rule: 'Graph Risk', active: true, score: 14 },
  { rule: 'Entity Interaction', active: false, score: 8 }
]

const RiskXRay = () => {
  const [activeMetric, setActiveMetric] = useState('overall')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Risk X-Ray & Rule Engine</h1>
          <p className="text-sm text-gray-400 mt-1">Multi-perspective risk assessment</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-lg">
          <Gauge size={16} className="text-rose-400" />
          <span className="text-xs text-rose-400">CRITICAL RISK</span>
        </div>
      </div>

      {/* Overall Risk Gauge */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Overall Risk Assessment</h3>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-gray-400" />
            <span className="text-sm text-gray-400">Risk Score</span>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-4">
          <div className="relative">
            <svg className="w-32 h-32">
              <circle
                className="text-dark-border"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="64"
                cy="64"
              />
              <circle
                className="text-rose-400"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="64"
                cy="64"
                strokeDasharray={314}
                strokeDashoffset={314 - (riskData.overall / 100) * 314}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold">{riskData.overall}</p>
                <p className="text-xs text-gray-400">/ 100</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Risk Level</span>
                <span className="font-semibold text-rose-400">HIGH</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Assessment Time</span>
                <span className="text-gray-300">{new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Risk Factors</span>
                <span className="text-gray-300">{riskData.breakdown.filter(r => r.score > r.max * 0.7).length} Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Risk Breakdown Histogram</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={riskData.breakdown} layout="vertical">
              <XAxis type="number" domain={[0, 20]} stroke="#6B7280" fontSize={10} />
              <YAxis type="category" dataKey="name" stroke="#6B7280" fontSize={10} />
              <Tooltip />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {riskData.breakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Multi-Perspective Validation */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Multi-Perspective Validation</h3>
          <div className="space-y-4">
            {Object.entries(riskData.multiPerspective).map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-between text-sm">
                  <span className="capitalize text-gray-300">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className={`font-semibold ${
                    value >= 80 ? 'text-emerald-400' :
                    value >= 60 ? 'text-amber-400' :
                    'text-rose-400'
                  }`}>{value}%</span>
                </div>
                <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden mt-1">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${value}%`,
                      backgroundColor: value >= 80 ? '#10B981' : value >= 60 ? '#F59E0B' : '#EF4444'
                    }}
                  ></div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    value >= 80 ? 'bg-emerald-400' :
                    value >= 60 ? 'bg-amber-400' :
                    'bg-rose-400'
                  }`}></div>
                  <span className="text-[10px] text-gray-500">
                    {value >= 80 ? 'Strong validation' : value >= 60 ? 'Moderate validation' : 'Weak validation'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rule Engine Status */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Rule Engine Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ruleEngineData.map((rule, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${
              rule.active 
                ? 'border-accent-blue bg-accent-blue/5' 
                : 'border-dark-border bg-dark-bg opacity-50'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{rule.rule}</span>
                <div className={`w-2 h-2 rounded-full ${rule.active ? 'bg-emerald-400' : 'bg-gray-500'}`}></div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">Score</span>
                <span className={`text-sm font-bold ${
                  rule.score > 12 ? 'text-rose-400' :
                  rule.score > 8 ? 'text-amber-400' :
                  'text-emerald-400'
                }`}>{rule.score}</span>
              </div>
              <div className="w-full h-1 bg-dark-border rounded-full overflow-hidden mt-1">
                <div 
                  className="h-full rounded-full"
                  style={{ 
                    width: `${(rule.score / 20) * 100}%`,
                    backgroundColor: rule.score > 12 ? '#EF4444' : rule.score > 8 ? '#F59E0B' : '#10B981'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Timeline */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Risk Evolution Timeline</h3>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={riskData.timeline.map((value, idx) => ({
            day: `Day ${idx + 1}`,
            risk: value
          }))}>
            <XAxis dataKey="day" stroke="#6B7280" fontSize={10} />
            <YAxis stroke="#6B7280" fontSize={10} domain={[30, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="risk" stroke="#EF4444" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default RiskXRay
