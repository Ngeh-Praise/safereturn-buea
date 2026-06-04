import React from 'react';
import Footer from '../components/Footer';
import MissingCaseCard from '../components/MissingCaseCard';

const mockCases = [
  { id: 1, name: "Amadou Bello", age: 8, gender: "Male", location: "Molyko (near University Road)", date: "2 days ago", imagePlaceholder: true },
  { id: 2, name: "Sarah Ekane", age: 19, gender: "Female", location: "Buea Town Market", date: "5 days ago", imagePlaceholder: true }
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <span className="bg-red-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Community Response Network
        </span>
        <h1 className="text-4xl font-extrabold text-gray-950 mt-4 tracking-tight">Help Bring Them Home</h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
          SafeReturn Buea is a dedicated platform for coordinating humanitarian efforts and community response to missing person incidents.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-black text-gray-950 mb-6 tracking-tight">Recent Active Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCases.map((c) => <MissingCaseCard key={c.id} {...c} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}