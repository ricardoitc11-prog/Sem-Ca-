import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Flame, Clock, Sparkles } from 'lucide-react';
import { DADOS_CONTATO } from '../data/burgers';

export const CtaBanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encodeURIComponent(
    'Olá! Quero matar minha fome com um burger artesanal da Hamburgueria Sem Caô. Como posso pedir?'
  )}`;

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 via-[#EA580C]/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#F97316]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#2B2B2B] shadow-2xl relative overflow-hidden">
          {/* Subtle decorative grid lines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#F97316]">
                <Flame className="w-4 h-4 fill-[#F97316]" />
                <span>Pronto para comer de verdade?</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight text-balance">
                A brasa já está quente.
                <br />
                <span className="text-[#F97316]">O seu pedido sai agora.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl leading-relaxed text-balance">
                Sem filas complicadas ou aplicativos que cobram o dobro. Fale direto com a nossa
                equipe no WhatsApp, tire suas dúvidas e receba seu burger fresco e crocante em Londrina.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#9CA3AF]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                  Preparo médio em 15 minutos
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                  Embalagem que mantém o pão crocante
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-base font-bold uppercase tracking-wider shadow-xl shadow-[#F97316]/30 hover:shadow-[#F97316]/50 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Entrar em contato</span>
              </a>

              <span className="text-center lg:text-right text-xs text-[#9CA3AF]">
                Atendimento rápido pelo WhatsApp: {DADOS_CONTATO.telefoneExibicao}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
