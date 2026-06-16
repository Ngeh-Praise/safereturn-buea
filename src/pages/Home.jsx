import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [cases, setCases] = useState([]);

  // Fetch approved/active cases from the backend
  useEffect(() => {
    const fetchCases = async () => {
      try {
        // Replace with your actual endpoint that returns approved cases
        const res = await axios.get('http://localhost:5000/api/cases/approved');
        setCases(res.data);
      } catch (err) {
        console.error("Error fetching cases:", err);
      }
    };
    fetchCases();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-28 border-b border-gray-100" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="inline-block bg-[#fdf2f2] text-[#7f1d1d] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Community Response Network
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-950 tracking-tight mb-6">
            Help Bring Them Home
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            SafeReturn Buea is a dedicated platform for coordinating humanitarian efforts and community response to missing person incidents. Together, we ensure every voice is heard and every neighbor is accounted for.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#6b111e] hover:bg-[#5a0e19] text-white px-7 py-3.5 rounded font-bold transition-colors shadow-sm text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <Link to="/Reportcase">Report Missing Person</Link>
            </button>
            <button className="flex items-center justify-center bg-white border border-gray-200 hover:border-gray-300 text-gray-800 px-7 py-3.5 rounded font-bold transition-colors shadow-sm text-sm">
              <Link to="/activecases">View Active Cases</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Cases Section */}
      <section className="bg-[#f9fafb] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-2">Recent Cases</h2>
              <p className="text-gray-500 text-sm">Urgent assistance needed for these active reports in the Buea area.</p>
            </div>
            <Link to="/activecases" className="text-[#6b111e] hover:text-[#5a0e19] text-sm font-bold flex items-center gap-1 mt-4 sm:mt-0 transition-colors">
              View All Cases <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {cases.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition duration-200">
                <div>
                  <div className="w-full h-48 rounded-xl mb-4 relative overflow-hidden bg-gray-100">
                    {/* Ensure image path matches your backend upload directory */}
                    <img src={`http://localhost:5000/uploads/${c.photo_url}`} alt={c.full_name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#E51C23] text-white text-[9px] font-black tracking-widest px-2 py-1 rounded uppercase shadow-sm">
                      Missing
                    </span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-lg tracking-tight">{c.full_name}</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1">Age: {c.age} • {c.gender}</p>
                  
                  <div className="mt-4 space-y-2.5 text-xs text-gray-600">
                    <p className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span><strong>Last Seen:</strong> {c.location}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span><strong>Date:</strong> {new Date(c.missing_date).toLocaleDateString()}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6 pt-0">
                  <Link to="/submittip" className="flex-1 bg-[#6b111e] hover:bg-[#5a0e19] text-white py-2 rounded text-xs font-bold transition-colors text-center">
                    Submit Tip
                  </Link>
                  <button className="flex-1 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 py-2 rounded text-xs font-bold transition-colors">
                    Report Info
                  </button>
                </div>
              </div>
            ))}
            
            {/* Action Card */}
            <div className="bg-[#780e22] rounded-2xl text-white p-8 flex flex-col justify-center items-center text-center shadow-sm">
              <div className="bg-white/10 p-4 rounded-full mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Know someone missing?</h3>
              <p className="text-white/80 mb-8 text-xs leading-relaxed max-w-[200px]">Quickly file a report and leverage our community network to help find them. Every minute counts.</p>
              <Link to="/Reportcase" className="bg-white text-[#780e22] w-full py-2.5 rounded font-bold hover:bg-gray-50 transition-colors text-sm text-center">
                Start a New Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Safety Protocol Section ... (rest remains same) */}
      <Footer />
    </div>
  );
}