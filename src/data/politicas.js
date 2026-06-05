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
    detailDescription:
      'Programa de transferência de renda que garante segurança alimentar e dignidade para famílias em situação de vulnerabilidade.',
    publicoChips: ['Baixa Renda', 'Nacional', 'CadÚnico'],
    criterios: [
      'Ter renda familiar per capita de até R$ 218,00 (valor referência).',
      'Estar inscrito no Cadastro Único (CadÚnico) com dados atualizados.',
      'Cumprir compromissos nas áreas de saúde e educação.',
    ],
    documentos: [
      'Documento de identificação com foto (RG ou CNH).',
      'Comprovante de residência atualizado.',
      'Certidão de nascimento dos dependentes.',
    ],
    orgao: 'Ministério do Desenvolvimento e Assistência Social',
    prazo: 'Inscrições abertas o ano todo',
    cobertura: 'Cobertura Nacional',
    interesseDescription:
      'Programa de transferência de renda para famílias em situação de pobreza. Oferece suporte financeiro e acesso a serviços de saúde e educação.',
    proximosPassos: [
      'Mantenha seu CadÚnico atualizado no CRAS mais próximo da sua residência.',
      'Acompanhe o calendário de pagamentos e as condicionalidades de saúde e educação.',
    ],
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
    detailDescription:
      'Cadastro único que identifica e caracteriza famílias de baixa renda para acesso a programas sociais em todo o país.',
    publicoChips: ['Vulneráveis', 'Nacional', 'Famílias'],
    criterios: [
      'Residir no território nacional.',
      'Apresentar documentação da família e comprovante de residência.',
      'Atualizar os dados a cada dois anos ou quando houver mudança na composição familiar.',
    ],
    documentos: [
      'Documento de identificação com foto de todos os membros.',
      'CPF ou certidão de nascimento dos integrantes.',
      'Comprovante de residência.',
    ],
    orgao: 'Ministério do Desenvolvimento e Assistência Social',
    prazo: 'Atendimento contínuo nos CRAS',
    cobertura: 'Cobertura Nacional',
    interesseDescription:
      'Cadastro que identifica famílias de baixa renda e é exigido para acesso a diversos benefícios sociais federais.',
    proximosPassos: [
      'Procure o CRAS do seu município com documentos da família.',
      'Atualize o cadastro sempre que houver mudança na composição familiar.',
    ],
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
    detailDescription:
      'Benefício de um salário mínimo mensal para idosos com 65 anos ou mais e pessoas com deficiência de baixa renda.',
    publicoChips: ['Idosos 65+', 'PcD', 'Nacional'],
    criterios: [
      'Ter 65 anos ou mais, ou comprovar deficiência de longo prazo.',
      'Renda familiar per capita inferior a 1/4 do salário mínimo.',
      'Não receber outro benefício previdenciário ou assistencial.',
    ],
    documentos: [
      'Documento de identificação com foto (RG ou CNH).',
      'CPF e comprovante de residência.',
      'Laudo médico (para pessoas com deficiência).',
    ],
    orgao: 'Instituto Nacional do Seguro Social (INSS)',
    prazo: 'Inscrições abertas o ano todo',
    cobertura: 'Cobertura Nacional',
    interesseDescription:
      'Benefício mensal de um salário mínimo para idosos e pessoas com deficiência em situação de vulnerabilidade econômica.',
    proximosPassos: [
      'Reúna laudos médicos e documentos de renda da família, se aplicável.',
      'Solicite o benefício pelo Meu INSS ou em uma agência da Previdência Social.',
    ],
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
    detailDescription:
      'Unidade pública de referência para o atendimento socioassistencial à população em situação de vulnerabilidade.',
    publicoChips: ['Comunidade', 'Municipal', 'Famílias'],
    criterios: [
      'Residir no território de abrangência do CRAS.',
      'Buscar informação, orientação ou encaminhamento para serviços sociais.',
      'Não há exigência de renda para o primeiro atendimento.',
    ],
    documentos: [
      'Documento de identificação com foto.',
      'Comprovante de residência (quando disponível).',
      'Cadastro no CadÚnico, se já realizado.',
    ],
    orgao: 'Prefeitura Municipal / Secretaria de Assistência Social',
    prazo: 'Atendimento presencial de segunda a sexta',
    cobertura: 'Cobertura Municipal',
    interesseDescription:
      'Unidade de referência para orientação, encaminhamento e acompanhamento de famílias em situação de vulnerabilidade.',
    proximosPassos: [
      'Localize o CRAS mais próximo e agende um atendimento socioassistencial.',
      'Leve documentos pessoais e comprovante de residência, se possível.',
    ],
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
    detailDescription:
      'Unidade especializada que oferece proteção e atendimento a famílias e indivíduos em situação de violação de direitos.',
    publicoChips: ['Especializado', 'Regional', 'Violência'],
    criterios: [
      'Estar em situação de violação de direitos ou risco social grave.',
      'Ser encaminhado pelo CRAS, Conselho Tutelar ou rede de proteção.',
      'Atendimento mediante avaliação técnica da equipe.',
    ],
    documentos: [
      'Documento de identificação da pessoa atendida.',
      'Relato ou encaminhamento da rede de proteção (quando houver).',
      'Termo de acolhida assinado pela equipe técnica.',
    ],
    orgao: 'Prefeitura Municipal / Secretaria de Assistência Social',
    prazo: 'Atendimento de segunda a sexta, com plantão conforme município',
    cobertura: 'Cobertura Regional',
    interesseDescription:
      'Atendimento especializado para famílias e indivíduos em situação de violação de direitos ou risco social grave.',
    proximosPassos: [
      'Procure o CREAS da sua região ou solicite encaminhamento pelo CRAS.',
      'Em situação de risco imediato, acione também os canais de proteção (190, 100).',
    ],
  },
];

export function obterPoliticaPorId(id) {
  return politicas.find((p) => p.id === id);
}

export const politicasDestaque = politicas.filter((p) => p.featured);
