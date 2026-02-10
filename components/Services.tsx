
import React from 'react';

const services = [
  {
    title: "Bridal Artistry",
    subtitle: "High Definition Makeup",
    description: "Tailored looks using international luxury brands to ensure you radiate confidence and grace.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=871"
  },
  {
    title: "Cinematic Film",
    subtitle: "Storytelling",
    description: "4K cinematic wedding highlights that preserve every emotion, whisper, and joyous dance.",
    image: "https://images.unsplash.com/photo-1512138411135-233973873dec?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Wedding Frames",
    subtitle: "Candid Photography",
    description: "Capturing the raw, unscripted moments that make your wedding day uniquely yours.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "The Pre-Shoot",
    subtitle: "Creative Portraits",
    description: "Romantic narratives set against the stunning landscapes of Punjab, telling your love story before 'I do'.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1887"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h3 className="text-[#d9b88b] font-medium tracking-[0.4em] uppercase text-xs mb-4">Exquisite Expertise</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-[#fdfcf0]">Our Services</h2>
          </div>
          <p className="mt-6 md:mt-0 text-gray-500 max-w-xs font-light tracking-wide leading-relaxed">
            Crafting luxury visual narratives through light, lens, and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#0c0c0d] p-12 md:p-16 hover-glass transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] text-[#d9b88b] uppercase tracking-[0.3em] mb-4 block opacity-60">
                  {service.subtitle}
                </span>
                <h4 className="text-3xl font-serif text-[#fdfcf0] mb-6 group-hover:text-[#d9b88b] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-sm">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d9b88b] font-bold">
                  View Portfolio
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>

              {/* Subtle background image reveal on hover */}
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={service.image} className="w-full h-full object-cover grayscale" alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
