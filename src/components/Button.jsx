import React from 'react';

export default function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  const baseStyles = "px-5 py-3 rounded-xl text-sm font-semibold transition tracking-wide shadow-sm flex items-center justify-center gap-2";
  
  const variants = {
    // Dynamic v4 custom theme mappings
    primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",
    secondary: "bg-secondary border border-secondary-border text-gray-700 hover:bg-gray-100",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-medium"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}