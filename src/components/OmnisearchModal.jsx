import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, Package, Zap } from 'lucide-react';
import { useLayoutStore } from '../store/layoutStore';

export default function OmnisearchModal() {
  const { isOmnisearchOpen, closeOmnisearch, toggleOmnisearch } = useLayoutStore();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleOmnisearch();
      }
      if (e.key === 'Escape' && isOmnisearchOpen) {
        closeOmnisearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOmnisearchOpen, toggleOmnisearch, closeOmnisearch]);

  useEffect(() => {
    if (isOmnisearchOpen) {
      inputRef.current?.focus();
    } else {
      setQuery('');
      setDebouncedQuery('');
    }
  }, [isOmnisearchOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  if (!isOmnisearchOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={closeOmnisearch}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-surface border border-surface-hover rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center px-4 py-3 border-b border-surface-hover">
          <Search size={20} className="text-text-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-text-main text-lg placeholder-text-muted"
            placeholder="Buscar Pokémon, itens, sistemas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="hidden sm:inline-block bg-bg-base px-2 py-1 rounded text-xs font-mono text-text-muted border border-surface-hover">ESC</kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {debouncedQuery ? (
            <div className="p-2 space-y-1">
              <div className="text-xs font-semibold text-text-muted px-2 py-1 uppercase tracking-wider">Resultados para "{debouncedQuery}"</div>
              
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover text-left transition-colors">
                <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-500">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="text-text-main font-medium">Charizard</div>
                  <div className="text-xs text-text-muted">Fogo / Voador</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover text-left transition-colors">
                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Package size={16} />
                </div>
                <div>
                  <div className="text-text-main font-medium">Master Ball</div>
                  <div className="text-xs text-text-muted">Item &bull; Pokebolas</div>
                </div>
              </button>
            </div>
          ) : (
            <div className="p-4 text-center text-text-muted text-sm flex flex-col items-center">
              <Search size={32} className="mb-2 opacity-50" />
              <p>Digite para começar a buscar</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
