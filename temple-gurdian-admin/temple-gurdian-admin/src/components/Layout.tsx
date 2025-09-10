import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0 hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay - For future mobile menu implementation */}
      <div className="lg:hidden">
        {/* Mobile navigation would go here */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white/90 backdrop-blur-sm shadow-sm border-b border-white/20 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-[#ff7b26] to-[#ffb62f] rounded-lg">
              <div className="w-6 h-6 bg-white/90 rounded"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">SafeGuard Dashboard</h1>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;