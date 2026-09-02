import React from 'react';
import { Book, Settings, Map, User, Navigation, Globe, TrendingUp, Zap } from 'lucide-react';

const accessItems = [
  { label: 'Pokédex', desc: 'Meta, Combate e Loot', img: './assets/icons/pokedex.png', bgImg: './assets/backgrounds/pokedex.jpg', color: 'text-blue-400', glow: 'group-hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]', bg: 'bg-blue-500/20', hoverBorder: 'hover:border-blue-500/50' },
  { label: 'Sistemas', desc: 'Crafting, Boosts e Helds', img: './assets/icons/sistemas.png', bgImg: './assets/backgrounds/sistemas.jpg', color: 'text-gray-300', glow: 'group-hover:shadow-[0_0_15px_rgba(209,213,219,0.3)]', bg: 'bg-gray-400/20', hoverBorder: 'hover:border-gray-400/50' },
  { label: 'Quests & NPCs', desc: 'Índice Mestre e Rotas', img: './assets/icons/quests.png', bgImg: './assets/backgrounds/quests.jpg', color: 'text-amber-400', glow: 'group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]', bg: 'bg-amber-500/20', hoverBorder: 'hover:border-amber-500/50' },
  { label: 'Personagem', desc: 'Talentos e Medalhas', img: './assets/icons/personagem.png', bgImg: './assets/backgrounds/personagem.jpg', color: 'text-emerald-400', glow: 'group-hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]', bg: 'bg-emerald-500/20', hoverBorder: 'hover:border-emerald-500/50' },
  { label: 'Minimapa', desc: 'Filtros e Respawns', img: './assets/icons/minimapa.png', bgImg: './assets/backgrounds/minimapa.jpg', color: 'text-teal-400', glow: 'group-hover:shadow-[0_0_15px_rgba(45,212,191,0.4)]', bg: 'bg-teal-500/20', hoverBorder: 'hover:border-teal-500/50' },
  { label: 'Regiões', desc: 'Geografia do Servidor', img: './assets/icons/regioes.png', bgImg: './assets/backgrounds/regioes.jpg', color: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]', bg: 'bg-cyan-500/20', hoverBorder: 'hover:border-cyan-500/50' },
  { label: 'Guia de Leveling', desc: 'Rotas Otimizadas', img: './assets/icons/leveling.png', bgImg: './assets/backgrounds/leveling.jpg', color: 'text-purple-400', glow: 'group-hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]', bg: 'bg-purple-500/20', hoverBorder: 'hover:border-purple-500/50' },
  { label: 'Tier List', desc: 'Ranking da Comunidade', img: './assets/icons/tierlist.png', bgImg: './assets/backgrounds/tierlist.jpg', color: 'text-brand-accent', glow: 'group-hover:shadow-[0_0_15px_rgba(255,203,5,0.4)]', bg: 'bg-brand-accent/20', hoverBorder: 'hover:border-brand-accent/50' },
];

export default function QuickAccessGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-text-main flex items-center gap-2">
          Acesso Rápido
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {accessItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button 
              key={i} 
              className={`relative flex flex-col p-5 bg-surface border border-surface-hover rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-xl text-left overflow-hidden h-36 ${item.hoverBorder}`}
            >
              {/* Unique Abstract Background Image for each card */}
              <div 
                className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-all duration-700 bg-cover bg-center group-hover:scale-110"
                style={{ backgroundImage: `url('${item.bgImg}')` }}
              />
              
              {/* Gradient Overlay for Text Readability (Shadow overlay) */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

              {/* Icon / Image Container with Glow */}
              <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-xl ${item.bg} mb-auto transition-all duration-300 ${item.glow} group-hover:scale-110`}>
                {item.img ? (
                  <img src={item.img} alt={item.label} className="w-12 h-12 object-contain drop-shadow-md" />
                ) : (
                  <Icon size={24} className={item.color} />
                )}
              </div>
              
              {/* Text Group */}
              <div className="relative z-10 flex flex-col mt-2">
                <span className="font-heading font-bold text-text-main group-hover:text-white transition-colors drop-shadow-md">
                  {item.label}
                </span>
                <span className="text-xs text-text-muted mt-0.5 font-medium line-clamp-1 drop-shadow-md">
                  {item.desc}
                </span>
              </div>
              
              {/* Subtle overlay effect on hover */}
              <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/0 to-white/[0.05] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </button>
          )
        })}
      </div>
    </div>
  );
}
