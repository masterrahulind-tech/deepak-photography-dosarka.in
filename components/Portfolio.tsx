
import React, { useState } from 'react';

const galleryItems = [
  { id: 1, type: 'makeup', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800' },
  { id: 2, type: 'photography', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: 3, type: 'video', url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800' },
  { id: 4, type: 'makeup', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800' },
  { id: 5, type: 'photography', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: 6, type: 'photography', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
  { id: 7, type: 'video', url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&q=80&w=800' },
  { id: 8, type: 'makeup', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.type === filter);

  return (
    <section id="gallery" className="py-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-[#d9b88b] font-medium tracking-[0.4em] uppercase text-xs mb-4">The Gallery</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-[#fdfcf0] mb-12">Captured Memories</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'makeup', 'photography', 'video'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat
                    ? 'gold-bg champagne-bg text-black shadow-lg shadow-[#d9b88b]/20'
                    : 'glass text-gray-500 hover:text-[#d9b88b] border-[#d9b88b]/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img
                src={item.url}
                alt="Portfolio Item"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <p className="text-[#d9b88b] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Signature Look</p>
                  <p className="text-[#fdfcf0] font-serif text-xl">Event 2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a
            href="https://instagram.com/deepak_photography_dosarka"
            target="_blank"
            className="glass inline-flex items-center gap-4 px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b88b] hover:bg-[#d9b88b]/10 transition-all group"
          >
            <span>Explore More on Instagram</span>
            <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
