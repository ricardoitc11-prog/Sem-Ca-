import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, MessageCircle } from 'lucide-react';
import { DADOS_CONTATO } from '../data/burgers';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encodeURIComponent(DADOS_CONTATO.mensagemPadraoWhatsApp)}`;

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'O Manifesto', href: '#sobre' },
    { label: 'Diferenciais', href: '#estatisticas' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-xl'
          : 'bg-[#0D0D0D]/75 backdrop-blur-sm border-b border-[#202020] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            aria-label="Hamburgueria Sem Caô - Início"
          >
            <div className="w-8 h-8 rounded-lg bg-[#F97316] flex items-center justify-center text-white shadow-md shadow-[#F97316]/20 transition-transform duration-200 group-hover:scale-105">
              <Flame className="w-5 h-5 fill-white text-[#F97316]" />
            </div>
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white uppercase group-hover:text-[#F97316] transition-colors">
              Hamburgueria Sem Caô
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#D1D5DB] hover:text-[#F97316] transition-colors relative py-1 focus:outline-none focus-visible:text-[#F97316]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold tracking-wide uppercase shadow-lg shadow-[#F97316]/25 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Entrar em contato</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D1D5DB] hover:text-white hover:bg-[#202020] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-[#2A2A2A] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-md text-base font-medium text-[#E5E7EB] hover:text-[#F97316] hover:bg-[#1E1E1E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#262626]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold uppercase text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Entrar em contato</span>
            </a>
            <p className="text-center text-xs text-[#9CA3AF] mt-2.5">
              Londrina - PR · Atendimento pelo WhatsApp
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
