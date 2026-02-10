
import React, { useState, useRef, useEffect } from 'react';
import { getWeddingConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Namaste! I'm your wedding concierge for Deepak Photography Dosarka. How can I help plan your dream wedding look or shoot today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getWeddingConsultation(userMsg);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-28 sm:right-6 sm:w-[400px] h-full sm:h-[600px] z-[100] bg-[#0c0c0d] sm:rounded-3xl border border-[#d9b88b]/20 flex flex-col overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] animate-fade-in backdrop-blur-3xl">
      {/* Header */}
      <div className="p-6 gold-bg champagne-bg flex justify-between items-center text-black">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-xl">✧</div>
          <div>
            <p className="font-bold text-xs uppercase tracking-widest">Wedding Concierge</p>
            <p className="text-[8px] opacity-70 uppercase font-medium tracking-tighter">Powered by Gemini Pro</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0c0c0d]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed tracking-wide ${m.role === 'user'
                ? 'bg-[#d9b88b] text-black font-medium rounded-tr-none'
                : 'glass text-[#fdfcf0] rounded-tl-none border border-[#d9b88b]/10'
              }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="glass p-4 rounded-2xl animate-pulse text-[#d9b88b]/60 text-xs">Consulting the artisans...</div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 bg-[#0a0a0b] border-t border-[#d9b88b]/10">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about bridal looks or locations..."
            className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-[#fdfcf0] text-xs focus:outline-none focus:border-[#d9b88b] placeholder:text-zinc-600"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="w-12 h-12 gold-bg champagne-bg rounded-xl text-black flex items-center justify-center hover:shadow-[0_0_15px_rgba(217,184,139,0.3)] disabled:opacity-50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
