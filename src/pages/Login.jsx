import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // 1. Import axios
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 2. Send request to backend
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);

      // 3. Store the token and user role securely
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userRole", res.data.user.role); 

      // 4. Navigate based on the role returned by your backend
      if (res.data.user.role === 'admin') {
        navigate("/admin-dashboard");
      } else {
        navigate("/community-dashboard");
      }
    } catch (err) {
      // 5. Handle errors (e.g., wrong password, user not found)
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-73px)] justify-between bg-gray-50">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-[#4A020F] text-center mb-8">SafeReturn Buea</h1>
          
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Email</label>
              <input 
                type="email" 
                required
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Password</label>
              <input 
                type="password" 
                required
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm" 
              />
            </div>

            <Button type="submit" className="w-full">Login →</Button>
          </form>
          
          <p className="text-center text-sm text-slate-600 mt-6">
            Don't have an account? 
            <Link to="/register" className="text-[#6B0317] font-bold hover:underline ml-1">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}