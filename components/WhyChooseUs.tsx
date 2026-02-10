
import React from 'react';

const reasons = [
  { title: "Artistic Vision", desc: "Every click and brushstroke is guided by a deep passion for storytelling and aesthetic excellence." },
  { title: "Personalized Service", desc: "We listen to your dreams and tailor our services to match your unique personality and wedding style." },
  { title: "Modern Equipment", desc: "Utilizing latest Sony Mirrorless cameras and premium makeup brands (Mac, Estée Lauder, Kryolan)." },
  { title: "Local Heritage", desc: "Deeply rooted in Hoshiarpur, we understand Punjabi traditions and how to capture their grandeur." }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[#d4af37] font-medium tracking-[0.2em] uppercase mb-4">The Advantage</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Why Brides Trust <span className="gold-gradient italic">Deepak Kumar</span></h2>
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center text-black flex-shrink-0 font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" className="rounded-xl grayscale" alt="Team Work" />
                <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600" className="rounded-xl border border-[#d4af37]/40" alt="Makeup detail" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" className="rounded-xl" alt="Wedding Couple" />
                <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600" className="rounded-xl grayscale" alt="Prewedding" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
