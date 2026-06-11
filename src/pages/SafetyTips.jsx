import React from 'react';
import Footer from '../components/Footer';

export default function SafetyTips() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-[#4A020F] mb-2">Safety & Emergency Guide</h1>
        <p className="text-slate-600 mb-10">Essential contacts and protocols for the Buea community.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Emergency Contacts Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-semibold text-red-800">Police (Gendarmerie)</span>
                <a href="tel:117" className="font-mono font-bold text-red-900">117</a>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-semibold text-blue-800">Ambulance/Medical</span>
                <a href="tel:119" className="font-mono font-bold text-blue-900">119</a>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-100 rounded-lg">
                <span className="font-semibold text-slate-800">Fire Brigade</span>
                <a href="tel:118" className="font-mono font-bold text-slate-900">118</a>
              </div>
            </div>
          </div>

          {/* Quick Safety Tips */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Stay Safe Guidelines</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span>•</span> Always share your live location with a trusted contact when traveling alone.</li>
              <li className="flex gap-2"><span>•</span> Avoid isolated areas, especially after dark.</li>
              <li className="flex gap-2"><span>•</span> Keep your phone charged and carry a power bank.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}