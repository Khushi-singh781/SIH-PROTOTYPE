import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  X,
  Bell,
  HelpCircle,
  Moon,
  Sun,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Search
} from 'lucide-react';

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedCollapsed = localStorage.getItem('sidebarCollapsed');
    if (savedCollapsed !== null) {
      setCollapsed(JSON.parse(savedCollapsed));
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/cases', label: 'Cases', icon: FolderOpen },
    { path: '/network-analysis', label: 'Network Analysis', icon: Network },
    { path: '/ai-agents', label: 'AI Agents', icon: Bot },
    { path: '/reports', label: 'Reports', icon: FileText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-navy-900 overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        fixed lg:relative z-50 h-screen bg-navy-800 border-r border-blue-900/30
        transition-all duration-300 flex flex-col
        ${collapsed ? 'w-16' : 'w-[220px]'}
        ${showMobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between px-4 h-16 border-b border-blue-900/30 flex-shrink-0">
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
            onClick={() => setShowMobileMenu(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setShowMobileMenu(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-600/20 text-white border-l-2 border-blue-400 shadow-lg shadow-blue-600/10' 
                    : 'text-gray-400 hover:text-white hover:bg-navy-700'
                  }
                  ${collapsed ? 'justify-center' : ''}
                `}
                title={collapsed ? item.label : ''}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-blue-900/30 p-3 flex-shrink-0">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-navy-800/80 backdrop-blur-sm border-b border-blue-900/30 px-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu size={20} />
            </button>
            <button 
              onClick={toggleSidebar}
              className="hidden lg:block text-gray-400 hover:text-white"
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            
            <h2 className="text-sm font-medium text-gray-300">
              Case <span className="text-blue-400">#2025-1047</span>
            </h2>
            <span className="text-xs text-gray-500 hidden sm:inline">|</span>
            <span className="text-sm text-gray-400 hidden sm:inline">Fraudulent Investment Scam</span>
            <span className="badge-risk-high ml-2">HIGH RISK</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 hidden md:block">
              <Search size={18} />
            </button>
            <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700">
              <Bell size={18} />
            </button>
            <button className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-navy-700 hidden md:block">
              <HelpCircle size={18} />
            </button>
            <div className="w-px h-6 bg-blue-900/30 hidden md:block" />
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
