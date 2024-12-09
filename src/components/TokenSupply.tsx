import React from 'react';
import { Coins } from 'lucide-react';
import { tokenConfig } from '../config/tokenConfig';

export function TokenSupply() {
  return (
    <div className="bg-[#404040]/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Coins className="w-8 h-8 text-[#F48024]" />
        <h3 className="text-2xl font-bold text-white">Total Token Supply</h3>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-center">
        <div>
          <p className="text-4xl font-bold text-[#F48024]">{tokenConfig.totalSupply}</p>
          <p className="text-sm text-gray-400 mt-1">{tokenConfig.symbol} Tokens</p>
        </div>
         
      </div>
    </div>
  );
}