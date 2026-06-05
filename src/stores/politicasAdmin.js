import { defineStore } from 'pinia';
import { ref } from 'vue';
import { politicasAdminInicial } from '@/data/politicasAdmin';

const STORAGE_KEY = 'portal-politicas-admin';

function carregarLista() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignora JSON inválido
  }
  return [...politicasAdminInicial];
}

export const usePoliticasAdminStore = defineStore('politicasAdmin', () => {
  const lista = ref(carregarLista());

  function persistir() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista.value));
  }

  function remover(id) {
    lista.value = lista.value.filter((p) => p.id !== id);
    persistir();
  }

  function restaurarPadrao() {
    lista.value = [...politicasAdminInicial];
    persistir();
  }

  return {
    lista,
    remover,
    restaurarPadrao,
  };
});
