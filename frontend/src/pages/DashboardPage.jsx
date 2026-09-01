import React, { useState } from 'react';
import { TrendingUp, Wallet, Layers, ChevronRight, Bot, Sparkles, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = [
    { label: 'Total Amount Lost', value: '₹18,72,000', icon: TrendingUp, color: 'text-red-400', borderColor: 'border-red-500/30' },
    { label: 'Trace Confidence', value: '87%', icon: TrendingUp, color: 'text-green-400', borderColor: 'border-green-500/30' },
    { label: 'Wallets Identified', value: '37', icon: Wallet, color: 'text-blue-400', borderColor: 'border-blue-500/30' },
    { label: 'Clusters Found', value: '4', icon: Layers, color: 'text-purple-400', borderColor: 'border-purple-500/30' },
  ];

  const networkRoles = [
    { label: 'Collectors', value: 2, color: 'text-blue-400' },
    { label: 'Mules', value: 8, color: 'text-red-400' },
    { label: 'Splitters', value: 6, color: 'text-purple-400' },
    { label: 'Consolidators', value: 3, color: 'text-green-400' },
    { label: 'Bridges', value: 2, color: 'text-yellow-400' },
    { label: 'Exit Points', value: 1, color: 'text-gray-400' },
  ];

  return (
    <div className="space-y-4">
      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className={`card border ${metric.borderColor} hover:border-opacity-70 transition-all duration-200`}>
              <div className="flex items-start justify-between">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{metric.label}</span>
                <Icon size={16} className={metric.color} />
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold text-white tracking-tight">{metric.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Network Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Network Summary</h3>
          <div className="grid grid-cols-2 gap-2">
            {networkRoles.map((role, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-${role.color.split('-')[1]}-400`}></span>
                  {role.label}
                </span>
                <span className="text-xs font-medium text-white">{role.value}</span>
              </div>
            ))}
          </div>
          <button className="mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-medium">
            View Network Graph <ChevronRight size={14} />
          </button>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold text-gray-300 mb-3">Recent Activity</h3>
          <div className="space-y-2">
            {[
              { text: 'Victim → Mule transfer', amount: '₹5,00,000', color: 'text-red-400' },
              { text: 'Funds split into 3 wallets', amount: '3 wallets', color: 'text-yellow-400' },
              { text: 'Exchange interaction detected', amount: 'Alert', color: 'text-blue-400' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                <span className="text-xs text-gray-300">{item.text}</span>
                <span className={`text-xs font-medium ${item.color}`}>{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card border-purple-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Bot size={16} className="text-purple-400" />
            <h3 className="text-sm font-semibold text-gray-300">Qwen Analysis</h3>
          </div>
          <div className="bg-navy-900/50 rounded-lg p-3 border border-purple-500/20">
            <p className="text-xs text-gray-300 leading-relaxed">
              "Based on the transaction patterns and network structure, this wallet shows signs of being a mule account."
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-green-400 flex items-center gap-1">
              <CheckCircle size={12} /> Supported
            </span>
            <span className="text-xs text-blue-400">Confidence: 87%</span>
          </div>
        </div>

        <div className="card border-yellow-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-yellow-400" />
            <h3 className="text-sm font-semibold text-gray-300">Mistral Analysis</h3>
          </div>
          <div className="bg-navy-900/50 rounded-lg p-3 border border-yellow-500/20">
            <p className="text-xs text-gray-300 leading-relaxed">
              "I'm not fully convinced this is a mule. The pattern could also be a legitimate exchange."
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-yellow-400 flex items-center gap-1">
              <AlertTriangle size={12} /> Unsupported
            </span>
            <span className="text-xs text-yellow-400">Confidence: 62%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
