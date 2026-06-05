import { politicas } from '@/data/politicas';
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

export const politicasAdminInicial = politicas.map((politica) => ({
  id: politica.id,
  titulo: politica.title,
  categoria: politica.category,
  icone: iconesAdmin[politica.id],
}));
