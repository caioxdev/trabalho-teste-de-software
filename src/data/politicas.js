import iconeBf from '@/assets/icons/icone-bf.svg';
import iconeCadunico from '@/assets/icons/icone-cadunico.svg';
import iconeBpc from '@/assets/icons/icone-bpc.svg';
import iconeCras from '@/assets/icons/icone-cras.svg';
import iconeCreas from '@/assets/icons/icone-creas.svg';

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
    category: 'ASSISTÊNCIA SOCIAL',
    title: 'Bolsa Família',
    description:
      'Programa de transferência direta de renda com condicionalidades de saúde e educação para famílias.',
    areas: ['assistencia-social', 'seguranca-alimentar', 'educacao', 'saude'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'cadunico',
    icon: iconeCadunico,
    category: 'CADASTRO ÚNICO',
    title: 'CadÚnico',
    description:
      'Porta de entrada para diversos programas sociais federais, estaduais e municipais.',
    areas: ['assistencia-social'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'bpc',
    icon: iconeBpc,
    category: 'PREVIDÊNCIA',
    title: 'BPC',
    description:
      'Benefício de Prestação Continuada para idosos e pessoas com deficiência de baixa renda.',
    areas: ['assistencia-social', 'saude'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'cras',
    icon: iconeCras,
    category: 'PROTEÇÃO BÁSICA',
    title: 'CRAS',
    description:
      'Centro de Referência de Assistência Social, a unidade básica do sistema único.',
    areas: ['assistencia-social'],
    featured: true,
    spanWide: false,
  },
  {
    id: 'creas',
    icon: iconeCreas,
    category: 'PROTEÇÃO ESPECIAL',
    title: 'CREAS',
    description:
      'Centro de Referência Especializado de Assistência Social para situações de violação de direitos.',
    areas: ['assistencia-social'],
    featured: true,
    spanWide: true,
  },
];

export const politicasDestaque = politicas.filter((p) => p.featured);
