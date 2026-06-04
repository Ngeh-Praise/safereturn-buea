import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#EAEAEA] border-t border-gray-200 py-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-left">
          <p className="text-xs font-bold text-gray-800">SafeReturn Buea</p>
          <p className="text-[11px] text-gray-500 mt-1">© 2026 SafeReturn Buea. Humanitarian Response Platform.</p>
        </div>
        
        {/* Document Quicklinks */}
        <div className="flex gap-6 text-[11px] text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900 hover:underline">Emergency Contacts</a>
          <a href="#" className="hover:text-gray-900 hover:underline">Safety Protocol</a>
          <a href="#" className="hover:text-gray-900 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}