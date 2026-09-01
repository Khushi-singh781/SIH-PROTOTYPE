import React, { useState, useEffect } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap
} from 'reactflow'
import 'reactflow/dist/style.css'

const GraphVisualization = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    // Create a more complex graph with confidence colors
    const nodeData = [
      { id: '1', x: 100, y: 200, label: 'Victim', color: '#ef4444' },
      { id: '2', x: 250, y: 100, label: 'Mule', color: '#ec4899' },
      { id: '3', x: 250, y: 300, label: 'Splitter', color: '#8b5cf6' },
      { id: '4', x: 400, y: 50, label: 'Bridge', color: '#f59e0b' },
      { id: '5', x: 400, y: 200, label: 'Collector', color: '#22c55e' },
      { id: '6', x: 400, y: 350, label: 'Consolidator', color: '#14b8a6' },
      { id: '7', x: 550, y: 200, label: 'Exit', color: '#6b7280' },
    ]

    const edgeData = [
      { source: '1', target: '2', animated: true },
      { source: '1', target: '3', animated: true },
      { source: '2', target: '4', animated: true },
      { source: '3', target: '5', animated: true },
      { source: '3', target: '6', animated: true },
      { source: '4', target: '7', animated: true },
      { source: '5', target: '7', animated: true },
      { source: '6', target: '7', animated: true },
    ]

    const newNodes = nodeData.map(node => ({
      id: node.id,
      position: { x: node.x, y: node.y },
      data: { label: node.label },
      style: { 
        background: node.color,
        width: 60,
        height: 60,
        borderRadius: '50%',
        border: `2px solid ${node.color}`,
        color: 'white',
        fontSize: '10px',
        fontWeight: 'bold',
        boxShadow: '0 0 20px rgba(74, 158, 255, 0.2)'
      }
    }))

    const newEdges = edgeData.map(edge => ({
      id: `${edge.source}-${edge.target}`,
      source: edge.source,
      target: edge.target,
      animated: edge.animated,
      style: { stroke: '#4a9eff', strokeWidth: 2 },
      type: 'smoothstep'
    }))

    setNodes(newNodes)
    setEdges(newEdges)
  }, [])

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Network Graph — Confidence Heatmap</h3>
      <div className="h-[500px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          className="bg-navy-900/50 rounded-lg"
        >
          <Background color="#1a2d4a" gap={20} />
          <Controls className="bg-navy-700 border border-blue-900/30 rounded-lg" />
          <MiniMap 
            className="bg-navy-800 border border-blue-900/30 rounded-lg"
            nodeColor={(node) => node.style?.background || '#4a9eff'}
          />
        </ReactFlow>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span className="text-gray-400">Overall Confidence</span>
          <span className="text-white font-medium">72%</span>
          <div className="w-32 bg-navy-700 rounded-full h-1.5">
            <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '72%' }}></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-gray-400">High</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-gray-400">Medium</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="text-gray-400">Low</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default GraphVisualization