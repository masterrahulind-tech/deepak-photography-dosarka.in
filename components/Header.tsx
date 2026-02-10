
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Story', href: '#' },
    { name: 'Expertise', href: '#services' },
    { name: 'Collection', href: '#gallery' },
    { name: 'Inquiry', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-[#d9b88b]/10' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex flex-col group cursor-pointer">
            <span className="text-[#d9b88b] font-serif text-2xl font-bold tracking-tighter transition-all group-hover:tracking-widest">DEEPAK</span>
            <span className="text-gray-500 text-[8px] tracking-[0.4em] font-medium -mt-1">PHOTO STUDIO</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#fdfcf0]/70 hover:text-[#d9b88b] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="gold-bg champagne-bg text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-[#d9b88b]/10"
              >
                Book Experience
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#d9b88b] p-2 focus:outline-none"
            >
              <div className="w-6 flex flex-col gap-1.5 items-end">
                <div className={`h-[1px] bg-current transition-all ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></div>
                <div className={`h-[1px] bg-current transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}></div>
                <div className={`h-[1px] bg-current transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0a0a0b] z-[-1] transition-transform duration-700 ease-in-out md:hidden flex items-center justify-center ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="text-center space-y-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-4xl font-serif text-[#fdfcf0] hover:text-[#d9b88b] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block gold-bg champagne-bg text-black px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest mt-8 shadow-2xl shadow-[#d9b88b]/20"
          >
            Start Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
};


export default Header;
