import iconeBf from '@/assets/icons/icone-bf.svg';
import iconeCadunico from '@/assets/icons/icone-cadunico.svg';
import iconeBpc from '@/assets/icons/icone-bpc.svg';
import iconeCras from '@/assets/icons/icone-cras.svg';
import iconeCreas from '@/assets/icons/icone-creas.svg';
import iconeBfDetalhes from '@/assets/icons/icone-bf-detalhes.svg';
import iconeCadunicoDetalhes from '@/assets/icons/icone-cadunico-detalhes.svg';
import iconeBpcDetalhes from '@/assets/icons/icone-bpc-detalhes.svg';
import iconeCrasDetalhes from '@/assets/icons/icone-cras-detalhes.svg';
import iconeCreasDetalhes from '@/assets/icons/icone-creas-detalhes.svg';

export const filtrosArea = [
  { id: 'tudo', label: 'Tudo' },
  { id: 'saude', label: 'Saúde' },
  { id: 'educacao', label: 'Educação' },
  { id: 'emprego', label: 'Emprego' },
  { id: 'assistencia-social', label: 'Assistência Social' },
  { id: 'habitacao', label: 'Habitação' },
  { id: 'mobilidade', label: 'Mobilidade' },
  { id: 'seguranca-alimentar', label: 'Segurança Alimentar' },
];

export const politicas = [
  {
    id: 'bolsa-familia',
    icon: iconeBf,
    listIcon: iconeBfDetalhes,
    category: 'ASSISTÊNCIA SOCIAL',
    title: 'Bolsa Família',
    description:
      'Programa de transferência direta de renda com condicionalidades de saúde e educação para famílias.',
    listDescription:
      'Programa de transferência direta de renda com foco em famílias em situação de pobreza.',
    publico: 'Baixa Renda',
    local: 'Nacional',
    areas: ['assistencia-social', 'seguranca-alimentar', 'educacao', 'saude'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'cadunico',
    icon: iconeCadunico,
    listIcon: iconeCadunicoDetalhes,
    category: 'ASSISTÊNCIA SOCIAL',
    title: 'CadÚnico',
    description:
      'Porta de entrada para diversos programas sociais federais, estaduais e municipais.',
    listDescription:
      'O Cadastro Único é a porta de entrada para diversos benefícios federais, estaduais e municipais.',
    publico: 'Vulneráveis',
    local: 'Nacional',
    areas: ['assistencia-social'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'bpc',
    icon: iconeBpc,
    listIcon: iconeBpcDetalhes,
    category: 'ASSISTÊNCIA SOCIAL',
    title: 'BPC',
    description:
      'Benefício de Prestação Continuada para idosos e pessoas com deficiência de baixa renda.',
    listDescription:
      'Benefício de Prestação Continuada para idosos (65+) ou pessoas com deficiência de baixa renda.',
    publico: 'Idosos/PcD',
    local: 'Nacional',
    areas: ['assistencia-social', 'saude'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'cras',
    icon: iconeCras,
    listIcon: iconeCrasDetalhes,
    category: 'ASSISTÊNCIA SOCIAL',
    title: 'CRAS',
    description:
      'Centro de Referência de Assistência Social, a unidade básica do sistema único.',
    listDescription:
      'Centro de Referência de Assistência Social, a unidade pública de atendimento socioassistencial.',
    publico: 'Comunidade',
    local: 'Municipal',
    areas: ['assistencia-social'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'creas',
    icon: iconeCreas,
    listIcon: iconeCreasDetalhes,
    category: 'ASSISTÊNCIA SOCIAL',
    title: 'CREAS',
    description:
      'Centro de Referência Especializado de Assistência Social para situações de violação de direitos.',
    listDescription:
      'Unidade pública que atende famílias e pessoas em situação de risco social ou violação de direitos.',
    publico: 'Especializado',
    local: 'Regional',
    areas: ['assistencia-social'],
    featured: true,
    spanWide: true,
  },
];

export const politicasDestaque = politicas.filter((p) => p.featured);
