
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import PersistentCTA from './components/PersistentCTA';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-[#d9b88b] selection:text-black bg-[#0a0a0b] text-[#fdfcf0]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      
      {/* AI Assistant Toggle Button */}
      <button 
        onClick={() => setIsAiOpen(!isAiOpen)}
        className="fixed bottom-24 right-6 z-50 p-4 rounded-full gold-bg shadow-lg hover:scale-110 transition-transform hidden md:flex items-center justify-center text-black font-bold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        <span className="ml-2">Wedding AI</span>
      </button>

      {isAiOpen && <AIAssistant onClose={() => setIsAiOpen(false)} />}
      
      <PersistentCTA />
    </div>
  );
};


export default App;
