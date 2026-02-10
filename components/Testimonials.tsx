
import React from 'react';

const reviews = [
  {
    name: "Priya Sharma",
    role: "Bride",
    text: "Deepak and his team made me look and feel like a queen. The makeup was flawless even after 12 hours of celebration, and the photos are literally pieces of art.",
    date: "Dec 2023"
  },
  {
    name: "Arjun Singh",
    role: "Groom",
    text: "The cinematic video was beyond our expectations. It felt like watching a Bollywood movie of our own wedding. Highly professional service in Hoshiarpur.",
    date: "Nov 2023"
  },
  {
    name: "Mehak Kaur",
    role: "Bride",
    text: "Exceptional attention to detail. They captured the smallest emotions of our Punjabi wedding perfectly. Best choice for wedding photography in Punjab.",
    date: "Jan 2024"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0c0c0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-[#d9b88b] font-medium tracking-[0.4em] uppercase text-xs mb-4">Voices of Joy</h3>
        <h2 className="text-4xl md:text-6xl font-serif text-[#fdfcf0] mb-20">Client Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="glass p-10 rounded-3xl relative text-left hover-glass transition-all group">
              <div className="text-4xl text-[#d9b88b]/20 absolute top-8 left-8 group-hover:text-[#d9b88b]/40 transition-colors">"</div>
              <p className="text-gray-400 font-light leading-relaxed mb-8 italic relative z-10 pt-4">
                {review.text}
              </p>
              <div className="border-t border-[#d9b88b]/10 pt-6">
                <p className="text-[#fdfcf0] font-serif text-xl">{review.name}</p>
                <p className="text-[#d9b88b] text-[10px] uppercase tracking-widest mt-1">{review.role} • {review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
