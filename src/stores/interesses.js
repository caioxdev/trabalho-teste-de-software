import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

const STORAGE_KEY = 'portal-interesses';

function carregarPorUsuario() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function formatarData(iso) {
  const data = new Date(iso);
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export const useInteressesStore = defineStore('interesses', () => {
  const porUsuario = ref(carregarPorUsuario());

  const chaveUsuario = computed(() => {
    const auth = useAuthStore();
    return auth.user?.email ?? 'anonimo';
  });

  const lista = computed(() => porUsuario.value[chaveUsuario.value] ?? []);

  const temInteresses = computed(() => lista.value.length > 0);

  function persistir() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(porUsuario.value));
  }

  function registrar(politicaId) {
    const chave = chaveUsuario.value;
    const atual = porUsuario.value[chave] ?? [];
    const existente = atual.find((i) => i.politicaId === politicaId);

    if (existente) {
      existente.ultimaAtualizacao = new Date().toISOString();
    } else {
      const agora = new Date().toISOString();
      atual.push({
        politicaId,
        dataRegistro: agora,
        ultimaAtualizacao: agora,
      });
    }

    porUsuario.value = { ...porUsuario.value, [chave]: [...atual] };
    persistir();
  }

  function remover(politicaId) {
    const chave = chaveUsuario.value;
    const atual = (porUsuario.value[chave] ?? []).filter(
      (i) => i.politicaId !== politicaId,
    );
    porUsuario.value = { ...porUsuario.value, [chave]: atual };
    persistir();
  }

  function possuiInteresse(politicaId) {
    return lista.value.some((i) => i.politicaId === politicaId);
  }

  function dataRegistroFormatada(politicaId) {
    const item = lista.value.find((i) => i.politicaId === politicaId);
    return item ? formatarData(item.dataRegistro) : '';
  }

  function ultimaAtualizacaoFormatada(politicaId) {
    const item = lista.value.find((i) => i.politicaId === politicaId);
    return item ? formatarData(item.ultimaAtualizacao) : '';
  }

  return {
    lista,
    temInteresses,
    registrar,
    remover,
    possuiInteresse,
    dataRegistroFormatada,
    ultimaAtualizacaoFormatada,
  };
});
