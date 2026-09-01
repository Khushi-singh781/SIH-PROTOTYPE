import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  PlusCircle,
  FolderOpen,
  Network,
  Bot,
  FileText,
  Settings,
  Shield,
  Menu,
  X
} from 'lucide-react'

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navItems = [
    { path: '/home', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/investigation', icon: PlusCircle, label: 'New Investigation' },
    { path: '/reports', icon: FileText, label: 'Reports' },
  ]

  return (
    <>
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50
        h-screen bg-navy-800 border-r border-blue-900/30
        transition-all duration-300 flex flex-col
        ${collapsed ? 'w-16' : 'w-[220px]'}
      `}>
        <div className="flex items-center justify-between px-4 h-16 border-b border-blue-900/30">
          <div className={`flex items-center gap-2 ${collapsed ? 'justify-center w-full' : ''}`}>
            <Shield className="w-8 h-8 text-blue-400 flex-shrink-0" />
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight">ChainGuard</h1>
                <p className="text-[10px] text-gray-400 tracking-wider">Trace • Analyze • Stop</p>
              </div>
            )}
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white lg:block hidden"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600/20 text-white border-l-2 border-blue-400 shadow-lg shadow-blue-600/10' 
                  : 'text-gray-400 hover:text-white hover:bg-navy-700'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : ''}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-blue-900/30 p-3">
          {!collapsed ? (
            <div className="text-xs text-gray-500 space-y-0.5">
              <p className="font-medium text-gray-400">Indian Cyber Crime</p>
              <p className="text-blue-400">Support: 1930</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <span className="text-xs text-gray-500">1930</span>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

export default Sidebar