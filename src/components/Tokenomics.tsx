import React from 'react';
import { Wallet, Users, Building } from 'lucide-react';
import { Card } from './Card';
import { TokenSupply } from './TokenSupply';
import { tokenConfig } from '../config/tokenConfig';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-16">Token Economics</h2>
        
        <TokenSupply />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card
            icon={Users}
            title="Community Allocation"
            description={`${tokenConfig.distribution.community.percentage}% (${tokenConfig.distribution.community.amount} ${tokenConfig.symbol}) dedicated to rewarding existing community members and driving ecosystem adoption.`}
          />
          <Card
            icon={Building}
            title="Incentive Fund"
            description={`${tokenConfig.distribution.development.percentage}% (${tokenConfig.distribution.development.amount} ${tokenConfig.symbol}) allocated for continuous platform improvement and strategic growth initiatives.`}
          />
          <Card
            icon={Wallet}
            title="Liquidity Reserve"
            description={`${tokenConfig.distribution.treasury.percentage}% (${tokenConfig.distribution.treasury.amount} ${tokenConfig.symbol}) secured for maintaining market stability and liquidity provisions.`}
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}