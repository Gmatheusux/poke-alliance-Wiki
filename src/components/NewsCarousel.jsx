import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    tag: 'Atualização',
    title: 'Temporada 4: Nova Economia',
    description: 'Ajustes globais de drops e rebalanceamento do mercado estão ativos. Prepare sua guild para o novo meta de crafting.',
    tagColor: 'bg-brand-primary',
    gradient: 'from-[#3C5AA6]/40 to-transparent'
  },
  {
    id: 2,
    tag: 'Evento',
    title: 'Invasão de Tipo Fogo',
    description: 'Aumentada a taxa de spawn de Pokémon tipo fogo em vulcões. Chance de drop de Fire Stones dobrada!',
    tagColor: 'bg-red-500',
    gradient: 'from-red-500/40 to-transparent'
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

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = mockNews[currentIndex];

  return (
    <div className="relative bg-surface border border-surface-hover rounded-2xl shadow-2xl overflow-hidden group mb-8">
      
      {/* 
        Banner Placeholder (16:9 aspect ratio space) 
        Quando os banners reais chegarem, basta trocar o fundo por <img src={banner} /> 
      */}
      <div className="w-full aspect-[21/9] md:aspect-[32/9] relative bg-[#0F1115] flex items-center justify-center overflow-hidden">
        
        {/* Placeholder Icon/Text for the Banner Graphic */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
          <ImageIcon size={64} className="text-text-muted mb-2" />
          <span className="font-mono text-sm tracking-widest text-text-muted uppercase">Espaço para Banner</span>
        </div>

        {/* Dynamic Gradient Overlay connecting Banner to Text */}
        <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient} mix-blend-overlay transition-all duration-700`} />
        
        {/* Vignette/Shadow overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />

        {/* Content Container (Bottom Aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 text-xs font-bold uppercase rounded-md text-white shadow-lg ${current.tagColor}`}>
              {current.tag}
            </span>
            <span className="text-xs text-text-muted font-mono bg-bg-base/50 backdrop-blur-md px-2 py-1 rounded">
              HOJE
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-main mb-2 drop-shadow-md">
            {current.title}
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base drop-shadow">
            {current.description}
          </p>
        </div>
      </div>

      {/* Hover Controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="p-3 bg-surface/80 backdrop-blur hover:bg-brand-primary border border-surface-hover hover:border-brand-primary rounded-full text-text-muted hover:text-white transition-all shadow-lg hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="p-3 bg-surface/80 backdrop-blur hover:bg-brand-primary border border-surface-hover hover:border-brand-primary rounded-full text-text-muted hover:text-white transition-all shadow-lg hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-4 right-8 flex gap-2 z-20">
        {mockNews.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-brand-primary shadow-[0_0_10px_rgba(60,90,166,0.8)]' : 'w-2 bg-text-muted/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
