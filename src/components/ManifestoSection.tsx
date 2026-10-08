import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Beef, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const pilares = [
    {
      numero: '01',
      titulo: 'Blend 100% Angus Moído Todo Santo Dia',
      descricao:
        'Não usamos carne ultraprocessada nem hambúrguer de caixinha congelada. Nosso blend é preparado diariamente em Londrina com cortes nobres selecionados: proporção exata entre peito bovino, fraldinha e gordura limpa para máxima suculência.',
      icone: Beef,
    },
    {
      numero: '02',
      titulo: 'Pão Brioche Selado na Manteiga de Garrafa',
      descricao:
        'O pão é o alicerce. Usamos brioche artesanal de fermentação lenta com selagem perfeita na manteiga de garrafa quente, criando uma barreira impermeável que não deixa o pão virar pasta, mesmo com o burger suculento.',
      icone: Flame,
    },
    {
      numero: '03',
      titulo: 'Queijos Fundidos e Fatiados na Hora',
      descricao:
        'Aquele queijo gorduroso e sem sabor de fast-food não entra na nossa cozinha. Trabalhamos com cheddar inglês envelhecido, provolone defumado e gouda de laticínios artesanais, derretidos no vapor exato da chapa.',
      icone: ShieldCheck,
    },
    {
      numero: '04',
      titulo: 'Molhos Autênticos Feitos do Zero',
      descricao:
        'Nossa maionese verde leva ervas frescas colhidas no dia; o barbecue passa por redução com rapadura e lenha; e a maionese defumada ganha carvão em brasa vivo direto no preparo para aroma inconfundível.',
      icone: HeartHandshake,
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with storytelling overlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#2B2B2B] bg-[#171717] shadow-2xl">
              <div className="aspect-[4/5] w-full bg-[#1A1A1A] relative">
                {!imgError ? (
                  <img
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
                    alt="Preparo artesanal do hambúrguer na brasa na Hamburgueria Sem Caô em Londrina"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#222222] to-[#141414] text-center">
                    <Flame className="w-16 h-16 text-[#F97316] mb-3" />
                    <span className="font-heading text-xl uppercase font-bold text-white">
                      Fogo, Brasa & Carne Nobre
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-transparent" />

                {/* Floating quote card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#2C2C2C]">
                  <p className="font-heading text-lg font-bold uppercase text-white leading-snug">
                    &ldquo;Se um hambúrguer precisa de vinte molhos artificiais para ter gosto, o erro está na carne.&rdquo;
                  </p>
                  <p className="text-xs text-[#F97316] uppercase font-semibold mt-2">
                    — Filosofia da Casa · Londrina - PR
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial manifesto content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#F97316]">
                <Flame className="w-4 h-4 text-[#F97316]" />
                <span>O Nosso Compromisso</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight text-balance">
                Por que nos chamamos Sem Caô?
              </h2>

              <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed text-balance">
                A Hamburgueria Sem Caô nasceu do cansaço de fotos lindas no Instagram que se
                transformavam em hambúrgueres mornos, secos e sem personalidade na hora da entrega.
                Aqui não tem rodeios: o cliente paga por ingredientes premium e recebe gastronomia de
                verdade.
              </p>
            </div>

            {/* Grid of the 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pilares.map((pilar, idx) => {
                const Icone = pilar.icone;
                return (
                  <motion.div
                    key={pilar.numero}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                    className="p-5 rounded-xl bg-[#151515] border border-[#242424] hover:border-[#333333] transition-colors space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
                        <Icone className="w-4 h-4" />
                      </div>
                      <span className="font-heading text-lg font-bold text-[#6B7280]">
                        {pilar.numero}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold uppercase text-white tracking-wide">
                      {pilar.titulo}
                    </h3>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {pilar.descricao}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick check points */}
            <div className="pt-4 border-t border-[#202020] flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#D1D5DB]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>Zero conservantes artificiais</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>Embalagens térmicas especiais</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>Entrega rápida em Londrina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
