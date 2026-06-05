<template>
  <main class="orientacoes-page">
    <div class="orientacoes-page__content">
      <CabecalhoOrientacoes />
      <SecaoComoUsarPortal />
      <SecaoSaibaMaisProgramas />
      <BannerExplorarPoliticas />
    </div>
  </main>
</template>

<script setup>
import CabecalhoOrientacoes from '@/components/shared/CabecalhoOrientacoes.vue';
import SecaoComoUsarPortal from '@/components/shared/SecaoComoUsarPortal.vue';
import SecaoSaibaMaisProgramas from '@/components/shared/SecaoSaibaMaisProgramas.vue';
import BannerExplorarPoliticas from '@/components/shared/BannerExplorarPoliticas.vue';
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.orientacoes-page {
  flex: 1;
  background: $bg-primary;

  &__content {
    @include padding-main;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1568px;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
}
</style>
