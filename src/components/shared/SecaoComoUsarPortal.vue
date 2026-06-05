<script setup>
import TituloSecaoDivisor from '@/components/shared/TituloSecaoDivisor.vue';
import PassoComoUsar from '@/components/shared/PassoComoUsar.vue';
import { passosComoUsar } from '@/data/orientacoes';
</script>

<template>
  <section class="como-usar" aria-labelledby="como-usar-titulo">
    <TituloSecaoDivisor
      id="como-usar-titulo"
      titulo="Como usar o portal"
    />
    <div class="como-usar__passos">
      <PassoComoUsar
        v-for="passo in passosComoUsar"
        :key="passo.numero"
        v-bind="passo"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.como-usar {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 2rem;

  &__passos {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
    }
  }
}
</style>
