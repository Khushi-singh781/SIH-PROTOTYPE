import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Maximize, Filter, Search } from 'lucide-react';

const NetworkAnalysisPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showLabels, setShowLabels] = useState(true);

  useEffect(() => {
    const initialNodes = [
      { id: 'victim', position: { x: 50, y: 200 }, data: { label: 'Victim' }, style: { background: '#ef4444', width: 70, height: 70, borderRadius: '50%', border: '2px solid #ef4444', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
      { id: 'mule1', position: { x: 200, y: 100 }, data: { label: 'Mule' }, style: { background: '#ec4899', width: 60, height: 60, borderRadius: '50%', border: '2px solid #ec4899', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
      { id: 'mule2', position: { x: 200, y: 300 }, data: { label: 'Mule' }, style: { background: '#ec4899', width: 60, height: 60, borderRadius: '50%', border: '2px solid #ec4899', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
      { id: 'splitter', position: { x: 350, y: 50 }, data: { label: 'Splitter' }, style: { background: '#8b5cf6', width: 60, height: 60, borderRadius: '50%', border: '2px solid #8b5cf6', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
      { id: 'bridge', position: { x: 350, y: 200 }, data: { label: 'Bridge' }, style: { background: '#f59e0b', width: 60, height: 60, borderRadius: '50%', border: '2px solid #f59e0b', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
      { id: 'consolidator', position: { x: 350, y: 350 }, data: { label: 'Consolidator' }, style: { background: '#14b8a6', width: 60, height: 60, borderRadius: '50%', border: '2px solid #14b8a6', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
      { id: 'exchange', position: { x: 500, y: 200 }, data: { label: 'Exchange' }, style: { background: '#3b82f6', width: 70, height: 70, borderRadius: '50%', border: '2px solid #3b82f6', color: 'white', fontSize: '10px', fontWeight: 'bold' } },
    ];

    const initialEdges = [
      { id: 'e1', source: 'victim', target: 'mule1', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e2', source: 'victim', target: 'mule2', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e3', source: 'mule1', target: 'splitter', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e4', source: 'mule2', target: 'bridge', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e5', source: 'splitter', target: 'exchange', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e6', source: 'bridge', target: 'exchange', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e7', source: 'bridge', target: 'consolidator', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
      { id: 'e8', source: 'consolidator', target: 'exchange', animated: true, style: { stroke: '#4a9eff', strokeWidth: 2 } },
    ];

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-300">Network Analysis</h2>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
            <ZoomIn size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
            <ZoomOut size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
            <Maximize size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
            <Filter size={16} />
          </button>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-gray-400 hover:text-white">
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button className="text-gray-400 hover:text-white">
              <RotateCcw size={18} />
            </button>
            <div className="flex items-center gap-1">
              <button className={`px-2 py-1 text-xs rounded ${1 === 1 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>1x</button>
              <button className={`px-2 py-1 text-xs rounded ${2 === 1 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>2x</button>
              <button className={`px-2 py-1 text-xs rounded ${5 === 1 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>5x</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-xs text-gray-400">
              <input type="checkbox" checked={showLabels} onChange={() => setShowLabels(!showLabels)} />
              Show Labels
            </label>
            <span className="badge-ai text-[10px]">Live Trace</span>
          </div>
        </div>

        <div className="h-[500px] relative">
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

          <div className="absolute bottom-2 left-2 bg-navy-800/90 border border-blue-900/30 rounded-lg px-3 py-1.5 flex items-center gap-3">
            <span className="text-xs text-gray-400">Legend:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-[10px] text-gray-400">Verified</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="text-[10px] text-gray-400">Inferred</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span className="text-[10px] text-gray-400">Uncertain</span>
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Amount: <span className="text-white font-medium">₹5,00,000</span></span>
            <span className="text-gray-400">Time: <span className="text-white font-medium">10:00 AM</span></span>
            <span className="text-gray-400">Through: <span className="text-white font-medium">4 hops</span></span>
            <span className="text-gray-400">Final: <span className="text-blue-400 font-medium">Exchange</span></span>
          </div>
        </div>
      </div>

      {/* Wallet Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Confidence Heatmap</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Overall Confidence</span>
              <span className="text-xs text-white font-medium">72%</span>
            </div>
            <div className="w-full bg-navy-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-green-500/10 rounded border border-green-500/20">
                <span className="text-xs text-green-400">High</span>
                <span className="text-xs text-gray-400 block">45%</span>
              </div>
              <div className="text-center p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <span className="text-xs text-yellow-400">Medium</span>
                <span className="text-xs text-gray-400 block">35%</span>
              </div>
              <div className="text-center p-2 bg-red-500/10 rounded border border-red-500/20">
                <span className="text-xs text-red-400">Low</span>
                <span className="text-xs text-gray-400 block">20%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Flow Details</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded border border-blue-900/20">
              <span className="text-xs text-gray-400">Amount</span>
              <span className="text-xs text-white font-medium">₹5,00,000</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded border border-blue-900/20">
              <span className="text-xs text-gray-400">Time</span>
              <span className="text-xs text-white font-medium">10:00 AM</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded border border-blue-900/20">
              <span className="text-xs text-gray-400">Through</span>
              <span className="text-xs text-white font-medium">4 hops</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded border border-blue-900/20">
              <span className="text-xs text-gray-400">Final Destination</span>
              <span className="text-xs text-blue-400 font-medium">Exchange</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkAnalysisPage;
