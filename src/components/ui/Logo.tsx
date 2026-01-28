import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light'; // dark text for light bg, light text for dark bg
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const baseTextColor = variant === 'dark' ? 'text-gray-900' : 'text-white';
  
  return (
    <div className={`font-extrabold text-2xl tracking-tighter flex items-center ${baseTextColor} ${className}`}>
      <span className="mr-0.5">Anne</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Marie</span>
      <div className="w-2 h-2 rounded-full bg-purple-600 ml-1 mt-2"></div>
    </div>
  );
}
