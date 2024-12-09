import React from 'react';
import { Chrome } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Rewarding the <span className="text-[#F48024]">StackExchange</span> Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Earn crypto rewards for your valuable contributions to the 100M+ StackExchange community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="#" icon={Chrome} variant="primary" className="w-full sm:w-auto">
              Download Extension
            </Button>
           
          </div>
        </div>
      </div>
    </section>
  );
}