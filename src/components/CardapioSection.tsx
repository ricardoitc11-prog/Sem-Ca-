import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Flame, Clock, Sparkles, MessageCircle, ChevronRight } from 'lucide-react';
import { ITENS_CARDAPIO } from '../data/burgers';
import { ItemCardapio, CategoriaItem } from '../types/burger';

interface CardapioSectionProps {
  onSelectItem: (item: ItemCardapio) => void;
}

export const CardapioSection: React.FC<CardapioSectionProps> = ({ onSelectItem }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaItem>('todos');
  const [busca, setBusca] = useState('');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const categorias = [
    { id: 'todos', label: 'Todos os Itens' },
    { id: 'artesanais', label: 'Artesanais na Brasa' },
    { id: 'smash', label: 'Smash Burgers' },
    { id: 'acompanhamentos', label: 'Acompanhamentos' },
    { id: 'bebidas', label: 'Bebidas Geladas' },
  ];

  const itensFiltrados = useMemo(() => {
    return ITENS_CARDAPIO.filter((item) => {
      const matchCategoria =
        categoriaAtiva === 'todos' || item.categoria === categoriaAtiva;
      const matchBusca =
        item.nome.toLowerCase().includes(busca.toLowerCase()) ||
        item.descricaoCurta.toLowerCase().includes(busca.toLowerCase()) ||
        item.ingredientes.some((ing) => ing.toLowerCase().includes(busca.toLowerCase()));
      return matchCategoria && matchBusca;
    });
  }, [categoriaAtiva, busca]);

  return (
    <section id="cardapio" className="py-24 bg-[#0F0F0F] relative">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#F97316]">
            <Flame className="w-4 h-4 text-[#F97316]" />
            <span>Cardápio Digital Oficial</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight text-balance">
            Sabores construídos no fogo vivo
          </h2>

          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed text-balance">
            Sem carne requentada, sem molho industrial barato. Todos os nossos burgers são
            preparados na hora com blend fresco moído diariamente e queijos artesanais.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#222222]">
          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#181818] border border-[#262626] rounded-xl overflow-x-auto no-scrollbar">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoriaAtiva(cat.id as CategoriaItem)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  categoriaAtiva === cat.id
                    ? 'bg-[#F97316] text-white shadow-md shadow-[#F97316]/20'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-[#222222]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por nome ou ingrediente..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#F97316] transition-colors"
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {itensFiltrados.length === 0 ? (
          <div className="text-center py-16 bg-[#141414] rounded-2xl border border-[#242424] p-8">
            <Flame className="w-12 h-12 text-[#6B7280] mx-auto mb-3" />
            <h3 className="font-heading text-xl uppercase font-bold text-white">
              Nenhum item encontrado
            </h3>
            <p className="text-sm text-[#9CA3AF] mt-1 mb-4">
              Não encontramos resultados para &quot;{busca}&quot;. Tente outro termo ou limpe a busca.
            </p>
            <button
              onClick={() => {
                setBusca('');
                setCategoriaAtiva('todos');
              }}
              className="px-4 py-2 rounded-lg bg-[#242424] text-white text-xs font-semibold hover:bg-[#2E2E2E] transition-colors"
            >
              Ver todos os itens
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {itensFiltrados.map((item, index) => {
              const isImgFailed = failedImages[item.id];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                  className="group rounded-2xl bg-[#171717] border border-[#262626] hover:border-[#383838] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#F97316]/5"
                >
                  {/* Card Top Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1E1E1E]">
                    {!isImgFailed ? (
                      <img
                        src={item.imagemUrl}
                        alt={item.nome}
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#222222] to-[#171717]">
                        <Flame className="w-10 h-10 text-[#F97316] mb-2" />
                        <span className="font-heading text-lg uppercase text-white">
                          {item.nome}
                        </span>
                      </div>
                    )}

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-90" />

                    {/* Highlights badge if any */}
                    {item.destaque && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F97316] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                        <Sparkles className="w-3 h-3" />
                        <span>Destaque</span>
                      </div>
                    )}

                    {/* Price tag on image */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0F0F0F]/90 backdrop-blur-md border border-[#2E2E2E]">
                      <span className="font-heading text-lg font-bold text-[#F97316]">
                        R$ {item.preco.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-1.5">
                        <span className="text-[#F97316] font-semibold">{item.pesoOuTamanho}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.tempoPreparoMedio}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-bold uppercase text-white tracking-tight group-hover:text-[#F97316] transition-colors">
                        {item.nome}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 line-clamp-2 leading-relaxed">
                        {item.descricaoCurta}
                      </p>

                      {/* Ingredients inline pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.ingredientes.slice(0, 4).map((ing, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] bg-[#222222] border border-[#2C2C2C] text-[#D1D5DB]"
                          >
                            {ing}
                          </span>
                        ))}
                        {item.ingredientes.length > 4 && (
                          <span className="text-[11px] text-[#6B7280] self-center">
                            +{item.ingredientes.length - 4} mais
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 border-t border-[#242424] flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectItem(item)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#202020] hover:bg-[#282828] text-white text-xs sm:text-sm font-semibold uppercase tracking-wide border border-[#2E2E2E] hover:border-[#3E3E3E] transition-all"
                      >
                        <span>Personalizar / Pedir</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#F97316]" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectItem(item)}
                        className="p-2.5 rounded-xl bg-[#F97316]/10 hover:bg-[#F97316] text-[#F97316] hover:text-white border border-[#F97316]/30 transition-all"
                        aria-label={`Pedir ${item.nome} via WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Cardapio Bottom Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-[#141414] border border-[#242424] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-white">
                Tem alguma preferência ou restrição alimentar?
              </h4>
              <p className="text-xs text-[#9CA3AF]">
                Fale com a nossa equipe no WhatsApp. Adaptamos o ponto da carne, queijos e retiramos ingredientes.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/5543996318860?text=${encodeURIComponent(
              'Olá! Gostaria de tirar uma dúvida sobre o cardápio da Hamburgueria Sem Caô.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#222222] hover:bg-[#2C2C2C] text-white text-xs uppercase font-bold tracking-wide transition-colors whitespace-nowrap border border-[#303030]"
          >
            Falar com a Cozinha
          </a>
        </div>
      </div>
    </section>
  );
};
