
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with ken burns effect simulation */}
      <div
        className="absolute inset-0 z-0 scale-110 animate-[pulse_8s_infinite]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2069')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35) contrast(1.1)'
        }}
      />

      {/* Floating decorative light */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#d9b88b] opacity-[0.07] blur-[120px] rounded-full animate-float"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-[#d9b88b] font-medium tracking-[0.5em] text-xs md:text-sm uppercase mb-6 animate-fade-in-up">
          Established in 2012 • Dosarka
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif text-[#fdfcf0] mb-8 leading-[1.1] font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Timeless <span className="champagne-gradient italic font-normal">Elegance</span> Captured
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto tracking-wide animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Premium Bridal Makeup & Cinematic Wedding Stories in Hoshiarpur.
          Bookings now available for the 2025–2026 season.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#contact" className="w-full sm:w-auto gold-bg champagne-bg text-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_30px_rgba(217,184,139,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            Reserve Your Date
          </a>
          <a href="#gallery" className="w-full sm:w-auto glass text-[#d9b88b] px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#d9b88b]/10 transition-all duration-300">
            View Collection
          </a>
        </div>
      </div>

      {/* Elegant Line Decoration */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#d9b88b] to-transparent"></div>
        <span className="text-[10px] text-[#d9b88b] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
