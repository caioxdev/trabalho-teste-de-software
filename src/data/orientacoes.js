import iconeBfSaibaMais from '@/assets/icons/icone-bf-saibaMais.svg';
import iconeCadunicoSaibaMais from '@/assets/icons/icone-cadunico-saibaMais.svg';
import iconeBpcSaibaMais from '@/assets/icons/icone-bpc-saibaMais.svg';
import iconeCrasSaibaMais from '@/assets/icons/icone-cras-saibaMais.svg';
import iconeCreasSaibaMais from '@/assets/icons/icone-creas-saibaMais.svg';

export const passosComoUsar = [
  {
    numero: 1,
    titulo: 'Busque uma política pela área ou nome',
    descricao:
      'Navegue pelas categorias ou use o filtro inteligente para encontrar o benefício ideal para você.',
  },
  {
    numero: 2,
    titulo: 'Veja os critérios e documentos necessários',
    descricao:
      'Leia atentamente os pré-requisitos e prepare a documentação digital solicitada para o cadastro.',
  },
  {
    numero: 3,
    titulo: 'Registre seu interesse e acompanhe',
    descricao:
      'Clique em solicitar e receba atualizações em tempo real sobre o status da sua análise no portal.',
  },
];

export const programasSaibaMais = [
  {
    id: 'bolsa-familia',
    titulo: 'Bolsa Família',
    descricao:
      'Transferência de renda direta disponível para famílias cadastradas no CadÚnico com renda mensal limitada.',
    icone: iconeBfSaibaMais,
    spanWide: false,
  },
  {
    id: 'cadunico',
    titulo: 'CadÚnico',
    descricao:
      'Inscrição obrigatória que serve como porta de entrada para quase todos os benefícios sociais do governo.',
    icone: iconeCadunicoSaibaMais,
    spanWide: false,
  },
  {
    id: 'bpc',
    titulo: 'BPC',
    descricao:
      'Benefício de prestação continuada para idosos (65+) ou pessoas com deficiência que comprovem baixa renda.',
    icone: iconeBpcSaibaMais,
    spanWide: false,
  },
  {
    id: 'cras',
    titulo: 'CRAS',
    descricao:
      'Unidade pública que realiza o atendimento inicial e o acompanhamento socioassistencial das famílias.',
    icone: iconeCrasSaibaMais,
    spanWide: false,
  },
  {
    id: 'creas',
    titulo: 'CREAS',
    descricao:
      'Unidade especializada que atende famílias e indivíduos em situação de violação de direitos ou risco social grave.',
    icone: iconeCreasSaibaMais,
    spanWide: true,
  },
];
