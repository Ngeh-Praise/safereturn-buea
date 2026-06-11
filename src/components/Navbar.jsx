import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Active Cases', path: '/activecases' },
    { name: 'About', path: '/about' },
    { name: 'Safety Tips', path: '/safety-tips' }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-12 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Platform Branding */}
      <Link to="/" className="text-xl font-bold text-[#7A0C2E] tracking-tight flex items-center gap-2">
        <span className="w-2.5 h-6 bg-[#7A0C2E] rounded-sm block"></span>
        SafeReturn Buea
      </Link>
      
      {/* Navigation Links */}
      <div className="flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition py-1 relative ${
                isActive ? 'text-[#7A0C2E]' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7A0C2E] rounded-full"></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Gateway Controls */}
      <div className="flex gap-4 items-center">
        <Link to="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium px-2 py-1">
          Login
        </Link>
        <Link to="/register">
          <Button variant="primary" className="!py-2 !px-4 text-xs">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
}