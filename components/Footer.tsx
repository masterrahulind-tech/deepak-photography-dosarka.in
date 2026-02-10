
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-[#d9b88b]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-10 text-center">
            <span className="text-[#d9b88b] font-serif text-3xl font-bold tracking-tighter">DEEPAK</span>
            <div className="text-gray-500 text-[10px] tracking-[0.4em] font-medium uppercase -mt-1">PHOTO STUDIO DOSARKA</div>
          </div>

          <div className="flex gap-10 mb-12">
            <a href="https://facebook.com" className="text-gray-600 hover:text-[#d9b88b] transition-colors text-xs uppercase tracking-widest font-bold">Facebook</a>
            <a href="https://instagram.com/deepak_photography_dosarka" className="text-gray-600 hover:text-[#d9b88b] transition-colors text-xs uppercase tracking-widest font-bold">Instagram</a>
            <a href="https://youtube.com" className="text-gray-600 hover:text-[#d9b88b] transition-colors text-xs uppercase tracking-widest font-bold">YouTube</a>
          </div>

          <div className="text-center text-gray-600 text-[10px] tracking-[0.2em] uppercase space-y-3 mb-12">
            <p>&copy; {new Date().getFullYear()} Deepak Photography Dosarka. All Rights Reserved.</p>
            <p className="opacity-50 font-light">Elegance Crafted in Hoshiarpur, Punjab</p>
          </div>

          {/* Designer Credit */}
          <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/10 text-center mt-4">
            website designed by <span className="text-[#d9b88b]/30">saveragraphics</span> a <span className="text-white/20 italic font-serif lowercase tracking-normal px-1">sindhuragroup</span> company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
