import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowDown, Flame, Award, Clock } from 'lucide-react';
import { DADOS_CONTATO } from '../data/burgers';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = `https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Hamburgueria Sem Caô e gostaria de pedir agora!'
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0D0D0D] bg-grid-pattern"
    >
      {/* Background ambient fire glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-10 w-[350px] h-[350px] bg-[#EA580C]/10 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Unboxed category metadata with typographic separator */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#F97316]"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span>Hambúrguer na Brasa</span>
              <span className="text-[#4B5563]" aria-hidden="true">/</span>
              <span>100% Angus Certificado</span>
              <span className="text-[#4B5563]" aria-hidden="true">/</span>
              <span>Londrina - PR</span>
            </motion.div>

            {/* Massive Dramatic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="font-heading font-extrabold uppercase text-white leading-[0.92] tracking-tighter text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] text-balance"
            >
              Fogo alto.
              <br />
              Carne nobre.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74]">
                Zero caô.
              </span>
            </motion.h1>

            {/* Subheadline with high conversion copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-[#9CA3AF] text-lg sm:text-xl font-normal max-w-2xl leading-relaxed text-balance"
            >
              Hambúrguer de verdade grelhado na brasa quente, com blend 100% Angus moído
              diariamente, queijo de verdade derretido e pão brioche selado na manteiga de
              garrafa. Sem maquiagem de rede social. O melhor sabor de Londrina na sua mesa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-base font-bold uppercase tracking-wider shadow-xl shadow-[#F97316]/25 hover:shadow-[#F97316]/40 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Entrar em contato</span>
              </a>

              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1A1A1A] hover:bg-[#242424] text-[#E5E7EB] hover:text-white border border-[#2E2E2E] hover:border-[#3E3E3E] text-base font-medium transition-all duration-200 active:scale-[0.98]"
              >
                <span>Ver Cardápio Digital</span>
                <ArrowDown className="w-4 h-4 text-[#F97316]" />
              </a>
            </motion.div>

            {/* Trust points - unboxed text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
              className="pt-6 border-t border-[#202020] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#9CA3AF]"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Grelhado no Fogo Vivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>180g Carne Nobre Angus</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Preparo Ágil em Londrina</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Feature */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow & Hairline Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#141414] shadow-2xl group">
                <div className="aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden bg-[#1E1E1E] relative">
                  {!imgError ? (
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
                      alt="Hambúrguer artesanal Sem Caô com queijo cheddar fundido e bacon crocante"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-center">
                      <Flame className="w-16 h-16 text-[#F97316] mb-3" />
                      <span className="font-heading text-2xl font-bold uppercase text-white">
                        Hambúrguer Artesanal na Brasa
                      </span>
                      <span className="text-sm text-[#9CA3AF] mt-1">
                        Blend 100% Angus fresco · Londrina - PR
                      </span>
                    </div>
                  )}

                  {/* Dark gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

                  {/* Overlay badge card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase font-semibold text-[#F97316]">
                        Mais Pedido da Noite
                      </div>
                      <div className="font-heading text-lg font-bold text-white uppercase">
                        Burger 01
                      </div>
                      <div className="text-xs text-[#9CA3AF]">
                        180g Angus + Cheddar Inglês + Bacon Rústico
                      </div>
                    </div>
                    <div className="text-right pl-3 border-l border-[#2E2E2E]">
                      <div className="font-heading text-xl font-bold text-[#F97316]">
                        R$ 38,90
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-white hover:text-[#F97316] uppercase underline transition-colors"
                      >
                        Pedir agora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
