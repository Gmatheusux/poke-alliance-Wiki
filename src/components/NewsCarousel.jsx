import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    tag: 'Atualização',
    title: 'Temporada 4: Nova Economia',
    description: 'Ajustes globais de drops e rebalanceamento do mercado estão ativos.',
    bg: 'bg-[#1A1D24]',
    border: 'border-[#3C5AA6]'
  },
  {
    id: 2,
    tag: 'Evento',
    title: 'Invasão de Tipo Fogo',
    description: 'Aumentada a taxa de spawn de Pokémon tipo fogo em vulcões.',
    bg: 'bg-[#1A1D24]',
    border: 'border-red-500'
  }
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockNews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockNews.length) % mockNews.length);
  };

  const current = mockNews[currentIndex];

  return (
    <div className="relative bg-surface border border-surface-hover rounded-xl p-6 mb-6 shadow-lg overflow-hidden group">
      {/* Banner Content */}
      <div className={`relative z-10 border-l-4 ${current.border} pl-4 transition-all`}>
        <span className="inline-block px-2 py-1 bg-[#0F1115] text-[#94A3B8] text-xs font-bold uppercase rounded mb-2 border border-[#2D3748]">
          {current.tag}
        </span>
        <h2 className="font-heading text-2xl font-bold text-[#E2E8F0] mb-2">{current.title}</h2>
        <p className="text-[#94A3B8] max-w-xl">{current.description}</p>
      </div>

      {/* Decorative Background Icon */}
      <Zap className="absolute right-[-20px] bottom-[-20px] text-[#2D3748] opacity-20 w-48 h-48 -rotate-12 pointer-events-none" />

      {/* Controls */}
      <div className="absolute right-4 bottom-4 flex gap-2">
        <button 
          onClick={prevSlide}
          className="p-2 bg-[#0F1115] hover:bg-[#2D3748] border border-[#2D3748] rounded-full text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 bg-[#0F1115] hover:bg-[#2D3748] border border-[#2D3748] rounded-full text-[#94A3B8] hover:text-[#E2E8F0] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
