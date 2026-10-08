import React from 'react';
import { Flame, MapPin, Phone, Instagram } from 'lucide-react';
import { DADOS_CONTATO } from '../data/burgers';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] text-[#9CA3AF] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E1E1E]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#F97316] flex items-center justify-center text-white">
                <Flame className="w-4 h-4 fill-white text-[#F97316]" />
              </div>
              <span className="font-heading text-xl font-bold uppercase tracking-tight text-white">
                Hamburgueria Sem Caô
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              O autêntico hambúrguer artesanal na brasa em Londrina - PR. Blend 100% Angus
              moído fresco todo dia, queijo de verdade e zero enrolação.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-white hover:text-[#F97316] hover:border-[#F97316]/50 transition-colors"
                aria-label="WhatsApp da Hamburgueria Sem Caô"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-white hover:text-[#F97316] hover:border-[#F97316]/50 transition-colors"
                aria-label="Instagram da Hamburgueria Sem Caô"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-[#F97316] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#F97316] transition-colors">
                  Cardápio Digital
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F97316] transition-colors">
                  O Manifesto Sem Caô
                </a>
              </li>
              <li>
                <a href="#estatisticas" className="hover:text-[#F97316] transition-colors">
                  Depoimentos & Números
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F97316] transition-colors">
                  Fazer Pedido / Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Unit Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">
              Unidade Londrina
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>{DADOS_CONTATO.endereco}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>{DADOS_CONTATO.telefoneExibicao}</span>
              </div>
              <p className="text-[11px] text-[#6B7280] pt-1">
                Atendimento presencial e delivery para toda a região metropolitana de Londrina.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© 2026 Hamburgueria Sem Caô. Todos os direitos reservados.</p>
          <p>Londrina - Paraná · Brasil · Fogo, carne e atitude.</p>
        </div>
      </div>
    </footer>
  );
};
