import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tokenomics } from './components/Tokenomics';
import { Rewards } from './components/Rewards';
import { Roadmap } from './components/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A] text-white">
      <Header />
      <Hero />
      <Tokenomics />
      <Rewards />
      <Roadmap />
    </div>
  );
}

export default App;