import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, User, Phone, MapPin, FileText, 
  Send, Sparkles, Languages, AlertCircle,
  CheckCircle, Clock
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const mockVictimReports = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai, India',
    fraudType: 'Investment Scam',
    amount: 200000,
    platform: 'Web Investment App',
    status: 'Under Review',
    timestamp: '2025-01-15 14:30'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Delhi, India',
    fraudType: 'Phishing',
    amount: 75000,
    platform: 'Fake Banking App',
    status: 'Verified',
    timestamp: '2025-01-15 12:15'
  }
]

const VictimIntake = () => {
  const { language, toggleLanguage, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    description: '',
    fraudType: '',
    amount: '',
    platform: ''
  })
  const [isTranslating, setIsTranslating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      location: '',
      description: '',
      fraudType: '',
      amount: '',
      platform: ''
    })
  }

  const handleTranslate = () => {
    setIsTranslating(true)
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        description: language === 'en' 
          ? 'मुझे एक वेब इन्वेस्टमेन्ट ऐप के जरिए 2 लाख रुपये का फ्रॉड किया गया...'
          : 'I was defrauded of 2 lakh rupees through a web investment app...'
      }))
      setIsTranslating(false)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Victim Intake & i18n</h1>
          <p className="text-sm text-gray-400 mt-1">Multi-language complaint registration</p>
        </div>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-lg hover:bg-accent-blue/20 transition-all"
        >
          <Languages size={16} className="text-accent-blue" />
          <span className="text-sm text-accent-blue">{t('switchLang')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={20} className="text-accent-blue" />
            <h3 className="text-lg font-semibold">Complaint Registration</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t('victimName')}</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg pl-10 pr-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t('mobile')}</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg pl-10 pr-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
                    placeholder="9876543210"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('location')}</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg pl-10 pr-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
                  placeholder="Mumbai, India"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                {language === 'en' ? 'Description (Hindi/English)' : 'विवरण (हिंदी/अंग्रेज़ी)'}
              </label>
              <div className="relative">
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-gray-200 focus:border-accent-blue focus:outline-none min-h-[100px]"
                  placeholder={language === 'en' 
                    ? 'Describe the incident in detail...' 
                    : 'घटना का विवरण दें...'
                  }
                  required
                />
                <button
                  type="button"
                  onClick={handleTranslate}
                  className="absolute bottom-2 right-2 p-1.5 bg-accent-blue/10 rounded-lg hover:bg-accent-blue/20 transition-all"
                >
                  <Sparkles size={14} className="text-accent-blue" />
                </button>
              </div>
              {isTranslating && (
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                  <Clock size={12} className="animate-spin" />
                  <span>Translating...</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t('fraudType')}</label>
                <select
                  value={formData.fraudType}
                  onChange={(e) => setFormData({...formData, fraudType: e.target.value})}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
                  required
                >
                  <option value="">Select type</option>
                  <option value="investment">Investment Scam</option>
                  <option value="phishing">Phishing</option>
                  <option value="ransomware">Ransomware</option>
                  <option value="identity">Identity Theft</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t('amountLost')}</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
                  placeholder="50000"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('platform')}</label>
              <input
                type="text"
                value={formData.platform}
                onChange={(e) => setFormData({...formData, platform: e.target.value})}
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-gray-200 focus:border-accent-blue focus:outline-none"
                placeholder="Web Investment App"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {t('submit')}
            </button>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
              >
                <CheckCircle size={16} className="text-emerald-400" />
                <span className="text-sm text-emerald-400">Report submitted successfully!</span>
              </motion.div>
            )}
          </form>
        </div>

        {/* Recent Reports */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Reports</h3>
              <span className="text-xs text-gray-400">{mockVictimReports.length} total</span>
            </div>
            <div className="space-y-3">
              {mockVictimReports.map((report) => (
                <div key={report.id} className="p-3 bg-dark-bg rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{report.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{report.location}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">₹{report.amount.toLocaleString()}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      report.status === 'Verified' ? 'bg-emerald-500/20 text-emerald-400' :
                      report.status === 'Under Review' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <Clock size={12} />
                    <span>{report.timestamp}</span>
                    <span>•</span>
                    <span>{report.fraudType}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Structuring Panel */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-accent-purple" />
              <h3 className="text-lg font-semibold">AI Translation & Structuring</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-dark-bg rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Original Text</p>
                <p className="text-sm text-gray-300">
                  {language === 'en' 
                    ? 'I was defrauded of 2 lakh rupees through a web investment app...' 
                    : 'मुझे एक वेब इन्वेस्टमेन्ट ऐप के जरिए 2 लाख रुपये का फ्रॉड किया गया...'}
                </p>
              </div>
              <div className="p-3 bg-accent-blue/5 border border-accent-blue/20 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Structured Analysis</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Fraud Type:</span>
                    <span className="text-gray-300 ml-1">Investment Scam</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-gray-300 ml-1">₹2,00,000</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Platform:</span>
                    <span className="text-gray-300 ml-1">Web Investment App</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Status:</span>
                    <span className="text-emerald-400 ml-1">AI Processed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default VictimIntake
