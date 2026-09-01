import React, { useState, useEffect } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'

const TransactionGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    const initialNodes = [
      { id: '1', position: { x: 50, y: 150 }, data: { label: 'Victim' }, style: { background: '#ef4444', width: 80, height: 80, borderRadius: '50%', border: '2px solid #ef4444', color: 'white', fontSize: '12px', fontWeight: 'bold' } },
      { id: '2', position: { x: 200, y: 50 }, data: { label: 'Mule' }, style: { background: '#ec4899', width: 70, height: 70, borderRadius: '50%', border: '2px solid #ec4899', color: 'white', fontSize: '12px', fontWeight: 'bold' } },
      { id: '3', position: { x: 200, y: 250 }, data: { label: 'Splitter' }, style: { background: '#8b5cf6', width: 70, height: 70, borderRadius: '50%', border: '2px solid #8b5cf6', color: 'white', fontSize: '12px', fontWeight: 'bold' } },
      { id: '4', position: { x: 350, y: 150 }, data: { label: 'Exchange' }, style: { background: '#3b82f6', width: 70, height: 70, borderRadius: '50%', border: '2px solid #3b82f6', color: 'white', fontSize: '12px', fontWeight: 'bold' } },
    ]

    const initialEdges = [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
    ]

    setNodes(initialNodes)
    setEdges(initialEdges)
  }, [])

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Transaction Flow Graph</h3>
      <div className="h-[400px]">
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
        </ReactFlow>
      </div>
    </div>
  )
}

export default TransactionGraph