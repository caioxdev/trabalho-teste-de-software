<script setup>
import TituloSecaoDivisor from '@/components/shared/TituloSecaoDivisor.vue';
import CardProgramaSaibaMais from '@/components/shared/CardProgramaSaibaMais.vue';
import { programasSaibaMais } from '@/data/orientacoes';
</script>

<template>
  <section class="saiba-mais" aria-labelledby="saiba-mais-titulo">
    <TituloSecaoDivisor
      id="saiba-mais-titulo"
      titulo="Saiba mais sobre cada programa"
    />
    <div class="saiba-mais__grade">
      <CardProgramaSaibaMais
        v-for="programa in programasSaibaMais"
        :key="programa.id"
        v-bind="programa"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.saiba-mais {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 3rem;

  &__grade {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
  }
}
</style>
