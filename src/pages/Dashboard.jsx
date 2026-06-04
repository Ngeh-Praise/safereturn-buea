import React from 'react';
import MissingCaseCard from '../components/MissingCaseCard';

const mockPortalCases = [
  { id: 3, name: "Ambe Divine", age: 32, gender: "Male", location: "Mile 17, Buea", date: "4h ago", imagePlaceholder: true },
  { id: 4, name: "Bessy Enow", age: 22, gender: "Female", location: "Muea Market", date: "12h ago", imagePlaceholder: true }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-primary text-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold">Every minute counts.</h2>
        <p className="text-sm text-red-100 mt-1 max-w-xl">
          Immediate reporting increases the recovery rate by 80%. Use our streamlined humanitarian protocol to submit reports.
        </p>
      </div>
      
      {/* Feed */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Portal Cases Feed</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPortalCases.map((c) => (
            <MissingCaseCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}