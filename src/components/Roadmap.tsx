import React from 'react';
import { Chrome, Coins, Users, Smartphone } from 'lucide-react';

export function Roadmap() {
  return (
    <section id="roadmap" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-16">Development Timeline</h2>
        <div className="max-w-3xl mx-auto">
          {/* Current Phase */}
          <div className="relative pl-8 pb-12 border-l-2 border-[#F48024]">
            <div className="absolute w-4 h-4 bg-[#F48024] rounded-full -left-[9px]"></div>
            <div className="flex items-center space-x-3 mb-3">
              <Chrome className="w-6 h-6 text-[#F48024]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#F48024]">Q4 2024 - Current Phase</h3>
            </div>
            <div className="bg-[#404040]/60 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <h4 className="font-semibold text-white mb-2">Chrome Extension Launch</h4>
              <ul className="text-sm sm:text-base text-gray-300 space-y-2">
                <li>• Browser extension deployment for StackExchange integration</li>
                <li>• Initial token distribution to qualifying community members</li>
                <li>• Reputation-to-token conversion system implementation</li>
              </ul>
            </div>
          </div>

          {/* Future Phases */}
          <div className="relative pl-8 pb-12 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px]"></div>
            <div className="flex items-center space-x-3">
              <Coins className="w-6 h-6 text-gray-500" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-500">Exchange Integration Phase</h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-400">Exchange listings and expanded platform support</p>
          </div>

          <div className="relative pl-8 pb-12 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px]"></div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-gray-500" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-500">Governance Phase</h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-400">Community governance and DAO implementation</p>
          </div>

          <div className="relative pl-8">
            <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px]"></div>
            <div className="flex items-center space-x-3">
              <Smartphone className="w-6 h-6 text-gray-500" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-500">Mobile Integration Phase</h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-400">StackExchange Mobile app and enhanced reward mechanisms</p>
          </div>
        </div>
      </div>
    </section>
  );
}