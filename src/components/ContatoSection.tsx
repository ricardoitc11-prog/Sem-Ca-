import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, ExternalLink, HelpCircle } from 'lucide-react';
import { DADOS_CONTATO, ITENS_CARDAPIO } from '../data/burgers';

export const ContatoSection: React.FC = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [burgerEscolhido, setBurgerEscolhido] = useState(ITENS_CARDAPIO[0].nome);
  const [observacao, setObservacao] = useState('');

  const handleEnviarMensagemWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let texto = `*CONTATO / PEDIDO RÁPIDO - HAMBURGUERIA SEM CAÔ*\n\n`;
    texto += `*Nome:* ${nome.trim() || 'Cliente'}\n`;
    if (endereco.trim()) {
      texto += `*Endereço/Bairro:* ${endereco.trim()}\n`;
    }
    texto += `*Item de Interesse:* ${burgerEscolhido}\n`;
    if (observacao.trim()) {
      texto += `*Mensagem / Observação:* ${observacao.trim()}\n`;
    }
    texto += `\nOlá! Vim pelo site da Hamburgueria Sem Caô e gostaria de dar andamento no meu atendimento!`;

    const encoded = encodeURIComponent(texto);
    const url = `https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const faqs = [
    {
      pergunta: 'Qual a região atendida pelo delivery em Londrina?',
      resposta:
        'Entregamos em toda a região de Londrina, especialmente Terra Bonita, Gleba Palhano, Centro, Vivendas do Arvoredo e proximidades do Catuaí Shopping. Consulte sua taxa no WhatsApp!',
    },
    {
      pergunta: 'Quais são as formas de pagamento aceitas?',
      resposta:
        'Aceitamos Pix (com confirmação instantânea), cartões de crédito e débito (levamos a maquininha até você) e dinheiro trocado.',
    },
    {
      pergunta: 'Posso retirar no balcão?',
      resposta:
        'Com certeza! Você pode fazer seu pedido com antecedência pelo WhatsApp e retirar quentinho na R. Francisco Salton, 350 - Terra Bonita.',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#F97316]">
            Atendimento Direto & Localização
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Venha nos conhecer ou peça em casa
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF]">
            Estamos localizados no bairro Terra Bonita em Londrina - PR. Sem caô no atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Quick Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-[#161616] border border-[#262626] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-white">
                    Endereço
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                    {DADOS_CONTATO.endereco}
                  </p>
                </div>
                <a
                  href={DADOS_CONTATO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:underline pt-1"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-[#161616] border border-[#262626] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-white">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                    {DADOS_CONTATO.telefoneExibicao}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${DADOS_CONTATO.telefoneWhatsAppNumeros}?text=${encodeURIComponent(
                    DADOS_CONTATO.mensagemPadraoWhatsApp
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:underline pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl bg-[#161616] border border-[#262626] space-y-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-white">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                    {DADOS_CONTATO.horarioAtendimento}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Interactive Order / Contact Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626] shadow-xl space-y-5">
              <div className="space-y-1">
                <h3 className="font-heading text-xl font-bold uppercase text-white">
                  Formulário de Contato & Pedido Direto
                </h3>
                <p className="text-xs text-[#9CA3AF]">
                  Preencha seus dados para enviar um pedido estruturado direto para nossa cozinha no WhatsApp.
                </p>
              </div>

              <form onSubmit={handleEnviarMensagemWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-[#9CA3AF] tracking-wider">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: João Silva"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E1E1E] border border-[#2F2F2F] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#F97316]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-[#9CA3AF] tracking-wider">
                      Seu Bairro / Endereço em Londrina
                    </label>
                    <input
                      type="text"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      placeholder="Ex: Terra Bonita / Gleba Palhano"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E1E1E] border border-[#2F2F2F] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#F97316]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-[#9CA3AF] tracking-wider">
                    Escolha seu Burger ou Item Principal
                  </label>
                  <select
                    value={burgerEscolhido}
                    onChange={(e) => setBurgerEscolhido(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E1E1E] border border-[#2F2F2F] text-sm text-white focus:outline-none focus:border-[#F97316]"
                  >
                    {ITENS_CARDAPIO.map((item) => (
                      <option key={item.id} value={item.nome}>
                        {item.nome} — R$ {item.preco.toFixed(2).replace('.', ',')}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-[#9CA3AF] tracking-wider">
                    Mensagem ou Instruções Especiais
                  </label>
                  <textarea
                    rows={3}
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    placeholder="Ex: Ponto da carne, se deseja retirar algum ingrediente ou dúvidas sobre o pedido..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E1E1E] border border-[#2F2F2F] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#F97316] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#F97316]/25 transition-all duration-200 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Entrar em contato via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Styled Map Card & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Styled Map Representation */}
            <div className="rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden shadow-xl">
              <div className="p-4 bg-[#1A1A1A] border-b border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                  <span className="font-heading text-sm font-bold uppercase text-white">
                    Londrina - PR · Terra Bonita
                  </span>
                </div>
                <span className="text-xs text-[#9CA3AF]">CEP: 86047-600</span>
              </div>

              {/* Map frame */}
              <div className="relative aspect-[4/3] w-full bg-[#121212] overflow-hidden">
                <iframe
                  title="Localização Hamburgueria Sem Caô"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.290886657963!2d-51.17565492465664!3d-23.341400278950292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb437fb2ec2bb3%3A0xe556b6b7a5449aa5!2sR.%20Francisco%20Salton%2C%20350%20-%20Terra%20Bonita%2C%20Londrina%20-%20PR%2C%2086047-600!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-[#161616] flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">R. Francisco Salton, 350</span>
                <a
                  href={DADOS_CONTATO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#F97316] hover:underline flex items-center gap-1"
                >
                  Traçar Rota no Waze / Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#242424] space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-[#F97316] tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Dúvidas Frequentes</span>
              </div>

              <div className="space-y-3.5">
                {faqs.map((faq, i) => (
                  <div key={i} className="pb-3 border-b border-[#222222] last:border-none last:pb-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {faq.pergunta}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                      {faq.resposta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
