import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { DEPOIMENTOS } from '../data/burgers';

interface StatCounterProps {
  valorAlvo: number;
  prefixo?: string;
  sufixo?: string;
  duracao?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
  valorAlvo,
  prefixo = '',
  sufixo = '',
  duracao = 1500,
}) => {
  const [contador, setContador] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = valorAlvo / (duracao / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= valorAlvo) {
        setContador(valorAlvo);
        clearInterval(timer);
      } else {
        setContador(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, valorAlvo, duracao]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefixo}
      {contador.toLocaleString('pt-BR')}
      {sufixo}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    {
      numero: 42000,
      prefixo: '+',
      rotulo: 'Burgers Entregues',
      detalhe: 'Em Londrina e região desde a fundação',
    },
    {
      numero: 180,
      sufixo: 'g',
      rotulo: 'Blend Angus Diário',
      detalhe: 'Porção alta de carne nobre suculenta',
    },
    {
      numero: 8,
      sufixo: ' Horas',
      rotulo: 'Defumação Artesanal',
      detalhe: 'Costela desfiada em lenha de macieira',
    },
    {
      numero: 98,
      sufixo: '%',
      rotulo: 'Satisfação dos Clientes',
      detalhe: 'Avaliação média 4.9 estrelas no Google',
    },
  ];

  return (
    <section id="estatisticas" className="py-24 bg-[#0F0F0F] relative border-t border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#F97316]">
            Números Reais & Prova Social
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Sem caô na teoria. Comprovado na prática.
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF]">
            A resposta de quem já experimentou o verdadeiro hambúrguer na brasa de Londrina.
          </p>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#333333] transition-all text-center space-y-2"
            >
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F97316]">
                <StatCounter
                  valorAlvo={stat.numero}
                  prefixo={stat.prefixo}
                  sufixo={stat.sufixo}
                />
              </div>
              <div className="font-heading text-base font-bold uppercase text-white tracking-wide">
                {stat.rotulo}
              </div>
              <div className="text-xs text-[#9CA3AF] leading-relaxed">
                {stat.detalhe}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Block */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#222222]">
            <div>
              <span className="text-xs uppercase font-semibold text-[#F97316] tracking-wider block">
                Voz de quem comeu
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white">
                O que dizem os clientes de Londrina
              </h3>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#F97316] font-semibold">
              <Star className="w-4 h-4 fill-[#F97316]" />
              <span className="text-white">4.9 / 5.0</span>
              <span className="text-[#6B7280] hidden sm:inline">(Google & WhatsApp)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPOIMENTOS.map((dep, idx) => (
              <motion.div
                key={dep.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="p-6 rounded-2xl bg-[#141414] border border-[#242424] flex flex-col justify-between space-y-4 hover:border-[#323232] transition-colors"
              >
                <div className="space-y-3">
                  {/* Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(dep.nota)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F97316] text-[#F97316]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#6B7280]">{dep.data}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed italic">
                    &ldquo;{dep.comentario}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222222]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase text-white">
                        {dep.nome}
                      </h4>
                      <div className="text-[11px] text-[#9CA3AF]">
                        {dep.bairro} · {dep.cidade}
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-2 text-[11px] text-[#F97316] font-medium truncate">
                    Pediu: {dep.pratoFavorito}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
