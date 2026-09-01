import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Bell, User, Shield, Clock } from 'lucide-react'

const Header = () => {
  const { user } = useAuth()
  
  return (
    <header className="bg-dark-card border-b border-dark-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">System Active</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock size={14} />
            <span>{new Date().toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-accent-blue" />
            <span className="text-sm text-gray-400">{user?.role}</span>
          </div>
          
          <div className="relative">
            <Bell size={20} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[10px] flex items-center justify-center">
              3
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center">
              <User size={16} className="text-accent-blue" />
            </div>
            <div className="text-sm">
              <p className="text-gray-200">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.agency}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
