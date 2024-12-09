import React, { useState } from 'react';
import { Coins, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#404040]/50 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coins className="w-8 h-8 text-[#F48024]" />
            <span className="text-xl sm:text-2xl font-bold text-white">StackPoints</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-[#F48024]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-gray-300 hover:text-[#F48024] transition">About</a></li>
              <li><a href="#tokenomics" className="text-gray-300 hover:text-[#F48024] transition">Tokenomics</a></li>
              <li><a href="#rewards" className="text-gray-300 hover:text-[#F48024] transition">Rewards</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-[#F48024] transition">Roadmap</a></li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#about" className="block text-gray-300 hover:text-[#F48024] transition py-2" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#tokenomics" className="block text-gray-300 hover:text-[#F48024] transition py-2" onClick={() => setIsMenuOpen(false)}>Tokenomics</a></li>
              <li><a href="#rewards" className="block text-gray-300 hover:text-[#F48024] transition py-2" onClick={() => setIsMenuOpen(false)}>Rewards</a></li>
              <li><a href="#roadmap" className="block text-gray-300 hover:text-[#F48024] transition py-2" onClick={() => setIsMenuOpen(false)}>Roadmap</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}