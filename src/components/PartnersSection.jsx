import React from 'react';
import { Video, MonitorPlay, Play, ExternalLink } from 'lucide-react';

const mockPartners = [
  {
    id: 1,
    name: 'AshKetchup',
    platform: 'youtube',
    metric: '125K Subs',
    avatarColor: 'bg-blue-500/20 text-blue-400',
    isLive: false,
    focus: 'Guias Avançados de PVP e Breeding',
    borderColor: 'group-hover:border-red-500/50',
    icon: Video,
    iconColor: 'text-red-500'
  },
  {
    id: 2,
    name: 'ShinyHunterTV',
    platform: 'twitch',
    metric: '3.2K Viewers',
    avatarColor: 'bg-purple-500/20 text-purple-400',
    isLive: true,
    focus: 'Maratona de Shinies no Vulcão',
    borderColor: 'group-hover:border-purple-500/50 border-purple-500/30',
    icon: MonitorPlay,
    iconColor: 'text-purple-400'
  },
  {
    id: 3,
    name: 'Prof. Carvalho',
    platform: 'youtube',
    metric: '89K Subs',
    avatarColor: 'bg-emerald-500/20 text-emerald-400',
    isLive: false,
    focus: 'Notícias, Patch Notes e Economia',
    borderColor: 'group-hover:border-red-500/50',
    icon: Video,
    iconColor: 'text-red-500'
  }
];

export default function PartnersSection() {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading text-xl font-bold text-text-main flex items-center gap-2">
            Criadores Oficiais
          </h2>
          <p className="text-sm text-text-muted mt-1">Acompanhe as melhores dicas e gameplays com nossos parceiros.</p>
        </div>
        <button className="text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-1">
          Ver Todos <ExternalLink size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPartners.map((partner) => {
          const PlatformIcon = partner.icon;
          
          return (
            <a 
              key={partner.id}
              href="#"
              className={`relative flex flex-col p-5 bg-surface border border-surface-hover rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-xl ${partner.borderColor}`}
            >
              {/* Top Section: Avatar & Status */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  {/* Fake Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-lg ${partner.avatarColor}`}>
                    {partner.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main group-hover:text-white transition-colors">{partner.name}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <PlatformIcon size={12} className={partner.iconColor} />
                      <span className="text-xs text-text-muted font-medium">{partner.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Live Badge */}
                {partner.isLive && (
                  <div className="flex items-center gap-1 bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-0.5 rounded text-xs font-bold uppercase animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Ao Vivo
                  </div>
                )}
              </div>

              {/* Bottom Section: Focus/Content */}
              <div className="mt-auto">
                <p className="text-sm text-text-muted line-clamp-2">
                  <span className="text-text-main font-medium">Foco: </span> 
                  {partner.focus}
                </p>
              </div>

              {/* Hover Play Button (Overlay) */}
              <div className="absolute right-5 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-lg">
                  <Play size={14} className="ml-0.5" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
