import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Network, Users, Activity, Zap, BarChart3, PieChart } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts'

// Mock data for network
const mockNodes = [
  { id: 'victim', label: 'Victim', type: 'victim', confidence: 95 },
  { id: 'splitter1', label: 'Splitter #1', type: 'splitter', confidence: 85 },
  { id: 'splitter2', label: 'Splitter #2', type: 'splitter', confidence: 78 },
  { id: 'mule1', label: 'Mule #1', type: 'mule', confidence: 72 },
  { id: 'mule2', label: 'Mule #2', type: 'mule', confidence: 68 },
  { id: 'mule3', label: 'Mule #3', type: 'mule', confidence: 65 },
  { id: 'bridge1', label: 'Bridge #1', type: 'bridge', confidence: 55 },
  { id: 'bridge2', label: 'Bridge #2', type: 'bridge', confidence: 48 },
  { id: 'consolidator', label: 'Consolidator', type: 'consolidator', confidence: 82 },
  { id: 'exchange', label: 'Exchange', type: 'exchange', confidence: 90 }
]

const mockEdges = [
  { source: 'victim', target: 'splitter1', amount: 250000 },
  { source: 'victim', target: 'splitter2', amount: 250000 },
  { source: 'splitter1', target: 'mule1', amount: 125000 },
  { source: 'splitter1', target: 'mule2', amount: 125000 },
  { source: 'splitter2', target: 'mule2', amount: 100000 },
  { source: 'splitter2', target: 'mule3', amount: 150000 },
  { source: 'mule1', target: 'bridge1', amount: 125000 },
  { source: 'mule2', target: 'bridge1', amount: 225000 },
  { source: 'mule3', target: 'bridge2', amount: 150000 },
  { source: 'bridge1', target: 'consolidator', amount: 350000 },
  { source: 'bridge2', target: 'consolidator', amount: 150000 },
  { source: 'consolidator', target: 'exchange', amount: 500000 }
]

const confidenceData = [
  { name: 'High Confidence', value: 5, color: '#10B981' },
  { name: 'Medium Confidence', value: 3, color: '#F59E0B' },
  { name: 'Low Confidence', value: 3, color: '#EF4444' }
]

const roleDistribution = [
  { name: 'Collectors', value: 2, color: '#EF4444' },
  { name: 'Mules', value: 3, color: '#F59E0B' },
  { name: 'Splitters', value: 2, color: '#8B5CF6' },
  { name: 'Consolidators', value: 1, color: '#10B981' },
  { name: 'Bridges', value: 2, color: '#3B82F6' },
  { name: 'Exit Points', value: 1, color: '#F97316' }
]

