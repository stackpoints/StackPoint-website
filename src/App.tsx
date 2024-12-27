import { Hero } from './components/Hero';
import { Tokenomics } from './components/Tokenomics';
import { Rewards } from './components/Rewards';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A] text-white">     
      <Hero />
      <Tokenomics />
      <Rewards />
      <Roadmap />
       <Footer />
    </div>
  );
}

export default App;