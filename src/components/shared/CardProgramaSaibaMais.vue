<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  icone: {
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
  <RouterLink
    :to="`/politicas/${id}`"
    class="programa-card"
    :class="{ 'programa-card--wide': spanWide }"
  >
    <div class="programa-card__icon-wrap">
      <img :src="icone" :alt="titulo" class="programa-card__icon">
    </div>
    <div class="programa-card__texto">
      <h3 class="programa-card__titulo">{{ titulo }}</h3>
      <p class="programa-card__descricao">{{ descricao }}</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.programa-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: 24px;
  background: $bg-secondary;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 36, 68, 0.08);
    transform: translateY(-2px);
  }

  &--wide {
    @media (min-width: 900px) {
      grid-column: 1 / -1;
    }
  }

  &__icon-wrap {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 44px;
    border-radius: 12px;
    background: rgba(0, 36, 68, 0.05);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  }

  &__icon {
    max-width: 22px;
    max-height: 22px;
  }

  &__texto {
    flex: 1;
    min-width: 0;
  }

  &__titulo {
    color: $text-brand-dark;
    font-size: 1.125rem;
    font-weight: 800;
    line-height: 1.3;
  }

  &__descricao {
    margin-top: 0.5rem;
    color: $text-secondary;
    font-size: $font-md;
    line-height: 1.5;
  }
}
</style>
