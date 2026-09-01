import React, { useState } from 'react';
import { Bot, Sparkles, Cpu, Zap, ChevronDown, ChevronUp, Settings, Play, Pause, RefreshCw } from 'lucide-react';

const AIAgentsPage = () => {
  const [expandedAgent, setExpandedAgent] = useState('qwen');
  const [isRunning, setIsRunning] = useState(true);

  const agents = [
    {
      id: 'qwen',
      name: 'Qwen',
      type: 'Reasoning Model',
      status: 'Active',
      icon: Bot,
      color: 'text-purple-400',
      bgColor: 'border-purple-500/20',
      description: 'Primary analysis engine for transaction pattern recognition and fraud detection.',
      metrics: { accuracy: 87, speed: '2.3s', requests: 1456 }
    },
    {
      id: 'mistral',
      name: 'Mistral',
      type: 'Alternative Model',
      status: 'Active',
      icon: Sparkles,
      color: 'text-yellow-400',
      bgColor: 'border-yellow-500/20',
      description: 'Secondary verification model providing alternative perspectives on suspicious activity.',
      metrics: { accuracy: 82, speed: '1.8s', requests: 1234 }
    },
    {
      id: 'llama',
      name: 'Llama',
      type: 'Copilot Model',
      status: 'Standby',
      icon: Cpu,
      color: 'text-green-400',
      bgColor: 'border-green-500/20',
      description: 'Investigation copilot providing recommendations and answering investigator queries.',
      metrics: { accuracy: 79, speed: '3.1s', requests: 892 }
    },
    {
      id: 'anomaly',
      name: 'Anomaly Detector',
      type: 'ML Model',
      status: 'Active',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'border-blue-500/20',
      description: 'Machine learning model for detecting unusual transaction patterns and anomalies.',
      metrics: { accuracy: 91, speed: '0.9s', requests: 2156 }
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-300">AI Agents</h2>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
            <RefreshCw size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
            <Settings size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {agents.map((agent) => {
          const Icon = agent.icon;
          const isExpanded = expandedAgent === agent.id;
          
          return (
            <div key={agent.id} className={`card ${agent.bgColor} hover:border-opacity-70 transition-all duration-200`}>
              <div 
                className="flex items-start justify-between cursor-pointer"
                onClick={() => setExpandedAgent(isExpanded ? null : agent.id)}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-navy-900/50 ${agent.bgColor}`}>
                    <Icon size={20} className={agent.color} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300">{agent.name}</h3>
                    <p className="text-xs text-gray-400">{agent.type}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded ${agent.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {agent.status}
                      </span>
                      <span className="text-xs text-gray-500">|</span>
                      <span className="text-xs text-gray-500">{agent.metrics.requests} requests</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsRunning(!isRunning); }}
                    className="text-gray-400 hover:text-white p-1 rounded hover:bg-navy-700"
                  >
                    {isRunning ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                  {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-blue-900/30">
                  <p className="text-xs text-gray-400 leading-relaxed">{agent.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="text-center p-2 bg-navy-900/50 rounded border border-blue-900/20">
                      <span className="text-xs text-gray-400 block">Accuracy</span>
                      <span className="text-sm font-semibold text-white">{agent.metrics.accuracy}%</span>
                    </div>
                    <div className="text-center p-2 bg-navy-900/50 rounded border border-blue-900/20">
                      <span className="text-xs text-gray-400 block">Speed</span>
                      <span className="text-sm font-semibold text-white">{agent.metrics.speed}</span>
                    </div>
                    <div className="text-center p-2 bg-navy-900/50 rounded border border-blue-900/20">
                      <span className="text-xs text-gray-400 block">Status</span>
                      <span className={`text-sm font-semibold ${agent.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {agent.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">View Logs</button>
                    <span className="text-xs text-gray-500">|</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Configure</button>
                    <span className="text-xs text-gray-500">|</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Test</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Agent Comparison */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">AI Agent Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-navy-900/50 rounded border border-blue-900/20">
            <span className="text-xs text-gray-400 block">Qwen vs Mistral</span>
            <span className="text-lg font-semibold text-purple-400">Disagree</span>
            <div className="w-full bg-navy-700 rounded-full h-1.5 mt-1">
              <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: '62%' }}></div>
            </div>
            <span className="text-xs text-gray-500">62% agreement</span>
          </div>
          <div className="text-center p-3 bg-navy-900/50 rounded border border-blue-900/20">
            <span className="text-xs text-gray-400 block">Qwen vs Llama</span>
            <span className="text-lg font-semibold text-green-400">Agree</span>
            <div className="w-full bg-navy-700 rounded-full h-1.5 mt-1">
              <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '88%' }}></div>
            </div>
            <span className="text-xs text-gray-500">88% agreement</span>
          </div>
          <div className="text-center p-3 bg-navy-900/50 rounded border border-blue-900/20">
            <span className="text-xs text-gray-400 block">Mistral vs Llama</span>
            <span className="text-lg font-semibold text-yellow-400">Partial</span>
            <div className="w-full bg-navy-700 rounded-full h-1.5 mt-1">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '71%' }}></div>
            </div>
            <span className="text-xs text-gray-500">71% agreement</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;
