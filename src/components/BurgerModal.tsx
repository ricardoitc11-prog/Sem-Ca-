import React, { useState } from 'react';
import { X, MessageCircle, Plus, Minus, Check, Clock, Utensils, Flame } from 'lucide-react';
import { ItemCardapio } from '../types/burger';
import { DADOS_CONTATO } from '../data/burgers';

interface BurgerModalProps {
  item: ItemCardapio | null;
  onClose: () => void;
}

export const BurgerModal: React.FC<BurgerModalProps> = ({ item, onClose }) => {
  const [quantidade, setQuantidade] = useState(1);
  const [pontoCarne, setPontoCarne] = useState('Ao ponto da casa (suculento e rosado)');
  const [baconExtra, setBaconExtra] = useState(false);
  const [queijoExtra, setQueijoExtra] = useState(false);
  const [maioneseExtra, setMaioneseExtra] = useState(false);
  const [cebolaCaramelizadaExtra, setCebolaCaramelizadaExtra] = useState(false);
  const [semCebola, setSemCebola] = useState(false);
  const [semPicles, setSemPicles] = useState(false);
  const [observacoes, setObservacoes] = useState('');
  const [imgError, setImgError] = useState(false);

  if (!item) return null;

  // Calculo de adicionais
  const adicionalBaconPreco = 6.0;
  const adicionalQueijoPreco = 5.0;
  const adicionalMaionesePreco = 4.0;
  const adicionalCebolaPreco = 4.0;

  let precoUnitario = item.preco;
  if (baconExtra) precoUnitario += adicionalBaconPreco;
  if (queijoExtra) precoUnitario += adicionalQueijoPreco;
  if (maioneseExtra) precoUnitario += adicionalMaionesePreco;
  if (cebolaCaramelizadaExtra) precoUnitario += adicionalCebolaPreco;

  const precoTotal = precoUnitario * quantidade;

  const handleEnviarPedidoWhatsApp = () => {
    let mensagem = `*PEDIDO VIA SITE - HAMBURGUERIA SEM CAÔ*\n\n`;
    mensagem += `*Item:* ${quantidade}x ${item.nome} (${item.pesoOuTamanho})\n`;
    mensagem += `*Preço Base:* R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;

    if (item.opcoesPontoCarne) {
      mensagem += `*Ponto da Carne:* ${pontoCarne}\n`;
    }

    const adicionais: string[] = [];
    if (baconExtra) adicionais.push('Bacon Artesanal Extra (+R$ 6,00)');
    if (queijoExtra) adicionais.push('Queijo Extra (+R$ 5,00)');
    if (maioneseExtra) adicionais.push('Maionese Defumada Extra (+R$ 4,00)');
    if (cebolaCaramelizadaExtra) adicionais.push('Cebola Caramelizada Extra (+R$ 4,00)');

    if (adicionais.length > 0) {
      mensagem += `*Adicionais:*\n • ${adicionais.join('\n • ')}\n`;
    }

    const remocoes: string[] = [];
    if (semCebola) remocoes.push('Sem cebola');
    if (semPicles) remocoes.push('Sem picles');
    if (remocoes.length > 0) {
      mensagem += `*Remover:* ${remocoes.join(', ')}\n`;
    }

    if (observacoes.trim()) {
      mensagem += `*Observações:* ${observacoes.trim()}\n`;
    }

    mensagem += `\n*TOTAL ESTIMADO:* R$ ${precoTotal.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += `Poderia me confirmar o tempo de espera e o valor da taxa de entrega para meu endereço em Londrina?`;

    const encoded = encodeURIComponent(mensagem);
    const link = `https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encoded}`;
    window.open(link, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#171717] border border-[#2E2E2E] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-60 sm:h-72 w-full bg-[#121212] overflow-hidden">
          {!imgError ? (
            <img
              src={item.imagemUrl}
              alt={item.nome}
              className="w-full h-full object-cover object-center"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-[#141414] to-[#242424]">
              <Flame className="w-12 h-12 text-[#F97316] mb-2" />
              <span className="font-heading text-xl text-white uppercase">{item.nome}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 hover:text-[#F97316] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            aria-label="Fechar detalhes do item"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on image */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#F97316]">
                {item.pesoOuTamanho}
              </span>
              <h2 id="modal-title" className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                {item.nome}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#9CA3AF] block">Preço</span>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F97316]">
                R$ {item.preco.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-[#9CA3AF] tracking-wider mb-1">
              Sobre a Receita
            </h4>
            <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed">
              {item.descricaoCompleta}
            </p>
          </div>

          {/* Ingredients list */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-[#9CA3AF] tracking-wider mb-2">
              Ingredientes Selecionados
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredientes.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#222222] border border-[#2E2E2E] text-xs font-medium text-[#E5E7EB]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Harmonizacao se houver */}
          {item.harmonizacao && (
            <div className="p-3.5 rounded-xl bg-[#202020]/60 border border-[#2B2B2B] flex items-center gap-3 text-xs text-[#D1D5DB]">
              <Utensils className="w-4 h-4 text-[#F97316] shrink-0" />
              <span>
                <strong className="text-white">Sugestão do Chef:</strong> {item.harmonizacao}
              </span>
            </div>
          )}

          {/* Opção de ponto da carne para artesanais */}
          {item.opcoesPontoCarne && (
            <div className="space-y-2 pt-2 border-t border-[#262626]">
              <label className="text-xs uppercase font-semibold text-[#9CA3AF] tracking-wider block">
                Ponto da Carne
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Ao ponto da casa (rosado e suculento)',
                  'Ao ponto para bem (sem sangue)',
                  'Bem passado (totalmente cozido)',
                ].map((ponto) => (
                  <button
                    key={ponto}
                    type="button"
                    onClick={() => setPontoCarne(ponto)}
                    className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all ${
                      pontoCarne === ponto
                        ? 'border-[#F97316] bg-[#F97316]/10 text-white font-semibold'
                        : 'border-[#2A2A2A] bg-[#1E1E1E] text-[#9CA3AF] hover:border-[#3A3A3A] hover:text-white'
                    }`}
                  >
                    {ponto}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Adicionais Gourmet */}
          {item.categoria !== 'bebidas' && (
            <div className="space-y-2 pt-2 border-t border-[#262626]">
              <label className="text-xs uppercase font-semibold text-[#9CA3AF] tracking-wider block">
                Adicionais Turbinados (Opcional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setBaconExtra(!baconExtra)}
                  className={`p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                    baconExtra
                      ? 'border-[#F97316] bg-[#F97316]/10 text-white font-medium'
                      : 'border-[#2A2A2A] bg-[#1E1E1E] text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <span>Bacon Artesanal Extra</span>
                  <span className="font-semibold text-[#F97316]">+R$ 6,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQueijoExtra(!queijoExtra)}
                  className={`p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                    queijoExtra
                      ? 'border-[#F97316] bg-[#F97316]/10 text-white font-medium'
                      : 'border-[#2A2A2A] bg-[#1E1E1E] text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <span>Queijo Inglês Extra</span>
                  <span className="font-semibold text-[#F97316]">+R$ 5,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMaioneseExtra(!maioneseExtra)}
                  className={`p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                    maioneseExtra
                      ? 'border-[#F97316] bg-[#F97316]/10 text-white font-medium'
                      : 'border-[#2A2A2A] bg-[#1E1E1E] text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <span>Pote Maionese Defumada</span>
                  <span className="font-semibold text-[#F97316]">+R$ 4,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCebolaCaramelizadaExtra(!cebolaCaramelizadaExtra)}
                  className={`p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                    cebolaCaramelizadaExtra
                      ? 'border-[#F97316] bg-[#F97316]/10 text-white font-medium'
                      : 'border-[#2A2A2A] bg-[#1E1E1E] text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <span>Cebola Caramelizada Stout</span>
                  <span className="font-semibold text-[#F97316]">+R$ 4,00</span>
                </button>
              </div>
            </div>
          )}

          {/* Remover itens (se houver cebola/picles) */}
          {item.categoria !== 'bebidas' && (
            <div className="space-y-2 pt-2 border-t border-[#262626]">
              <label className="text-xs uppercase font-semibold text-[#9CA3AF] tracking-wider block">
                Remover Algum Item?
              </label>
              <div className="flex gap-4 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-[#D1D5DB] hover:text-white">
                  <input
                    type="checkbox"
                    checked={semCebola}
                    onChange={(e) => setSemCebola(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#202020] border-[#3E3E3E] text-[#F97316] focus:ring-[#F97316]"
                  />
                  <span>Sem cebola</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-[#D1D5DB] hover:text-white">
                  <input
                    type="checkbox"
                    checked={semPicles}
                    onChange={(e) => setSemPicles(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#202020] border-[#3E3E3E] text-[#F97316] focus:ring-[#F97316]"
                  />
                  <span>Sem picles</span>
                </label>
              </div>
            </div>
          )}

          {/* Observações personalizadas */}
          <div className="space-y-1.5 pt-2 border-t border-[#262626]">
            <label className="text-xs uppercase font-semibold text-[#9CA3AF] tracking-wider block">
              Observações Adicionais para a Cozinha
            </label>
            <input
              type="text"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Ex: Enviar molho à parte, cortar ao meio, etc."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#202020] border border-[#2F2F2F] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#F97316]"
            />
          </div>
        </div>

        {/* Modal footer with quantity and action */}
        <div className="p-4 sm:p-6 bg-[#121212] border-t border-[#2A2A2A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center border border-[#2E2E2E] rounded-lg bg-[#1A1A1A]">
              <button
                type="button"
                onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                className="p-2 text-[#9CA3AF] hover:text-white hover:bg-[#252525] transition-colors rounded-l-lg"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-heading text-lg font-bold text-white">
                {quantidade}
              </span>
              <button
                type="button"
                onClick={() => setQuantidade(quantidade + 1)}
                className="p-2 text-[#9CA3AF] hover:text-white hover:bg-[#252525] transition-colors rounded-r-lg"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="text-right sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#9CA3AF] block">
                Total do Pedido
              </span>
              <span className="font-heading text-2xl font-bold text-[#F97316]">
                R$ {precoTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleEnviarPedidoWhatsApp}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold uppercase text-sm tracking-wide shadow-lg shadow-[#F97316]/25 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Enviar Pedido via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
