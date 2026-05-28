<script setup>
import CabecalhoSecao from '@/components/CabecalhoSecao.vue';
import CardPolitica from '@/components/CardPolitica.vue';

defineProps({
  policies: {
    type: Array,
    required: true,
  },
  verTodasTo: {
    type: [String, Object],
    default: '/politicas',
  },
});
</script>

<template>
  <section class="featured-policies">
    <CabecalhoSecao
      title="Políticas em Destaque"
      description="Acompanhe os principais programas ativos e saiba como acessar os benefícios disponíveis para sua família."
      :link-to="verTodasTo"
    />
    <div
      v-if="policies.length"
      class="featured-policies__grid"
    >
      <CardPolitica
        v-for="policy in policies"
        :key="policy.id"
        v-bind="policy"
      />
    </div>
    <p v-else class="featured-policies__empty">
      Nenhuma política encontrada para os filtros selecionados.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.featured-policies {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  padding: 6rem 1.5rem;
  border-radius: 32px;
  background-color: $bg-secondary;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__empty {
    color: $text-secondary;
    font-size: $font-md;
    text-align: center;
    padding: 2rem;
  }
}
</style>
