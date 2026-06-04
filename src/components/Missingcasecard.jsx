import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function MissingCaseCard({ id, name, age, gender, location, date, imagePlaceholder }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition duration-200">
      <div>
        {/* Asset Frame featuring absolute status tracking text */}
        <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-50">
          {imagePlaceholder ? (
            <div className="text-3xl text-gray-300">👤</div>
          ) : (
            <div className="text-xs text-gray-400 font-medium">No Photo Available</div>
          )}
          
          {/* Visual Red Tag Banner */}
          <span className="absolute top-3 left-3 bg-[#E51C23] text-white text-[9px] font-black tracking-widest px-2 py-0.5 rounded uppercase shadow-sm">
            Missing
          </span>
        </div>

        {/* Informational Profile Breakdown */}
        <h3 className="font-extrabold text-gray-900 text-base tracking-tight">{name}</h3>
        <p className="text-xs text-gray-400 font-medium mt-0.5">Age: {age} • {gender}</p>
        
        <div className="mt-4 space-y-2 text-xs text-gray-600">
          <p className="flex items-start gap-1.5">
            <span className="text-gray-400">📍</span> 
            <span><strong>Last Seen:</strong> {location}</span>
          </p>
          <p className="flex items-start gap-1.5">
            <span className="text-gray-400">🕒</span> 
            <span><strong>Timeline:</strong> {date}</span>
          </p>
        </div>
      </div>
      
      {/* Execution Layer Toggles */}
      <div className="flex gap-2 mt-5 pt-3 border-t border-gray-100">
        <Link to={`/submit-tip?caseId=${id}`} className="flex-1">
          <Button variant="primary" className="w-full !py-2 text-xs font-bold shadow-none">
            Submit Tip
          </Button>
        </Link>
        <Link to="#" className="flex-1">
          <Button variant="outline" className="w-full !py-2 text-xs font-semibold shadow-none">
            Report Info
          </Button>
        </Link>
      </div>
    </div>
  );
}