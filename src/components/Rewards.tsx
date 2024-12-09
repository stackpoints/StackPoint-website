import React from 'react';
import { Award, MessageSquare, CheckCircle, Star } from 'lucide-react';
import { WithdrawalFees } from './WithdrawalFees';

export function Rewards() {
  return (
    <section id="rewards" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">Reward Distribution</h2>
        
        <div className="max-w-3xl mx-auto mb-16 space-y-6 text-gray-300">
          <p className="text-base sm:text-lg leading-relaxed">
            StackPoints revolutionizes the StackExchange ecosystem by introducing a blockchain-based reward system that recognizes and compensates valuable community contributions. Our transparent reputation-to-token conversion mechanism ensures fair distribution of rewards.
          </p>
          
          <div className="bg-[#404040]/60 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-[#F48024] mb-4">Earning Mechanisms</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageSquare className="w-5 h-5 text-[#F48024] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Answer Rewards:</span> Contributors receive direct token rewards for quality answers. The reward amount is determined by the system through upvotes and answer quality metrics.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F48024] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Question Incentives:</span> High-quality questions that generate meaningful discussions are rewarded through a bounty system. Rewards are distributed among valuable answers, promoting comprehensive knowledge sharing.
                </div>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-[#F48024] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold">Community Recognition:</span> Additional tokens are allocated from the project reserve for exceptional contributions that receive significant community recognition through upvotes.
                </div>
              </li>              
            </ul>
          </div>

          <div className="bg-[#404040]/60 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-[#F48024] mb-4">Participation Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>Initial conversion rate: 1 StackExchange reputation point = 1 STP token</li>
              <li>Minimum thresholds: 1,000 reputation for initial airdrop, 500 STP for subsequent rewards</li>
              <li>All contributions must adhere to StackExchange quality standards</li>
              <li>Automated systems filter out low-quality or spam contributions</li>
              <li>Reward calculation period: 30 days from initial submission of bounty</li>
              <li>Question qualification criteria: Must be answered, receive 50+ upvotes, generate 3+ answers, and come from registered users</li>
              <li>Answer qualification criteria: Must be from registered users and receive 10+ upvotes</li>
            </ul>
          </div>

          <WithdrawalFees />

          <p className="text-xs sm:text-sm text-gray-400 italic">
            Note: Our reward system undergoes regular optimization based on community feedback and platform analytics to ensure fair distribution and maintain content quality.
          </p>
        </div>
      </div>
    </section>
  );
}