const NetworkGraph = () => {
  const [viewMode, setViewMode] = useState('confidence')
  const [selectedNode, setSelectedNode] = useState(null)
  const containerRef = useRef(null)

  const getNodeColor = (node) => {
    if (viewMode === 'confidence') {
      if (node.confidence >= 80) return '#10B981'
      if (node.confidence >= 60) return '#F59E0B'
      return '#EF4444'
    }
    const colors = {
      victim: '#3B82F6',
      splitter: '#8B5CF6',
      mule: '#F59E0B',
      bridge: '#3B82F6',
      consolidator: '#10B981',
      exchange: '#F97316'
    }
    return colors[node.type] || '#6B7280'
  }

  const getNodeSize = (node) => {
    if (node.type === 'victim' || node.type === 'exchange') return 45
    if (node.type === 'consolidator') return 40
    return 30
  }

  const handleNodeClick = (node) => {
    setSelectedNode(node)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Network Graph & Confidence Heatmap</h1>
          <p className="text-sm text-gray-400 mt-1">Interactive visualization of transaction network</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode('confidence')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              viewMode === 'confidence' 
                ? 'bg-accent-blue text-white' 
                : 'bg-dark-bg text-gray-400 hover:text-gray-200'
            }`}
          >
            Confidence Heatmap
          </button>
          <button
            onClick={() => setViewMode('role')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              viewMode === 'role' 
                ? 'bg-accent-blue text-white' 
                : 'bg-dark-bg text-gray-400 hover:text-gray-200'
            }`}
          >
            Criminal Roles
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Graph */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Transaction Network</h3>
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-gray-400" />
              <span className="text-sm text-gray-400">Overall Confidence: 72%</span>
            </div>
          </div>
          
          <div 
            ref={containerRef}
            className="w-full h-[500px] bg-dark-bg rounded-lg relative overflow-hidden"
          >
            {/* SVG Graph */}
            <svg className="w-full h-full">
              {/* Draw edges */}
              {mockEdges.map((edge, idx) => {
                const source = mockNodes.find(n => n.id === edge.source)
                const target = mockNodes.find(n => n.id === edge.target)
                if (!source || !target) return null
                
                // Simple positioning (in real app, use force-directed layout)
                const positions = {
                  victim: { x: 100, y: 250 },
                  splitter1: { x: 250, y: 150 },
                  splitter2: { x: 250, y: 350 },
                  mule1: { x: 400, y: 100 },
                  mule2: { x: 400, y: 250 },
                  mule3: { x: 400, y: 400 },
                  bridge1: { x: 550, y: 200 },
                  bridge2: { x: 550, y: 350 },
                  consolidator: { x: 700, y: 250 },
                  exchange: { x: 850, y: 250 }
                }
                
                const sourcePos = positions[source.id]
                const targetPos = positions[target.id]
                if (!sourcePos || !targetPos) return null
                
                return (
                  <g key={idx}>
                    <line
                      x1={sourcePos.x}
                      y1={sourcePos.y}
                      x2={targetPos.x}
                      y2={targetPos.y}
                      stroke="#1E293B"
                      strokeWidth="2"
                    />
                    <line
                      x1={sourcePos.x}
                      y1={sourcePos.y}
                      x2={targetPos.x}
                      y2={targetPos.y}
                      stroke={getNodeColor(source)}
                      strokeWidth={Math.min(edge.amount / 100000, 6)}
                      opacity="0.6"
                    />
                    <text
                      x={(sourcePos.x + targetPos.x) / 2}
                      y={(sourcePos.y + targetPos.y) / 2 - 10}
                      fill="#6B7280"
                      fontSize="10"
                      textAnchor="middle"
                    >
                      ₹{edge.amount.toLocaleString()}
                    </text>
                  </g>
                )
              })}
              
              {/* Draw nodes */}
              {mockNodes.map((node) => {
                const positions = {
                  victim: { x: 100, y: 250 },
                  splitter1: { x: 250, y: 150 },
                  splitter2: { x: 250, y: 350 },
                  mule1: { x: 400, y: 100 },
                  mule2: { x: 400, y: 250 },
                  mule3: { x: 400, y: 400 },
                  bridge1: { x: 550, y: 200 },
                  bridge2: { x: 550, y: 350 },
                  consolidator: { x: 700, y: 250 },
                  exchange: { x: 850, y: 250 }
                }
                const pos = positions[node.id]
                if (!pos) return null
                const size = getNodeSize(node)
                
                return (
                  <g 
                    key={node.id}
                    onClick={() => handleNodeClick(node)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={size}
                      fill={getNodeColor(node)}
                      opacity="0.8"
                      stroke={selectedNode?.id === node.id ? '#3B82F6' : 'transparent'}
                      strokeWidth="3"
                    />
                    <text
                      x={pos.x}
                      y={pos.y + size + 20}
                      fill="#9CA3AF"
                      fontSize="11"
                      textAnchor="middle"
                    >
                      {node.label}
                    </text>
                    {viewMode === 'confidence' && (
                      <text
                        x={pos.x}
                        y={pos.y}
                        fill="white"
                        fontSize="10"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {node.confidence}%
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-dark-card/90 backdrop-blur-sm rounded-lg p-3 border border-dark-border">
              <div className="text-xs text-gray-400 mb-2">Legend</div>
              {viewMode === 'confidence' ? (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs text-gray-300">High Confidence (80%+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <span className="text-xs text-gray-300">Medium Confidence (60-79%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <span className="text-xs text-gray-300">Low Confidence (&lt;60%)</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <span className="text-xs text-gray-300">Collector</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <span className="text-xs text-gray-300">Mule</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    <span className="text-xs text-gray-300">Splitter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs text-gray-300">Consolidator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent-blue"></div>
                    <span className="text-xs text-gray-300">Bridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    <span className="text-xs text-gray-300">Exit Point</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Selected Node Info */}
          {selectedNode && (
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Selected Node</h3>
              <div className="space-y-2">
                <p className="text-lg font-bold">{selectedNode.label}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: getNodeColor(selectedNode) }}></div>
                  <span className="text-sm text-gray-300">Type: {selectedNode.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-300">Confidence: {selectedNode.confidence}%</span>
                </div>
                <div className="w-full bg-dark-bg rounded-full h-2 mt-2">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: `${selectedNode.confidence}%`,
                      backgroundColor: getNodeColor(selectedNode)
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Confidence Distribution */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Confidence Distribution</h3>
            <ResponsiveContainer width="100%" height={120}>
              <RePieChart>
                <RePieChart.Pie
                  data={confidenceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {confidenceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </RePieChart.Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {confidenceData.map((item) => (
                <div key={item.name} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs text-gray-400">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Role Distribution */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Role Distribution</h3>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={roleDistribution} layout="vertical">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" hide />
                <Tooltip />
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
    </motion.div>
  )
}

export default NetworkGraph
