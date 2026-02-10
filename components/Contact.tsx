
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border border-[#d4af37]/20 rounded-3xl overflow-hidden p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-[#d4af37] font-medium tracking-[0.2em] uppercase mb-4">Get In Touch</h3>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Secure Your Date for <span className="gold-gradient italic">2025–2026</span></h2>
              <p className="text-gray-400 font-light text-lg mb-10 leading-relaxed">
                Whether it's a grand Punjabi wedding or an intimate engagement, we are ready to bring your vision to life. Let's discuss your dream wedding today!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center text-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs tracking-widest uppercase">Call Us</p>
                    <a href="tel:+919464258391" className="text-white text-xl font-medium hover:text-[#d4af37] transition-colors">+91 94642 58391</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center text-black">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.633-.952zm11.333-7.252c-.322-.161-1.912-.943-2.208-1.053-.297-.108-.514-.162-.731.163-.216.324-.836 1.053-1.026 1.269-.19.215-.38.243-.701.082-.322-.161-1.359-.501-2.589-1.6c-.958-.853-1.604-1.907-1.794-2.231-.19-.324-.021-.499.14-.66.146-.144.322-.377.483-.566.162-.189.215-.323.322-.54.108-.216.055-.405-.026-.566-.081-.162-.731-1.761-.999-2.408-.261-.631-.527-.546-.731-.557-.189-.011-.405-.012-.622-.012-.216 0-.568.082-.865.405-.297.324-1.136 1.107-1.136 2.699 0 1.593 1.163 3.132 1.325 3.348.162.216 2.291 3.498 5.548 4.904.775.334 1.381.534 1.851.683.778.247 1.488.212 2.048.128.624-.093 1.912-.783 2.182-1.538.271-.755.271-1.403.19-1.538-.081-.135-.297-.216-.622-.378z"/></svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs tracking-widest uppercase">WhatsApp</p>
                    <a href="https://wa.me/919464258391" className="text-white text-xl font-medium hover:text-[#25D366] transition-colors">Start a Chat</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center text-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs tracking-widest uppercase">Studio Location</p>
                    <p className="text-white text-xl font-medium">Dosarka, Hoshiarpur, Punjab</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-8 md:p-12 rounded-2xl border border-[#d4af37]/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#d4af37]" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#d4af37]" placeholder="+91" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Wedding Date</label>
                  <input type="date" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Message / Requirements</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-[#d4af37]" placeholder="Tell us about your event..."></textarea>
                </div>
                <button type="button" className="w-full gold-bg text-black py-4 rounded-lg font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Send Booking Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
