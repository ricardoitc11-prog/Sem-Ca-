import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DADOS_CONTATO } from '../data/burgers';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Hamburgueria Sem Caô e gostaria de fazer meu pedido!'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip notice */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171717] border border-[#2E2E2E] shadow-xl text-xs text-white animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="font-medium">
            Fome agora? Peça em <strong className="text-[#F97316]">{DADOS_CONTATO.telefoneExibicao}</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#6B7280] hover:text-white ml-1 p-0.5"
            aria-label="Fechar aviso do WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp da Hamburgueria Sem Caô"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#16A34A] to-[#22C55E] text-white flex items-center justify-center shadow-2xl shadow-emerald-900/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Subtle breathing ripple */}
        <span
          className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none"
          aria-hidden="true"
        />

        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
