import React from 'react';
import { Menu, Search, Home, Map, Book, Shield, Zap } from 'lucide-react';
import { useLayoutStore } from '../store/layoutStore';
import OmnisearchModal from './OmnisearchModal';

export default function AppLayout({ children }) {
  const { openOmnisearch } = useLayoutStore();

  return (
    <div className="flex h-screen w-full bg-bg-base text-text-main overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-surface-hover flex flex-col">
        <div className="p-4 flex items-center gap-3 font-heading font-bold text-xl tracking-wide">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
            <Zap size={18} className="text-brand-accent" />
          </div>
          Poke Alliance
        </div>
        
        <div className="px-4 pb-4">
          <button 
            onClick={openOmnisearch}
            className="w-full flex items-center gap-2 bg-bg-base border border-surface-hover rounded-lg px-3 py-2 text-sm text-text-muted hover:text-text-main hover:border-brand-primary transition-colors cursor-pointer"
          >
            <Search size={16} />
            <span>Buscar...</span>
            <kbd className="ml-auto bg-surface px-1.5 py-0.5 rounded text-xs font-mono text-text-muted">Ctrl K</kbd>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface-hover text-brand-accent font-medium">
            <Home size={18} />
            Painel
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-muted hover:bg-surface-hover hover:text-text-main transition-colors">
            <Book size={18} />
            Pokédex V5
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-muted hover:bg-surface-hover hover:text-text-main transition-colors">
            <Shield size={18} />
            Sistemas
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-muted hover:bg-surface-hover hover:text-text-main transition-colors">
            <Map size={18} />
            Minimapa
          </a>
        </nav>

        <div className="p-4 border-t border-surface-hover text-xs text-text-muted text-center">
          v1.1.0 (Zero-Bloat)
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        {children}
      </main>

      <OmnisearchModal />
    </div>
  );
}
