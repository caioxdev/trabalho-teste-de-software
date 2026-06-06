<template>
  <main class="interesses-page">
    <div class="interesses-page__content">
      <CabecalhoInteresses />

      <EstadoVazioInteresses v-if="!interessesStore.temInteresses" />

      <div
        v-else
        class="interesses-page__grid"
      >
        <CardInteressePolitica
          v-for="item in cardsInteresse"
          :key="item.politicaId"
          v-bind="item"
          @remover="removerInteresse(item.politicaId, item.title)"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useToast } from 'vue-toastification';
import { useInteressesStore } from '@/stores/interesses';
import { obterPoliticaPorId } from '@/data/politicas';
import CabecalhoInteresses from '@/components/shared/CabecalhoInteresses.vue';
import EstadoVazioInteresses from '@/components/shared/EstadoVazioInteresses.vue';
import CardInteressePolitica from '@/components/shared/CardInteressePolitica.vue';

const interessesStore = useInteressesStore();
const toast = useToast();

const cardsInteresse = computed(() =>
  interessesStore.lista
    .map((item) => {
      const politica = obterPoliticaPorId(item.politicaId);
      if (!politica) return null;

      return {
        politicaId: politica.id,
        category: politica.category,
        title: politica.title,
        description: politica.interesseDescription,
        dataRegistro: interessesStore.dataRegistroFormatada(politica.id),
        ultimaAtualizacao: interessesStore.ultimaAtualizacaoFormatada(
          politica.id,
        ),
        proximosPassos: politica.proximosPassos,
      };
    })
    .filter(Boolean),
);

function removerInteresse(politicaId, titulo) {
  interessesStore.remover(politicaId);
  toast.info(`Interesse em ${titulo} removido.`);
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.interesses-page {
  flex: 1;
  background: $bg-primary;

  &__content {
    @include padding-main;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
    max-width: 1577px;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1100px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }
  }
}
</style>
