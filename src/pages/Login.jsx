import React from 'react';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-73px)] justify-between bg-gray-50">
      <div className="p-12 text-center text-sm text-gray-400 font-medium my-auto">
        🔒 Login Page View Container <br />
        <span className="text-xs text-gray-400">(Assigned to Authentication Module developer)</span>
      </div>
      <Footer />
    </div>
  );
}