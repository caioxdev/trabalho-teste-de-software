<script setup>
import Botao from '@/components/Botao.vue';

defineProps({
  id: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  spanWide: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <article
    class="policy-card"
    :class="{ 'policy-card--wide': spanWide }"
  >
    <div class="policy-card__icon-wrap">
      <img :src="icon" :alt="title" class="policy-card__icon">
    </div>
    <span class="policy-card__category">{{ category }}</span>
    <h3 class="policy-card__title">{{ title }}</h3>
    <p class="policy-card__description">{{ description }}</p>
    <Botao
      variant="card"
      :to="`/politicas/${id}`"
    >
      Ver detalhes
    </Botao>
  </article>
</template>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.policy-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  border-radius: 32px;
  background: $card-bg;
  height: 100%;

  &--wide {
    @media (min-width: 900px) {
      grid-column: span 2;
    }
  }

  &__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin-bottom: 24px;
    border-radius: 16px;
    background: rgba(0, 36, 68, 0.05);
  }

  &__icon {
    max-width: 28px;
    max-height: 28px;
  }

  &__category {
    margin-bottom: 8px;
    color: $text-accent;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &__title {
    margin-bottom: 16px;
    color: $text-primary;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }

  &__description {
    flex: 1;
    margin-bottom: 32px;
    color: $text-secondary;
    font-size: $font-md;
    line-height: 1.5;
  }
}
</style>
