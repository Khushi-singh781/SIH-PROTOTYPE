import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, Wallet, Users, Activity, Play, Pause,
  FileDown, Shield, XCircle, Download
} from 'lucide-react'

const mockCaseData = {
  caseId: '#2025-1047',
  status: 'High Risk',
  lastUpdated: new Date().toISOString(),
  metrics: {
    totalLost: 1872000,
    confidence: 87,
    walletsIdentified: 37,
    clustersFound: 4
  },
  networkSummary: {
    collectors: 2,
    mules: 8,
    splitters: 6,
    consolidators: 3,
    bridges: 2,
    exitPoints: 1
  }
}

const mockTransactions = [
  { time: '10:00', from: 'Victim', to: 'Splitter', amount: 500000, type: 'theft' },
  { time: '10:02', from: 'Splitter', to: 'Mule A', amount: 250000, type: 'transfer' },
  { time: '10:04', from: 'Splitter', to: 'Mule B', amount: 250000, type: 'split' },
  { time: '10:08', from: 'Mule A', to: 'Exchange', amount: 250000, type: 'exchange' }
]

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  // Auto-play money flow trace
  React.useEffect(() => {
    let interval = null
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= mockTransactions.length - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 1500)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleExportReport = () => {
    setShowReportModal(true)
  }

  const handleDownloadReport = () => {
    setIsDownloading(true)
    setDownloadProgress(0)
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          
          const reportContent = `
ChainGuard Investigation Report - Dashboard Export
==================================================
Case ID: ${mockCaseData.caseId}
Status: ${mockCaseData.status}
Generated: ${new Date().toLocaleString()}

Metrics Summary
---------------
Total Amount Lost: ₹${mockCaseData.metrics.totalLost.toLocaleString()}
Tracing Confidence: ${mockCaseData.metrics.confidence}%
Wallets Identified: ${mockCaseData.metrics.walletsIdentified}
Clusters Found: ${mockCaseData.metrics.clustersFound}

Network Role Distribution
-------------------------
Collectors: ${mockCaseData.networkSummary.collectors}
Mules: ${mockCaseData.networkSummary.mules}
Splitters: ${mockCaseData.networkSummary.splitters}
Consolidators: ${mockCaseData.networkSummary.consolidators}
Bridges: ${mockCaseData.networkSummary.bridges}
Exit Points: ${mockCaseData.networkSummary.exitPoints}

Transaction Flow
----------------
${mockTransactions.map(tx => `${tx.time}: ${tx.from} → ${tx.to} (₹${tx.amount.toLocaleString()})`).join('\n')}

SHA-256 Integrity Seal
----------------------
7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069

This report is digitally signed and verified.
          `.trim()

          const blob = new Blob([reportContent], { type: 'text/plain' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `Chainguard_Dashboard_Report_${Date.now()}.txt`
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          URL.revokeObjectURL(url)
          
          alert('✅ Dashboard report downloaded successfully!')
          setShowReportModal(false)
          
          return 100
        }
        return prev + 10
      })
    }, 150)
  }

  const handlePlayPause = () => {
    if (currentStep >= mockTransactions.length - 1) {
      setCurrentStep(0)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Case Dashboard</h1>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-gray-400">Case {mockCaseData.caseId}</span>
            <span className="status-badge status-high">High Risk</span>
            <span className="text-xs text-gray-500">
              Updated: {new Date(mockCaseData.lastUpdated).toLocaleString()}
            </span>
          </div>
        </div>
        <button
          onClick={handleExportReport}
          className="flex items-center gap-2 px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-lg text-sm hover:bg-accent-blue/20 transition-all border border-accent-blue/20"
        >
          <FileDown size={16} />
          <span>Export Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={TrendingUp} label="Total Amount Lost" value={`₹${mockCaseData.metrics.totalLost.toLocaleString()}`} color="text-rose-400" />
        <MetricCard icon={Activity} label="Tracing Confidence" value={`${mockCaseData.metrics.confidence}%`} color="text-emerald-400" />
        <MetricCard icon={Wallet} label="Wallets Identified" value={mockCaseData.metrics.walletsIdentified} color="text-accent-blue" />
        <MetricCard icon={Users} label="Clusters Found" value={mockCaseData.metrics.clustersFound} color="text-accent-purple" />
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Network Role Distribution</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <RoleCard label="Collectors" count={2} color="rose" />
          <RoleCard label="Mules" count={8} color="amber" />
          <RoleCard label="Splitters" count={6} color="purple" />
          <RoleCard label="Consolidators" count={3} color="emerald" />
          <RoleCard label="Bridges" count={2} color="blue" />
          <RoleCard label="Exit Points" count={1} color="orange" />
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Money Flow Trace</h3>
          <button
            onClick={handlePlayPause}
            className="p-2 rounded-lg hover:bg-dark-bg transition-all"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between gap-2 overflow-x-auto py-4">
          {mockTransactions.map((tx, idx) => {
            const isActive = idx <= currentStep
            let bgColor = 'bg-dark-border text-gray-500'
            if (isActive) {
              if (tx.type === 'theft') bgColor = 'bg-rose-500/20 text-rose-400'
              else if (tx.type === 'transfer') bgColor = 'bg-amber-500/20 text-amber-400'
              else if (tx.type === 'split') bgColor = 'bg-purple-500/20 text-purple-400'
              else if (tx.type === 'exchange') bgColor = 'bg-emerald-500/20 text-emerald-400'
            }
            
            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center min-w-[80px]">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${bgColor}`}>
                    {tx.amount/1000}k
                  </div>
                  <span className={`text-xs mt-1 transition-all ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>{tx.from}</span>
                  <span className={`text-[10px] transition-all ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>→ {tx.to}</span>
                  <span className={`text-[10px] transition-all ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>{tx.time}</span>
                </div>
                {idx < mockTransactions.length - 1 && (
                  <div className={`flex-1 h-[2px] min-w-[20px] transition-all ${isActive ? 'bg-gradient-to-r from-rose-400 to-emerald-400' : 'bg-dark-border'}`}></div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card w-full max-w-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Export Dashboard Report</h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="p-1 hover:bg-dark-bg rounded-lg transition-all"
              >
                <XCircle size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-dark-bg rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={16} className="text-accent-blue" />
                  <span className="font-semibold">Report Summary</span>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-400">Case:</span> {mockCaseData.caseId}</p>
                  <p><span className="text-gray-400">Status:</span> <span className="text-rose-400">{mockCaseData.status}</span></p>
                  <p><span className="text-gray-400">Total Lost:</span> ₹{mockCaseData.metrics.totalLost.toLocaleString()}</p>
                </div>
              </div>

              {isDownloading && downloadProgress > 0 && downloadProgress < 100 && (
                <div className="w-full">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>Generating report...</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-blue rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                onClick={handleDownloadReport}
                disabled={isDownloading}
                className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold py-2 px-4 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download Report
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

const MetricCard = ({ icon: Icon, label, value, color }) => (
  <div className="glass-card p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <Icon size={24} className={color} />
    </div>
  </div>
)

const RoleCard = ({ label, count, color }) => {
  const colors = {
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  }
  
  return (
    <div className={`p-3 rounded-lg border text-center ${colors[color]}`}>
      <p className="text-lg font-bold">{count}</p>
      <p className="text-xs opacity-80">{label}</p>
    </div>
  )
}

export default Dashboard
