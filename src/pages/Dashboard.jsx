import React from 'react';
import NewsCarousel from '../components/NewsCarousel';
import QuickAccessGrid from '../components/QuickAccessGrid';

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-text-main">Bem-vindo de volta, Treinador</h1>
        <p className="text-text-muted mt-1">Veja o que está acontecendo no Poke Alliance hoje.</p>
      </header>
      
      <NewsCarousel />
      <QuickAccessGrid />
    </div>
  );
}
