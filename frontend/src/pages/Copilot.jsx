import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, Send, FileText, Download, 
  Shield, CheckCircle, AlertCircle, Zap,
  User, Bot, Sparkles, Lock, Clock,
  BarChart3, FileDown, Share2
} from 'lucide-react'

const mockMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Welcome to Investigation Copilot! I can help you with wallet analysis, transaction tracing, and report generation. What would you like to explore?',
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    sender: 'user',
    text: 'Investigate Wallet 0x82d9a3f7e1b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8',
    timestamp: new Date().toISOString()
  },
  {
    id: 3,
    sender: 'bot',
    text: 'Analyzing wallet 0x82d9a3f7...\n\nKey Findings:\n• 92% risk score\n• 14 unrelated sources detected\n• 91% funds moved in 8 minutes\n• Connected to 6 splitter wallets\n• Evidence strength: High (92%)',
    timestamp: new Date().toISOString()
  }
]

const suggestedPrompts = [
  'Investigate Wallet 0x82...91',
  'Check Exchange X',
  'Analyze transaction pattern',
  'Generate risk report',
  'Find connections to known scams',
  'Trace fund flow'
]

const Copilot = () => {
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const chatEndRef = useRef(null)

  const handleSend = () => {
    if (!input.trim()) return
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      timestamp: new Date().toISOString()
    }
    setMessages([...messages, newMessage])
    setInput('')
    
    // Simulate bot response
    setIsGenerating(true)
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        text: 'I\'ve analyzed your request. Here\'s what I found:\n\n• Multiple patterns detected\n• 87% confidence in findings\n• Additional verification recommended\n• Cross-referencing with historical cases...',
        timestamp: new Date().toISOString()
      }
      setMessages(prev => [...prev, botResponse])
      setIsGenerating(false)
    }, 1500)
  }

  const handlePromptClick = (prompt) => {
    setInput(prompt)
  }

  const handleGenerateReport = () => {
    setShowReportModal(true)
  }

  const handleDownloadReport = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setShowReportModal(false)
      // In a real app, this would trigger PDF download
      alert('Report downloaded successfully! (SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069)')
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Investigation Copilot & Reports</h1>
          <p className="text-sm text-gray-400 mt-1">AI-powered investigation assistant</p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-accent-blue/80 rounded-lg transition-all"
        >
          <FileDown size={16} className="text-white" />
          <span className="text-white text-sm font-semibold">Generate Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Panel */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bot size={20} className="text-accent-blue" />
            <h3 className="text-lg font-semibold">Copilot Chat</h3>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">Active</span>
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto space-y-4 mb-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  msg.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' 
                    ? 'bg-accent-blue' 
                    : 'bg-accent-purple'
                }`}>
                  {msg.sender === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-accent-blue text-white' 
                    : 'bg-dark-bg text-gray-300'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  <span className="text-[10px] opacity-60 mt-1 block">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-purple flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-dark-bg p-3 rounded-lg">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
              placeholder="Ask about wallets, transactions, or patterns..."
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-2 bg-accent-blue hover:bg-accent-blue/80 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Suggested Prompts */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Suggested Prompts</h3>
            <div className="space-y-2">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(prompt)}
                  className="w-full text-left p-2 bg-dark-bg hover:bg-dark-border rounded-lg text-sm text-gray-300 transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 p-2 bg-dark-bg hover:bg-dark-border rounded-lg text-sm text-gray-300 transition-all">
                <Shield size={16} className="text-accent-blue" />
                <span>Run Security Scan</span>
              </button>
              <button className="w-full flex items-center gap-2 p-2 bg-dark-bg hover:bg-dark-border rounded-lg text-sm text-gray-300 transition-all">
                <BarChart3 size={16} className="text-accent-purple" />
                <span>View Analytics</span>
              </button>
              <button className="w-full flex items-center gap-2 p-2 bg-dark-bg hover:bg-dark-border rounded-lg text-sm text-gray-300 transition-all">
                <FileText size={16} className="text-emerald-400" />
                <span>Export Evidence</span>
              </button>
            </div>
          </div>

          {/* Session Info */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lock size={14} className="text-gray-400" />
              <h3 className="text-sm font-semibold text-gray-400">Session Info</h3>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Session ID</span>
                <span className="font-mono text-gray-300">sess_7f83b165</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Duration</span>
                <span className="text-gray-300">01:23:45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Messages</span>
                <span className="text-gray-300">{messages.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card w-full max-w-2xl p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Investigation Report Generator</h3>
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
                  <span className="font-semibold">Case Summary</span>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-400">Case ID:</span> #2025-1047</p>
                  <p><span className="text-gray-400">Status:</span> <span className="text-rose-400">High Risk</span></p>
                  <p><span className="text-gray-400">Total Lost:</span> ₹18,72,000</p>
                  <p><span className="text-gray-400">Wallets Identified:</span> 37</p>
                </div>
              </div>

              <div className="p-4 bg-dark-bg rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={16} className="text-accent-purple" />
                  <span className="font-semibold">Evidence Correlation Logs</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-emerald-400" />
                    <span>14 unrelated sources verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-emerald-400" />
                    <span>91% funds moved in 8 mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle size={12} className="text-amber-400" />
                    <span>6 splitter wallets identified</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-dark-bg rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={16} className="text-accent-blue" />
                  <span className="font-semibold">AI Face-Off Summary</span>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-400">Qwen:</span> Supported (87% confidence)</p>
                  <p><span className="text-gray-400">Mistral:</span> Unsupported (62% confidence)</p>
                  <p><span className="text-gray-400">Llama:</span> Recommended (73% confidence)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <Shield size={20} className="text-emerald-400" />
                <div className="flex-1">
                  <p className="text-sm text-emerald-400 font-semibold">SHA-256 Integrity Seal</p>
                  <p className="text-xs font-mono text-gray-400">7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</p>
                </div>
                <Lock size={16} className="text-emerald-400" />
              </div>

              <button
                onClick={handleDownloadReport}
                disabled={isGenerating}
                className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold py-2 px-4 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download Report (PDF)
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

export default Copilot
