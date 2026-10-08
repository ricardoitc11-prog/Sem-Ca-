export type CategoriaItem = 'todos' | 'artesanais' | 'smash' | 'acompanhamentos' | 'bebidas';

export interface ItemCardapio {
  id: string;
  nome: string;
  categoria: 'artesanais' | 'smash' | 'acompanhamentos' | 'bebidas';
  preco: number;
  descricaoCurta: string;
  descricaoCompleta: string;
  pesoOuTamanho: string;
  ingredientes: string[];
  imagemUrl: string;
  destaque?: boolean;
  tempoPreparoMedio: string;
  harmonizacao?: string;
  opcoesPontoCarne?: boolean;
}

export interface Depoimento {
  id: string;
  nome: string;
  bairro: string;
  cidade: string;
  nota: number;
  comentario: string;
  pratoFavorito: string;
  data: string;
}

export interface OpcoesCustomizacao {
  pontoCarne: string;
  baconExtra: boolean;
  queijoExtra: boolean;
  cebolaCaramelizadaExtra: boolean;
  maioneseExtra: boolean;
  semCebola: boolean;
  semPicles: boolean;
  observacoes: string;
  quantidade: number;
}
