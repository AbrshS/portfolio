"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="w-full h-24 flex justify-between items-center py-4 px-6 mt-6 md:px-12 sticky top-0 bg-white z-50 border-b border-gray-100">
      <div className="logo">
        <Link href="/">
          <div className="text-2xl font-bold h-8 flex items-center justify-center text-neutral-900">
            Abrsh S.
          </div>
        </Link>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-sm font-medium">Available for work</span>
      </div>
      
      <button 
        onClick={toggleTheme}
        className="p-3 w-28 bg-black text-white text-sm rounded-full"
      >
        Hire Me
      </button>
    </header>
  );
}