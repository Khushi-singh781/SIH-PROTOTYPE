import React, { useState } from 'react';
import { Moon, Sun, Monitor, Layout, Eye, RefreshCw, Activity, Bot, Bell, Shield, Save } from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: 'dark',
    sidebarCollapsed: false,
    animations: true,
    graphLabels: true,
    autoRefresh: false,
    liveTrace: true,
    graphDepth: 5,
    qwenEnabled: true,
    mistralEnabled: true,
    llamaEnabled: false,
    riskAlerts: true,
    transactionAlerts: true,
    aiDisagreementAlerts: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-300">Settings</h2>
        <button className="btn-primary">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      {/* Appearance */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Layout size={16} className="text-blue-400" />
          Appearance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button 
            onClick={() => handleChange('theme', 'dark')}
            className={`p-3 rounded-lg border ${settings.theme === 'dark' ? 'border-blue-500/50 bg-blue-500/10' : 'border-blue-900/30 bg-navy-900/50'} hover:border-blue-500/30 transition-colors text-center`}
          >
            <Moon size={20} className="mx-auto mb-1 text-blue-400" />
            <span className="text-xs text-gray-300 block">Dark Mode</span>
          </button>
          <button 
            onClick={() => handleChange('theme', 'light')}
            className={`p-3 rounded-lg border ${settings.theme === 'light' ? 'border-blue-500/50 bg-blue-500/10' : 'border-blue-900/30 bg-navy-900/50'} hover:border-blue-500/30 transition-colors text-center`}
          >
            <Sun size={20} className="mx-auto mb-1 text-yellow-400" />
            <span className="text-xs text-gray-300 block">Light Mode</span>
          </button>
          <button 
            onClick={() => handleChange('theme', 'system')}
            className={`p-3 rounded-lg border ${settings.theme === 'system' ? 'border-blue-500/50 bg-blue-500/10' : 'border-blue-900/30 bg-navy-900/50'} hover:border-blue-500/30 transition-colors text-center`}
          >
            <Monitor size={20} className="mx-auto mb-1 text-gray-400" />
            <span className="text-xs text-gray-300 block">System</span>
          </button>
        </div>
      </div>

      {/* Interface */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Eye size={16} className="text-purple-400" />
          Interface
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Sidebar Collapsed</span>
              <p className="text-xs text-gray-500">Collapse sidebar to icon-only mode</p>
            </div>
            <button 
              onClick={() => handleToggle('sidebarCollapsed')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.sidebarCollapsed ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.sidebarCollapsed ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Animations</span>
              <p className="text-xs text-gray-500">Enable smooth transitions and animations</p>
            </div>
            <button 
              onClick={() => handleToggle('animations')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.animations ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.animations ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Graph Labels</span>
              <p className="text-xs text-gray-500">Show wallet labels on network graphs</p>
            </div>
            <button 
              onClick={() => handleToggle('graphLabels')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.graphLabels ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.graphLabels ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Investigation */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Activity size={16} className="text-green-400" />
          Investigation
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Auto Refresh</span>
              <p className="text-xs text-gray-500">Automatically refresh investigation data</p>
            </div>
            <button 
              onClick={() => handleToggle('autoRefresh')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.autoRefresh ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.autoRefresh ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Live Trace</span>
              <p className="text-xs text-gray-500">Show real-time transaction animations</p>
            </div>
            <button 
              onClick={() => handleToggle('liveTrace')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.liveTrace ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.liveTrace ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div>
            <span className="text-sm text-gray-300 block mb-1">Default Graph Depth</span>
            <select 
              value={settings.graphDepth}
              onChange={(e) => handleChange('graphDepth', parseInt(e.target.value))}
              className="bg-navy-900 border border-blue-900/30 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 w-full"
            >
              <option value={3}>3 hops</option>
              <option value={5}>5 hops</option>
              <option value={10}>10 hops</option>
              <option value={20}>20 hops</option>
            </select>
          </div>
        </div>
      </div>

      {/* AI Agents */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Bot size={16} className="text-purple-400" />
          AI Agents
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Qwen</span>
              <p className="text-xs text-gray-500">Reasoning model for pattern analysis</p>
            </div>
            <button 
              onClick={() => handleToggle('qwenEnabled')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.qwenEnabled ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.qwenEnabled ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Mistral</span>
              <p className="text-xs text-gray-500">Alternative verification model</p>
            </div>
            <button 
              onClick={() => handleToggle('mistralEnabled')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.mistralEnabled ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.mistralEnabled ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Llama</span>
              <p className="text-xs text-gray-500">Copilot for investigator assistance</p>
            </div>
            <button 
              onClick={() => handleToggle('llamaEnabled')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.llamaEnabled ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.llamaEnabled ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Bell size={16} className="text-yellow-400" />
          Notifications
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Risk Alerts</span>
              <p className="text-xs text-gray-500">Notify when risk score changes significantly</p>
            </div>
            <button 
              onClick={() => handleToggle('riskAlerts')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.riskAlerts ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.riskAlerts ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">Transaction Alerts</span>
              <p className="text-xs text-gray-500">Notify of new suspicious transactions</p>
            </div>
            <button 
              onClick={() => handleToggle('transactionAlerts')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.transactionAlerts ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.transactionAlerts ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-300">AI Disagreement Alerts</span>
              <p className="text-xs text-gray-500">Notify when AI models disagree significantly</p>
            </div>
            <button 
              onClick={() => handleToggle('aiDisagreementAlerts')}
              className={`w-10 h-5 rounded-full transition-colors ${settings.aiDisagreementAlerts ? 'bg-blue-600' : 'bg-navy-700'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${settings.aiDisagreementAlerts ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
