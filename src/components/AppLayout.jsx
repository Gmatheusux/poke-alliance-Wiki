import React, { useState } from 'react';
import { Menu, Search, Home, Map, Book, Shield, Zap, User, Navigation, Globe, TrendingUp, ChevronDown } from 'lucide-react';
import { useLayoutStore } from '../store/layoutStore';
import OmnisearchModal from './OmnisearchModal';

const menuItems = [
  {
    title: 'Dashboard',
    img: '/assets/icons/dashboard.png',
    icon: Home,
    color: 'text-brand-accent',
    subItems: ['Resumo Diário', 'Acesso Rápido']
  },
  {
    title: 'Pokédex',
    img: '/assets/icons/pokedex.png',
    icon: Book,
    color: 'text-blue-400',
    subItems: ['Filtros Avançados', 'Tierlist da Comunidade', 'Guia de Times']
  },
  {
    title: 'Sistemas',
    img: '/assets/icons/sistemas.png',
    icon: Shield,
    color: 'text-gray-300',
    subItems: ['Boosts', 'Helds', 'Máquina de Star']
  },
  {
    title: 'Quests & NPCs',
    img: '/assets/icons/quests.png',
    icon: Map,
    color: 'text-amber-400',
    subItems: ['Índice Mestre', 'Catálogo de NPCs']
  },
  {
    title: 'Personagem',
    img: '/assets/icons/personagem.png',
    icon: User,
    color: 'text-emerald-400',
    subItems: ['Talentos', 'Conquistas', 'Medalhas', 'Pokelog']
  },
  {
    title: 'Minimapa',
    img: '/assets/icons/minimapa.png',
    icon: Navigation,
    color: 'text-teal-400',
    subItems: ['Filtros', 'Zonas de Caça']
  },
  {
    title: 'Regiões',
    img: '/assets/icons/regioes.png',
    icon: Globe,
    color: 'text-cyan-400',
    subItems: ['Catálogo de Zonas', 'Informações Vitais']
  },
  {
    title: 'Guia de Leveling',
    img: '/assets/icons/leveling.png',
    icon: TrendingUp,
    color: 'text-purple-400',
    subItems: ['Rotas Otimizadas', 'Recomendações']
  }
];

function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div className="mb-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
          isOpen ? 'bg-surface-hover text-text-main' : 'text-text-muted hover:bg-surface-hover hover:text-text-main'
        }`}
      >
        <div className="flex items-center gap-3 font-medium">
          {item.img ? (
            <img src={item.img} alt={item.title} className={`w-5 h-5 object-contain ${isOpen ? '' : 'opacity-70 grayscale-[50%]'}`} />
          ) : (
            <Icon size={18} className={isOpen ? item.color : 'text-text-muted'} />
          )}
          {item.title}
        </div>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} 
        />
      </button>

      {isOpen && item.subItems.length > 0 && (
        <div className="mt-1 ml-4 pl-4 border-l-2 border-surface-hover flex flex-col gap-1">
          {item.subItems.map((sub, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-sm px-3 py-1.5 text-text-muted hover:text-white hover:bg-surface-hover rounded-md transition-colors"
            >
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AppLayout({ children }) {
  const { openOmnisearch } = useLayoutStore();

  return (
    <div className="flex h-screen w-full bg-bg-base text-text-main overflow-hidden">
      {/* Sidebar (with relative z-index to sit above bg) */}
      <aside className="relative z-10 w-72 bg-surface border-r border-surface-hover flex flex-col flex-shrink-0 backdrop-blur-sm bg-opacity-95">
        <div className="p-4 flex items-center gap-3 font-heading font-bold text-xl tracking-wide">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
            <Zap size={18} className="text-brand-accent" />
          </div>
          Poke Alliance
        </div>
        
        <div className="px-4 pb-4">
          <button 
            onClick={openOmnisearch}
            className="w-full flex items-center gap-2 bg-bg-base border border-surface-hover rounded-lg px-3 py-2 text-sm text-text-muted hover:text-text-main hover:border-brand-primary transition-colors cursor-pointer shadow-inner"
          >
            <Search size={16} />
            <span>Buscar...</span>
            <kbd className="ml-auto bg-surface px-1.5 py-0.5 rounded text-xs font-mono text-text-muted">Ctrl K</kbd>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 px-3 custom-scrollbar">
          {menuItems.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </nav>

        <div className="p-4 border-t border-surface-hover flex items-center justify-between text-xs text-text-muted">
          <span>v1.2.0 (Zero-Bloat)</span>
          <a href="#" className="hover:text-brand-primary transition-colors">Patch Notes</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
        {children}
      </main>

      <OmnisearchModal />
    </div>
  );
}
