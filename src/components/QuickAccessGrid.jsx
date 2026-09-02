import React from 'react';
import { Sword, Map, Settings, Backpack, Shield, Zap } from 'lucide-react';

const accessItems = [
  { label: 'Criador de Times', icon: Sword, color: 'text-red-400', bg: 'bg-red-400/10' },
  { label: 'Mapa Interativo', icon: Map, color: 'text-green-400', bg: 'bg-green-400/10' },
  { label: 'Receitas de Craft', icon: Settings, color: 'text-gray-400', bg: 'bg-gray-400/10' },
  { label: 'Banco de Itens', icon: Backpack, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Chefes de Raid', icon: Shield, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { label: 'Tier List', icon: Zap, color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
];

export default function QuickAccessGrid() {
  return (
    <div>
      <h2 className="font-heading text-lg font-semibold text-text-main mb-4">Acesso Rápido</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {accessItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button key={i} className="flex flex-col items-center justify-center p-6 bg-surface border border-surface-hover rounded-xl hover:border-brand-primary hover:bg-surface-hover transition-all group">
              <div className={`p-3 rounded-full ${item.bg} mb-3 group-hover:scale-110 transition-transform`}>
                <Icon size={24} className={item.color} />
              </div>
              <span className="text-sm font-medium text-text-main">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
}
