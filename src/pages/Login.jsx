import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Login() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-73px)] justify-between bg-gray-50">
      
      {/* Main Login Form Area */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-[#4A020F] text-center mb-8">SafeReturn Buea</h1>
          
          {/* Removed bg-white, shadow-sm, and border classes to blend with bg-gray-50 */}
          <div className="p-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500 text-sm mb-6">Log in to manage your cases and alerts.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Email or Phone Number</label>
                <input 
                  type="text" 
                  placeholder="name@domain.com" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-1 focus:ring-[#6B0317] outline-none" 
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">Password</label>
                  <a href="#" className="text-xs text-[#6B0317] font-bold hover:underline">Forgot Password?</a>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-1 focus:ring-[#6B0317] outline-none" 
                />
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="rounded border-slate-300 text-[#6B0317] focus:ring-[#6B0317]" 
                />
                <label htmlFor="remember" className="text-sm text-slate-600">
                  Keep me logged in for 30 days
                </label>
              </div>

              <Button type="submit" className="w-full">
                Login →
              </Button>
            </form>
          </div>

          <p className="text-center text-sm text-slate-600 mt-6">
            Don't have an account? 
            <Link to="/Register" className="text-[#6B0317] font-bold hover:underline ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}