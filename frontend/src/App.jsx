import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  PlusCircle, 
  FileText, 
  Shield,
  Bell,
  HelpCircle,
  TrendingUp,
  Wallet,
  Layers,
  ChevronRight,
  Play,
  Pause,
  Bot,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Clock,
  Search,
  Download,
  Share2,
  Printer,
  Zap,
  User,
  Settings,
  Network
} from 'lucide-react'

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'investigation', label: 'New Investigation', icon: PlusCircle },
    { id: 'reports', label: 'Reports', icon: FileText },
  ]

  const metrics = [
    { label: 'Total Amount Lost', value: '₹18,72,000', icon: TrendingUp, color: 'text-red-400', borderColor: 'border-red-500/30' },
    { label: 'Trace Confidence', value: '87%', icon: TrendingUp, color: 'text-green-400', borderColor: 'border-green-500/30' },
    { label: 'Wallets Identified', value: '37', icon: Wallet, color: 'text-blue-400', borderColor: 'border-blue-500/30' },
    { label: 'Clusters Found', value: '4', icon: Layers, color: 'text-purple-400', borderColor: 'border-purple-500/30' },
  ]

  const networkRoles = [
    { label: 'Collectors', value: 2, color: 'text-blue-400' },
    { label: 'Mules', value: 8, color: 'text-red-400' },
    { label: 'Splitters', value: 6, color: 'text-purple-400' },
    { label: 'Consolidators', value: 3, color: 'text-green-400' },
    { label: 'Bridges', value: 2, color: 'text-yellow-400' },
    { label: 'Exit Points', value: 1, color: 'text-gray-400' },
  ]

  const recentActivity = [
    { text: 'Victim → Mule transfer', amount: '₹5,00,000', color: 'text-red-400' },
    { text: 'Funds split into 3 wallets', amount: '3 wallets', color: 'text-yellow-400' },
    { text: 'Exchange interaction detected', amount: 'Alert', color: 'text-blue-400' },
  ]

  const reports = [
    { title: 'Case #2025-1047 Investigation Report', date: '2025-09-02', status: 'Completed' },
    { title: 'Network Analysis Summary', date: '2025-09-01', status: 'In Progress' },
    { title: 'Wallet Risk Assessment', date: '2025-08-31', status: 'Completed' },
  ]

  return (
    <div className="flex h-screen bg-navy-900 overflow-hidden">
      {/* Sidebar */}
      <div className="w-[220px] min-w-[220px] bg-navy-800 border-r border-blue-900/30 flex flex-col h-screen overflow-hidden">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-blue-900/30">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-400 flex-shrink-0" />
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">ChainGuard</h1>
              <p className="text-[10px] text-gray-400 tracking-wider">Trace • Analyze • Stop</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                  ${activeTab === item.id 
                    ? 'bg-blue-600/20 text-white border-l-2 border-blue-400 shadow-lg shadow-blue-600/10' 
                    : 'text-gray-400 hover:text-white hover:bg-navy-700'
                  }
                `}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-blue-900/30 p-4">
          <div className="text-xs text-gray-500 space-y-0.5">
            <p className="font-medium text-gray-400">Indian Cyber Crime</p>
            <p className="text-blue-400">Support: 1930</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 bg-navy-800/80 backdrop-blur-sm border-b border-blue-900/30 px-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-medium text-gray-300">
              Case <span className="text-blue-400">#2025-1047</span>
            </h2>
            <span className="text-xs text-gray-500">|</span>
            <span className="text-sm text-gray-400">Fraudulent Investment Scam</span>
            <span className="badge-risk-high ml-2">HIGH RISK</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 hidden md:block">
              Last updated: 02 Sep 2025, 14:32
            </span>
            <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-navy-700">
              <Bell size={18} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-navy-700">
              <HelpCircle size={18} />
            </button>
            <div className="w-px h-6 bg-blue-900/30" />
            <div className="flex items-center gap-2 cursor-pointer hover:bg-navy-700 rounded-lg px-2 py-1.5 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                AK
              </div>
              <span className="text-sm text-gray-300 hidden md:block">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {activeTab === 'dashboard' && (
            <div className="space-y-4">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div 
                      key={index}
                      className={`card border ${metric.borderColor} hover:border-opacity-70 transition-all duration-200`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <Icon size={16} className={metric.color} />
                      </div>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-white tracking-tight">
                          {metric.value}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Network Summary & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="card hover:border-blue-700/50 transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-300">Network Summary</h3>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>

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

                <div className="card hover:border-blue-700/50 transition-all duration-200">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">Recent Activity</h3>
                  <div className="space-y-2">
                    {recentActivity.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                        <span className="text-xs text-gray-300">{item.text}</span>
                        <span className={`text-xs font-medium ${item.color}`}>{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Analysis Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="card border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot size={16} className="text-purple-400" />
                    <h3 className="text-sm font-semibold text-gray-300">AI Analysis — Qwen</h3>
                  </div>
                  <div className="bg-navy-900/50 rounded-lg p-3 border border-purple-500/20">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      "Based on the transaction patterns and network structure, this wallet shows signs of being a mule account. The rapid movement of funds and multiple incoming sources indicate a high probability of fraud."
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
                    <h3 className="text-sm font-semibold text-gray-300">AI Analysis — Mistral</h3>
                  </div>
                  <div className="bg-navy-900/50 rounded-lg p-3 border border-yellow-500/20">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      "I'm not fully convinced this is a mule. The pattern could also be a legitimate exchange or money service. More context is needed before labeling it suspicious."
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

              {/* Risk Score & Evidence */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="card lg:col-span-1">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">Risk Score</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          className="text-navy-700"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="56"
                          cx="64"
                          cy="64"
                        />
                        <circle
                          className="text-red-400"
                          strokeWidth="8"
                          strokeDasharray={351.86}
                          strokeDashoffset={351.86 - (351.86 * 92) / 100}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="56"
                          cx="64"
                          cy="64"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-white">92</span>
                        <span className="text-xs text-red-400">HIGH RISK</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Rapid Movement</span>
                        <span>+15</span>
                      </div>
                      <div className="w-full bg-navy-700 rounded-full h-1.5">
                        <div className="bg-red-400 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Multi-Hop Flow</span>
                        <span>+10</span>
                      </div>
                      <div className="w-full bg-navy-700 rounded-full h-1.5">
                        <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Anomaly Detection</span>
                        <span>+18</span>
                      </div>
                      <div className="w-full bg-navy-700 rounded-full h-1.5">
                        <div className="bg-red-400 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card lg:col-span-2">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Evidence</h3>
                  <div className="space-y-2">
                    {[
                      { icon: AlertTriangle, text: '14 unrelated sources', color: 'text-red-400' },
                      { icon: Clock, text: '91% funds moved in 8 minutes', color: 'text-yellow-400' },
                      { icon: CheckCircle, text: 'Matches known mule pattern', color: 'text-green-400' },
                    ].map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex items-center gap-3 p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                          <Icon size={14} className={item.color} />
                          <span className="text-xs text-gray-300">{item.text}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-3 p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Evidence Strength</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-navy-700 rounded-full h-1.5">
                      <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'investigation' && (
            <div className="space-y-4">
              <div className="card">
                <h2 className="text-lg font-semibold text-gray-300 mb-4">New Investigation</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Start a new investigation by entering wallet addresses or transaction hashes.
                </p>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter wallet address or TX hash..."
                    className="flex-1 bg-navy-900 border border-blue-900/30 rounded-lg px-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  <button className="btn-primary">
                    <Search size={16} />
                    Search
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="card">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 bg-navy-900/50 rounded-lg border border-blue-900/20 hover:border-blue-700/50 transition-colors">
                      <span className="text-xs text-gray-300">Import from CSV</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-navy-900/50 rounded-lg border border-blue-900/20 hover:border-blue-700/50 transition-colors">
                      <span className="text-xs text-gray-300">Connect to Blockchain API</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-navy-900/50 rounded-lg border border-blue-900/20 hover:border-blue-700/50 transition-colors">
                      <span className="text-xs text-gray-300">Upload Transaction Data</span>
                    </button>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">Recent Investigations</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                      <span className="text-xs text-gray-300">#2025-1047 - Investment Scam</span>
                      <span className="text-xs text-blue-400">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                      <span className="text-xs text-gray-300">#2025-1046 - Phishing Attack</span>
                      <span className="text-xs text-gray-400">Closed</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-navy-900/50 rounded-lg border border-blue-900/20">
                      <span className="text-xs text-gray-300">#2025-1045 - Ransomware</span>
                      <span className="text-xs text-yellow-400">Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-300">Reports</h2>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 transition-colors">
                    <Download size={16} />
                  </button>
                  <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 transition-colors">
                    <Share2 size={16} />
                  </button>
                  <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 transition-colors">
                    <Printer size={16} />
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="space-y-2">
                  {reports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-navy-900/50 rounded-lg border border-blue-900/20">
                      <div>
                        <span className="text-sm text-gray-300">{report.title}</span>
                        <span className="text-xs text-gray-500 block">{report.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          report.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {report.status}
                        </span>
                        <button className="text-blue-400 hover:text-blue-300 text-xs">View</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
