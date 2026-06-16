import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MissingCaseCard from '../components/Missingcasecard';

export default function Dashboard() {
  const [portalCases, setPortalCases] = useState([]);

  // Fetch active cases from the backend on mount
  useEffect(() => {
    const fetchCases = async () => {
      try {
        // Adjust the URL if your backend route is different
        const res = await axios.get('http://localhost:5000/api/cases/active');
        setPortalCases(res.data);
      } catch (err) {
        console.error("Error fetching dashboard cases:", err);
      }
    };
    fetchCases();
  }, []);

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
          {portalCases.map((c) => (
            <MissingCaseCard 
              key={c.id} 
              name={c.full_name}
              age={c.age}
              gender={c.gender}
              location={c.location}
              date={c.missing_date}
              image={c.photo_url ? `http://localhost:5000/uploads/${c.photo_url}` : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
}