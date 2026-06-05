<template>
  <main class="gerenciar-page">
    <div class="gerenciar-page__content">
      <CabecalhoGerenciarPoliticas />
      <ListaPoliticasAdmin
        :politicas="politicasAdmin.lista"
        @editar="editarPolitica"
        @excluir="confirmarExclusao"
      />
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { usePoliticasAdminStore } from '@/stores/politicasAdmin';
import CabecalhoGerenciarPoliticas from '@/components/shared/CabecalhoGerenciarPoliticas.vue';
import ListaPoliticasAdmin from '@/components/shared/ListaPoliticasAdmin.vue';

const router = useRouter();
const toast = useToast();
const politicasAdmin = usePoliticasAdminStore();

function editarPolitica(id) {
  router.push({ path: '/cadastrar-politicas', query: { id } });
}

function confirmarExclusao(id) {
  const politica = politicasAdmin.lista.find((p) => p.id === id);
  if (!politica) return;

  const confirmado = window.confirm(
    `Deseja excluir a política "${politica.titulo}"? Esta ação não pode ser desfeita.`,
  );

  if (!confirmado) return;

  politicasAdmin.remover(id);
  toast.success(`Política "${politica.titulo}" excluída.`);
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.gerenciar-page {
  flex: 1;
  background: $bg-primary;

  &__content {
    @include padding-main;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
    max-width: 1568px;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
}
</style>
