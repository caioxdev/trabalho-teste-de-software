import { politicas, filtrosArea } from '@/data/politicas';
import adminBf from '@/assets/icons/admin-bf.svg';
import adminCadunico from '@/assets/icons/admin-cadunico.svg';
import adminBpc from '@/assets/icons/admin-bpc.svg';
import adminCras from '@/assets/icons/admin-cras.svg';
import adminCreas from '@/assets/icons/admin-creas.svg';

const iconesAdmin = {
  'bolsa-familia': adminBf,
  cadunico: adminCadunico,
  bpc: adminBpc,
  cras: adminCras,
  creas: adminCreas,
};

export const categoriasPolitica = filtrosArea
  .filter((f) => f.id !== 'tudo')
  .map((f) => f.label.toUpperCase());

export const politicasAdminInicial = politicas.map((politica) => ({
  id: politica.id,
  titulo: politica.title,
  categoria: politica.category,
  publicoAlvo: politica.publico,
  descricao: politica.listDescription,
  documentos: politica.documentos?.join(', ') ?? '',
  orgao: politica.orgao ?? '',
  prazo: politica.prazo ?? '',
  criterios: politica.criterios?.join('\n') ?? '',
  icone: iconesAdmin[politica.id],
}));

export function criarSlug(titulo) {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function politicaParaFormulario(politica) {
  if (!politica) return {};

  return {
    nome: politica.titulo ?? politica.title ?? '',
    categoria: politica.categoria ?? politica.category ?? categoriasPolitica[0],
    publicoAlvo: politica.publicoAlvo ?? politica.publico ?? '',
    descricao: politica.descricao ?? politica.listDescription ?? politica.description ?? '',
    documentos: Array.isArray(politica.documentos)
      ? politica.documentos.join(', ')
      : (politica.documentos ?? ''),
    orgao: politica.orgao ?? '',
    prazo: politica.prazo ?? '',
    criterios: Array.isArray(politica.criterios)
      ? politica.criterios.join('\n')
      : (politica.criterios ?? ''),
  };
}
