import React from 'react';
import { Bell, User, MapPin } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Header Overview */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <div className="flex items-center gap-4">
          <Bell className="text-slate-500" />
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
            <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden">
                {/* Profile placeholder */}
            </div>
            <div className="text-sm">
                <p className="font-bold">M. Takang</p>
                <p className="text-xs text-slate-500">Lead Coordinator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero & Tip Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#7A0C2E] p-8 rounded-2xl text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Every minute counts.</h2>
            <p className="opacity-90 max-w-md">Immediate reporting increases the recovery rate by 80%. Use our streamlined humanitarian protocol to submit reports.</p>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-[#7A0C2E] px-6 py-2 rounded-lg font-bold">Report Missing Person</button>
            <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-bold">Submit Anonymously</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="text-[#7A0C2E] mb-2">💡</div>
          <h3 className="font-bold text-lg">Community Tip?</h3>
          <p className="text-sm text-slate-600 mb-4">If you have spotted someone or have information about a safe zone, share it with our response team.</p>
          <button className="w-full border border-slate-200 py-2 rounded-lg font-bold text-slate-700 hover:bg-gray-50">Submit Tip</button>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-3 gap-6">
        {[
            { label: 'ACTIVE CASES', val: '24', badge: '+3 today' },
            { label: 'FOUND & SAFE', val: '142', badge: 'Last 30 days' },
            { label: 'TIPS VERIFIED', val: '89%', icon: true }
        ].map(item => (
            <div key={item.label} className="bg-white p-6 rounded-2xl border shadow-sm">
                <p className="text-xs font-bold text-slate-500 mb-1">{item.label}</p>
                <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold">{item.val}</h3>
                    {item.badge && <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded">{item.badge}</span>}
                </div>
            </div>
        ))}
      </div>

      {/* Recent Active Cases */}
      <div>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Recent Active Cases</h3>
            <button className="text-[#7A0C2E] font-bold text-sm">View All</button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            {['Ambe Divine', 'Bessy Enow'].map(name => (
                <div key={name} className="bg-white rounded-2xl border overflow-hidden shadow-sm">
                    <div className="h-40 bg-slate-300 relative">
                        <span className="absolute top-2 right-2 bg-[#4A020F] text-white text-xs px-2 py-1 rounded">MISSING</span>
                    </div>
                    <div className="p-4">
                        <h4 className="font-bold text-lg">{name}</h4>
                        <p className="text-sm text-slate-500 mb-4">Last seen: Mile 17, Buea • 4h ago</p>
                        <div className="flex justify-between items-center border-t pt-3">
                            <span className="flex items-center gap-1 text-sm text-slate-600"><MapPin size={14}/> Mile 17</span>
                            <button className="text-sm font-bold text-[#7A0C2E]">Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}