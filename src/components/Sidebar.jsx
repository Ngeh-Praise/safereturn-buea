import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const primaryMenu = [
    { name: 'Overview', path: '/dashboard', icon: '📁' },
    { name: 'Reports', path: '/report-case', icon: '📝' },
    { name: 'Tips', path: '/submit-tip', icon: '💡' },
    { name: 'Tracked Cases', path: '#', icon: '🎯' },
    { name: 'Settings', path: '#', icon: '⚙️' }
  ];

  return (
    <aside className="w-64 bg-[#F8F9FA] border-r border-gray-200 min-h-[calc(100vh-73px)] p-4 flex flex-col justify-between flex-shrink-0">
      <div className="space-y-6">
        {/* Internal Context Header */}
        <div className="px-3 py-2">
          <h2 className="text-sm font-bold text-[#7A0C2E]">SafeReturn Buea</h2>
          <p className="text-[10px] text-gray-400 font-medium tracking-wide mt-0.5">Responder Portal</p>
        </div>

        {/* Dynamic Nav Listing */}
        <nav className="space-y-1">
          {primaryMenu.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition ${
                  isActive 
                    ? 'bg-[#7A0C2E] text-white font-bold shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Action Trigger & Meta Block */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <Link 
          to="/report-case" 
          className="block w-full text-center bg-[#7A0C2E] text-white text-xs font-bold py-3 rounded-xl shadow-sm hover:bg-[#5F0722] transition"
        >
          Report Missing
        </Link>
        
        {/* User Badge Profile */}
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 border border-gray-200">
            <span className="w-full h-full bg-slate-400 block"></span>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900">M. Takang</p>
            <p className="text-[10px] text-gray-400 font-medium">Lead Coordinator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}