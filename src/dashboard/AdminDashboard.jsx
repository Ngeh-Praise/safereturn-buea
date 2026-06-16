import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  LayoutDashboard, 
  FileText, 
  Lightbulb, 
  MapPin, 
  Settings, 
  User, 
  Check, 
  X, 
  Eye, 
  Send 
} from 'lucide-react';

export default function AdminDashboard() {
  const [reports, setReports] = useState([]);

  // Load pending reports when the component mounts
  useEffect(() => {
    fetchPendingReports();
  }, []);

  const fetchPendingReports = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/cases/pending', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReports(res.data);
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      // This calls your approveCase controller, which handles DB update + SMS broadcast
      await axios.patch(`http://localhost:5000/api/cases/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Refresh the table after successful approval
      fetchPendingReports();
    } catch (err) {
      console.error("Approval Error:", err);
      alert("Failed to approve case.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-[#4A020F] text-xl mb-8">SafeReturn Buea</h2>
          <nav className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-bold text-[#4A020F] bg-red-50 p-3 rounded-lg">
              <LayoutDashboard size={20} /> Overview
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-lg">
              <FileText size={20} /> Reports
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-lg">
              <Lightbulb size={20} /> Tips
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-lg">
              <MapPin size={20} /> Tracked Cases
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 p-3 hover:bg-gray-50 rounded-lg">
              <Settings size={20} /> Settings
            </div>
          </nav>
        </div>
        
        <div className="mt-auto">
          <button className="w-full bg-[#4A020F] text-white py-3 rounded-lg text-sm font-bold mb-6">
            <Link to="/Reportcase">Report Missing</Link>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-slate-500">Chief Moderator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Moderation Dashboard</h1>
          <p className="text-slate-500 text-sm">Review and approve incoming reports for the Buea region.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'PENDING APPROVAL', val: reports.length },
            { label: 'ACTIVE ALERTS', val: '08' },
            { label: 'VERIFIED FINDS', val: '152' },
            { label: 'SMS SUCCESS RATE', val: '98.2%' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900">{stat.val}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Table Section */}
          <div className="col-span-2 bg-white rounded-xl border shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-slate-900">Pending Reports</h2>
              <span className="bg-[#4A020F] text-white text-[10px] px-3 py-1 rounded font-bold uppercase tracking-wider">Urgent Review</span>
            </div>
            
            <table className="w-full text-left text-sm">
              <thead className="text-slate-400 text-xs uppercase">
                <tr><th className="pb-4">Person Name</th><th className="pb-4">Date Reported</th><th className="pb-4">Actions</th></tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="py-4 font-semibold text-slate-800">{r.full_name}</td>
                    <td className="py-4 text-slate-600">{new Date(r.missing_date).toLocaleDateString()}</td>
                    <td className="py-4 flex gap-4 text-slate-400">
                      <Check 
                        size={18} 
                        className="hover:text-green-600 cursor-pointer" 
                        onClick={() => handleApprove(r.id)} 
                      />
                      <X size={18} className="hover:text-red-600 cursor-pointer" />
                      <Eye size={18} className="hover:text-blue-600 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Alert Engine Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Send size={18} className="text-[#4A020F]" /> SMS Alert Engine
              </h3>
              <select className="w-full border border-slate-300 rounded-lg p-3 text-sm mb-4">
                <option>5km - Central Buea</option>
              </select>
              <textarea className="w-full border border-slate-300 rounded-lg p-3 text-sm h-24 mb-4" placeholder="Alert Content..."></textarea>
              <button className="w-full bg-[#4A020F] text-white font-bold py-3 rounded-lg text-sm hover:bg-[#33010A] transition">
                Trigger Alert
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}