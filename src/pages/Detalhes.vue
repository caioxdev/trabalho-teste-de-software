<template>
  <section class="detalhes">
    <h1>{{ politica?.title ?? 'Política' }}</h1>
    <p v-if="politica">{{ politica.description }}</p>
    <p v-else>Política não encontrada.</p>
    <RouterLink to="/politicas">Voltar para políticas</RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { politicas } from '@/data/politicas';

const route = useRoute();

const politica = computed(() =>
  politicas.find((p) => p.id === route.params.id),
);
</script>

<style lang="scss" scoped>
@use '@/scss/mixins.scss' as *;
@use '@/scss/variables.scss' as *;

.detalhes {
  @include padding-main;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h1 {
    color: $text-primary;
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    margin: 1rem 0 2rem;
    color: $text-secondary;
    max-width: 48rem;
    line-height: 1.5;
  }

  a {
    color: $text-brand-dark;
    font-weight: 700;
  }
}
</style>
