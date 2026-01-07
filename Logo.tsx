import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* TMD Abstract Minimal Emblem */}
    <rect x="15" y="15" width="70" height="70" rx="12" fill="none" stroke="white" strokeWidth="4" />
    <path 
      d="M30 55 L45 70 L75 30" 
      fill="none" 
      stroke="#F3C14F" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle cx="82" cy="18" r="5" fill="#F3C14F" />
  </svg>
);