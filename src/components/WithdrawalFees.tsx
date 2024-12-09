import React from 'react';
import { Wallet } from 'lucide-react';
import { feeConfig } from '../config/feeConfig';

export function WithdrawalFees() {
  return (
    <div className="bg-[#404040]/60 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-white/10">
      <div className="flex items-start space-x-3 mb-4">
        <Wallet className="w-6 h-6 text-[#F48024] mt-1" />
        <h3 className="text-lg sm:text-xl font-bold text-[#F48024]">Withdrawal Fees</h3>
      </div>
      
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 text-gray-400 font-medium">{feeConfig.rewardWithdrawalFees}% percent fix fees on Reward Withdrawal.</th>
                
              </tr>
            </thead>
            <tbody className="text-gray-300">
            
            </tbody>
          </table>
        </div>
       

        <div className="mt-4 pt-4 border-t border-white/10">
          <h4 className="text-white font-semibold mb-2">Fee Distribution</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• {feeConfig.distribution.community}% to Community Rewards Pool</li>
            <li>• {feeConfig.distribution.development}% to Development Fund</li>
            <li>• {feeConfig.distribution.burn}% Burned</li>
          </ul>
        </div>
      </div>
    </div>
  );
}