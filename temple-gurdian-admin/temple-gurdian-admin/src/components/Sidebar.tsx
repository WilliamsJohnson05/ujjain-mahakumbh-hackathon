import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, Users, Shield } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      icon: AlertTriangle,
      label: 'SOS Alerts',
      description: 'Emergency alerts management'
    },
    {
      path: '/participants',
      icon: Users,
      label: 'Registered Participants',
      description: 'User management system'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-lg border-r border-white/30 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-[#ff7b26] to-[#ffb62f] rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">SafeGuard</h1>
            <p className="text-sm text-gray-600">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                    active
                      ? 'bg-white/80 text-orange-700 border border-orange-200 shadow-sm'
                      : 'text-gray-700 hover:bg-white/60 hover:text-gray-900'
                  }`}
                >
                  <Icon 
                    className={`w-5 h-5 transition-colors ${
                      active ? 'text-orange-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`} 
                  />
                  <div>
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs opacity-75">{item.description}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/20">
        <div className="text-xs text-gray-500 text-center">
          © 2024 SafeGuard Dashboard
        </div>
      </div>
    </div>
  );
};

export default Sidebar;