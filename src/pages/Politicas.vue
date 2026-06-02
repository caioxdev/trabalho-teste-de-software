<template>
  <main class="politicas-page">
    <div class="politicas-page__content">
      <CabecalhoPoliticas />

      <BarraFiltroPoliticas
        :filtro-label="filtroAtivoLabel"
        @alterar-filtros="modalAberto = true"
      />

      <div
        v-if="politicasFiltradas.length"
        class="politicas-page__grid"
      >
        <CardPoliticaLista
          v-for="policy in politicasFiltradas"
          :key="policy.id"
          v-bind="policy"
        />
        <CardCTAQuestionario class="politicas-page__cta" />
      </div>

      <p v-else class="politicas-page__empty">
        Nenhuma política encontrada para os filtros selecionados.
      </p>
    </div>

    <ModalFiltroPoliticas
      :open="modalAberto"
      :busca="busca"
      :area="filtroArea"
      @close="modalAberto = false"
      @apply="aplicarFiltros"
      @clear="limparFiltros"
    />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { politicas, filtrosArea } from '@/data/politicas';
import CabecalhoPoliticas from '@/components/shared/CabecalhoPoliticas.vue';
import BarraFiltroPoliticas from '@/components/shared/BarraFiltroPoliticas.vue';
import CardPoliticaLista from '@/components/shared/CardPoliticaLista.vue';
import CardCTAQuestionario from '@/components/shared/CardCTAQuestionario.vue';
import ModalFiltroPoliticas from '@/components/shared/ModalFiltroPoliticas.vue';

const busca = ref('');
const filtroArea = ref('assistencia-social');
const modalAberto = ref(false);

const filtroAtivoLabel = computed(() => {
  const opcao = filtrosArea.find((f) => f.id === filtroArea.value);
  return opcao?.label ?? 'Todas';
});

const politicasFiltradas = computed(() => {
  let lista = politicas;

  if (filtroArea.value !== 'tudo') {
    lista = lista.filter((p) => p.areas.includes(filtroArea.value));
  }

  const termo = busca.value.trim().toLowerCase();
  if (termo) {
    lista = lista.filter(
      (p) =>
        p.title.toLowerCase().includes(termo) ||
        p.listDescription.toLowerCase().includes(termo) ||
        p.category.toLowerCase().includes(termo),
    );
  }

  return lista;
});

function aplicarFiltros({ busca: novaBusca, area }) {
  busca.value = novaBusca;
  filtroArea.value = area;
}

function limparFiltros() {
  busca.value = '';
  filtroArea.value = 'tudo';
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.politicas-page {
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

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__cta {
    @media (min-width: 900px) {
      grid-column: 2;
      grid-row: 3;
    }
  }

  &__empty {
    padding: 3rem;
    color: $text-secondary;
    font-size: $font-md;
    text-align: center;
  }
}
</style>
