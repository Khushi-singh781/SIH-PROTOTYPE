import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, Pause, SkipForward, SkipBack, 
  Clock, MapPin, AlertCircle, CheckCircle,
  Zap, TrendingUp, TrendingDown
} from 'lucide-react'

const mockEvents = [
  { 
    time: '10:00:00', 
    event: 'Theft Detected', 
    type: 'theft', 
    wallet: 'Victim Wallet',
    description: 'Initial theft transaction detected',
    amount: 500000,
    severity: 'high'
  },
  { 
    time: '10:02:15', 
    event: 'Transfer Initiated', 
    type: 'transfer', 
    wallet: '0x82...91',
    description: 'Funds transferred to splitter wallet',
    amount: 250000,
    severity: 'medium'
  },
  { 
    time: '10:04:30', 
    event: 'Split Executed', 
    type: 'split', 
    wallet: '0x91...r9',
    description: 'Funds split across 6 wallets',
    amount: 125000,
    severity: 'high'
  },
  { 
    time: '10:06:45', 
    event: 'Mule Activity', 
    type: 'mule', 
    wallet: '0xa1...s9',
    description: 'Multiple transfer through mule wallets',
    amount: 100000,
    severity: 'medium'
  },
  { 
    time: '10:08:20', 
    event: 'Exchange Deposit', 
    type: 'exchange', 
    wallet: 'Exchange X',
    description: 'Final deposit to exchange platform',
    amount: 250000,
    severity: 'high'
  }
]

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval = null
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= mockEvents.length - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 2000 / speed)
    }
    return () => clearInterval(interval)
  }, [isPlaying, speed])

  useEffect(() => {
    setProgress((currentIndex / (mockEvents.length - 1)) * 100)
  }, [currentIndex])

  const handlePlayPause = () => {
    if (currentIndex >= mockEvents.length - 1) {
      setCurrentIndex(0)
    }
    setIsPlaying(!isPlaying)
  }

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(mockEvents.length - 1, prev + 1))
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const newIndex = Math.floor(x * mockEvents.length)
    setCurrentIndex(Math.min(Math.max(0, newIndex), mockEvents.length - 1))
  }

  const getEventColor = (type) => {
    const colors = {
      theft: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      transfer: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      split: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      mule: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      exchange: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    }
    return colors[type] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  const getEventIcon = (type) => {
    const icons = {
      theft: AlertCircle,
      transfer: TrendingUp,
      split: Zap,
      mule: MapPin,
      exchange: CheckCircle
    }
    return icons[type] || AlertCircle
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Investigation Timeline Replay</h1>
          <p className="text-sm text-gray-400 mt-1">Interactive event timeline with playback controls</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-dark-bg rounded-lg text-sm">
            <span className="text-gray-400">Events: </span>
            <span className="text-gray-200">{currentIndex + 1}/{mockEvents.length}</span>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        {/* Timeline Progress Bar */}
        <div 
          className="relative w-full h-2 bg-dark-border rounded-full cursor-pointer mb-6"
          onClick={handleSeek}
        >
          <div 
            className="absolute h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-blue rounded-full shadow-lg"
            style={{ left: `calc(${progress}% - 8px)` }}
          ></div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-lg hover:bg-dark-bg transition-all"
            >
              <SkipBack size={20} className="text-gray-400" />
            </button>
            <button
              onClick={handlePlayPause}
              className="p-3 rounded-full bg-accent-blue hover:bg-accent-blue/80 transition-all"
            >
              {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg hover:bg-dark-bg transition-all"
            >
              <SkipForward size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {[0.5, 1, 2, 5].map(s => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  speed === s 
                    ? 'bg-accent-blue text-white' 
                    : 'bg-dark-bg text-gray-400 hover:text-gray-200'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>

        {/* Current Event Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-lg border ${getEventColor(mockEvents[currentIndex].type)}`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-dark-bg/50">
              {React.createElement(getEventIcon(mockEvents[currentIndex].type), {
                size: 24,
                className: 'text-current'
              })}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{mockEvents[currentIndex].event}</h3>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-400">{mockEvents[currentIndex].time}</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-1">{mockEvents[currentIndex].description}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">Wallet:</span>
                  <span className="text-xs font-mono">{mockEvents[currentIndex].wallet}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">Amount:</span>
                  <span className="text-xs font-bold">₹{mockEvents[currentIndex].amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">Severity:</span>
                  <span className={`text-xs font-semibold ${
                    mockEvents[currentIndex].severity === 'high' ? 'text-rose-400' :
                    mockEvents[currentIndex].severity === 'medium' ? 'text-amber-400' :
                    'text-emerald-400'
                  }`}>
                    {mockEvents[currentIndex].severity.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Nodes */}
        <div className="mt-6 flex items-center justify-between gap-2 overflow-x-auto py-4">
          {mockEvents.map((event, idx) => {
            const isActive = idx === currentIndex
            const isPast = idx < currentIndex
            const Icon = getEventIcon(event.type)
            
            return (
              <div key={idx} className="flex flex-col items-center min-w-[80px]">
                <button
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isActive 
                      ? 'bg-accent-blue text-white scale-110 shadow-lg' 
                      : isPast 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-dark-bg text-gray-400 hover:bg-dark-border'
                  }`}
                >
                  <Icon size={16} />
                </button>
                <span className={`text-[10px] mt-1 ${
                  isActive ? 'text-accent-blue font-semibold' : 'text-gray-500'
                }`}>
                  {event.time.slice(0, 5)}
                </span>
                <span className={`text-[8px] text-gray-500 truncate max-w-[60px]`}>
                  {event.event.split(' ')[0]}
                </span>
                {idx < mockEvents.length - 1 && (
                  <div className={`h-[2px] w-8 ${
                    isPast ? 'bg-emerald-400' : 'bg-dark-border'
                  }`}></div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mini Graph */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Transaction Flow Overview</h3>
        <div className="h-[100px] flex items-center justify-between gap-2">
          {mockEvents.map((event, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div 
                className={`w-full h-12 rounded-t-lg transition-all ${
                  idx <= currentIndex ? 'bg-accent-blue' : 'bg-dark-border'
                }`}
                style={{ 
                  height: `${(event.amount / 500000) * 80 + 20}px`,
                  opacity: idx <= currentIndex ? 1 : 0.3
                }}
              ></div>
              <span className="text-[8px] text-gray-500 mt-1">{event.time.slice(0, 5)}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Timeline
