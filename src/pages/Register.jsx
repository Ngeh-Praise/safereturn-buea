import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // 1. Import axios
import Footer from '../components/Footer';

export default function Register() {
  const [formData, setFormData] = useState({ 
    full_name: '', 
    email: '', 
    phone_number: '', 
    password: '', 
    confirmPassword: '' 
  });
  
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // 2. Send registration data to backend
      // Note: We only send the 4 fields the backend expects
      await axios.post('http://localhost:5000/api/auth/register', {
        full_name: formData.full_name,
        email: formData.email,
        phone_number: formData.phone_number,
        password: formData.password
      });

      alert("Registration successful! You can now login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#E8EAED] text-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,227,231,0.9),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(120,18,45,0.12),transparent_20%)]" />
      <div className="relative flex min-h-screen flex-col">
        <div className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl rounded-[32px] border border-white/80 bg-white/95 shadow-[0_30px_80px_rgba(30,20,40,0.12)] backdrop-blur-xl overflow-hidden">
            <div className="bg-white/90 px-8 py-10 sm:px-14 sm:py-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7A0C2E]">SafeReturn Buea</p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Join the community network for humanitarian safety.</h1>
            </div>

            <div className="px-6 pb-10 sm:px-10 sm:pb-12">
              <div className="mx-auto max-w-3xl rounded-[28px] border border-[#E7D8DD] bg-[#FEFBFB] p-8 shadow-sm sm:p-10">
                <form className="space-y-6" onSubmit={handleRegister}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#5A262F] mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your legal name"
                        className="w-full rounded-2xl border border-[#E5D8DB] bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#7A0C2E] focus:outline-none"
                        onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#5A262F] mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="w-full rounded-2xl border border-[#E5D8DB] bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#7A0C2E] focus:outline-none"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#5A262F] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+237 ..."
                        className="w-full rounded-2xl border border-[#E5D8DB] bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#7A0C2E] focus:outline-none"
                        onChange={(e) => setFormData({...formData, phone_number: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#5A262F] mb-2">Password</label>
                      <input
                        type="password"
                        required
                        placeholder="Min. 8 characters"
                        className="w-full rounded-2xl border border-[#E5D8DB] bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#7A0C2E] focus:outline-none"
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#5A262F] mb-2">Confirm Password</label>
                      <input
                        type="password"
                        required
                        placeholder="Re-enter password"
                        className="w-full rounded-2xl border border-[#E5D8DB] bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#7A0C2E] focus:outline-none"
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-[#7A0C2E] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition hover:bg-[#64051f]"
                    >
                      Register Account
                    </button>
                    <p className="text-center text-sm text-slate-600">
                      Already have an account? <Link to="/login" className="font-semibold text-[#7A0C2E] hover:underline">Back to Login</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}