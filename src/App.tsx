import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CardapioSection } from './components/CardapioSection';
import { ManifestoSection } from './components/ManifestoSection';
import { StatsSection } from './components/StatsSection';
import { CtaBanner } from './components/CtaBanner';
import { ContatoSection } from './components/ContatoSection';
import { Footer } from './components/Footer';
import { BurgerModal } from './components/BurgerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ItemCardapio } from './types/burger';

export default function App() {
  const [selectedBurger, setSelectedBurger] = useState<ItemCardapio | null>(null);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F3F4F6] selection:bg-[#F97316] selection:text-white relative">
      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Main page content sections */}
      <main>
        {/* 1. Início: Hero Section */}
        <Hero />

        {/* 2. Cardápio: Digital Interactive Menu */}
        <CardapioSection onSelectItem={(item) => setSelectedBurger(item)} />

        {/* 3. Sobre: O Manifesto Sem Caô */}
        <ManifestoSection />

        {/* 4. Estatísticas & Prova Social */}
        <StatsSection />

        {/* 5. CTA Forte de Conversão */}
        <CtaBanner />

        {/* 6. Contato & Localização Londrina - PR */}
        <ContatoSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Burger Customization Modal */}
      {selectedBurger && (
        <BurgerModal
          item={selectedBurger}
          onClose={() => setSelectedBurger(null)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
