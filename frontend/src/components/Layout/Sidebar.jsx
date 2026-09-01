import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Network,
  Brain,
  Target,
  FileText,
  Clock,
  Fingerprint,
  Shield,
  MessageSquare,
  LogOut
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const Sidebar = () => {
  const { logout } = useAuth()
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/network', icon: Network, label: 'Network Graph' },
    { path: '/ai-analysis', icon: Brain, label: 'AI Analysis' },
    { path: '/prioritizer', icon: Target, label: 'Prioritizer' },
    { path: '/intake', icon: FileText, label: 'Victim Intake' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/fingerprinting', icon: Fingerprint, label: 'Fingerprinting' },
    { path: '/risk-xray', icon: Shield, label: 'Risk X-Ray' },
    { path: '/copilot', icon: MessageSquare, label: 'Copilot' }
  ]

  return (
    <div className="w-64 bg-dark-card border-r border-dark-border h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-dark-border">
        <h1 className="text-2xl font-bold text-accent-blue">
          Chain<span className="text-accent-purple">Guard</span>
        </h1>
        <p className="text-xs text-gray-500 mt-1">v2.0 · Enterprise</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20' 
                  : 'text-gray-400 hover:bg-dark-bg hover:text-gray-200'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-dark-border">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-gray-400 hover:bg-dark-bg hover:text-gray-200 transition-all"
        >
          <LogOut size={20} />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
