
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#d4af37]/30">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
                alt="Deepak Photography Dosarka"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 gold-bg opacity-20 blur-3xl -z-10" />
            <div className="absolute top-10 -left-10 p-6 bg-black/60 backdrop-blur-md border border-[#d4af37]/40 rounded-lg hidden sm:block">
              <p className="text-[#d4af37] font-serif text-3xl font-bold">10+</p>
              <p className="text-gray-400 text-xs tracking-widest">YEARS OF MAGIC</p>
            </div>
          </div>

          <div>
            <h3 className="text-[#d4af37] font-medium tracking-[0.2em] uppercase mb-4">Behind the Lens</h3>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Meet <span className="gold-gradient">Deepak Kumar</span></h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Founded in Dosarka, District Hoshiarpur, Deepak Photography Dosarka is a sanctuary where emotions are preserved through the lens.
              </p>
              <p>
                Led by artist Deepak Kumar, our team specializes in the exquisite blend of professional bridal makeup and high-end cinematic wedding photography. We believe every bride deserves to look and feel like royalty, and every wedding deserves a visual narrative that captures the raw, unscripted beauty of human connection.
              </p>
              <p>
                Trusted by hundreds of families across Punjab, we bring a personalized, creative approach to every event, ensuring that your most precious moments are captured with authenticity and elegance.
              </p>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-[#d4af37] font-bold text-xl">1.1K+</p>
                <p className="text-gray-500 text-sm">Instagram</p>
              </div>
              <div>
                <p className="text-[#d4af37] font-bold text-xl">1.8K+</p>
                <p className="text-gray-500 text-sm">YouTube</p>
              </div>
              <div className="border-l border-gray-800 pl-8">
                <p className="text-white italic">"Creating cinematic memories since 2012"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
