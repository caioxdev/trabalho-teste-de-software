import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  politicasAdminInicial,
  criarSlug,
} from '@/data/politicasAdmin';
import adminBf from '@/assets/icons/admin-bf.svg';

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

  function obterPorId(id) {
    return lista.value.find((p) => p.id === id) ?? null;
  }

  function remover(id) {
    lista.value = lista.value.filter((p) => p.id !== id);
    persistir();
  }

  function salvar(dados, idExistente = null) {
    const id = idExistente ?? criarSlug(dados.nome);
    const existente = lista.value.find((p) => p.id === id);
    const registro = {
      id,
      titulo: dados.nome,
      categoria: dados.categoria,
      publicoAlvo: dados.publicoAlvo,
      descricao: dados.descricao,
      documentos: dados.documentos,
      orgao: dados.orgao,
      prazo: dados.prazo,
      criterios: dados.criterios,
      icone: existente?.icone ?? adminBf,
    };

    if (existente) {
      lista.value = lista.value.map((p) => (p.id === id ? registro : p));
    } else {
      lista.value = [...lista.value, registro];
    }

    persistir();
    return id;
  }

  function restaurarPadrao() {
    lista.value = [...politicasAdminInicial];
    persistir();
  }

  return {
    lista,
    obterPorId,
    remover,
    salvar,
    restaurarPadrao,
  };
});
