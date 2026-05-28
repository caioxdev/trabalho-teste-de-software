<script setup>
import setaDireita from '@/assets/icons/seta-direita.svg';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  linkTo: {
    type: [String, Object],
    default: null,
  },
  linkLabel: {
    type: String,
    default: 'Ver todas as políticas',
  },
});
</script>

<template>
  <div class="section-header">
    <div class="section-header__text">
      <h2 class="section-header__title">{{ title }}</h2>
      <p v-if="description" class="section-header__description">{{ description }}</p>
    </div>
    <RouterLink
      v-if="linkTo"
      :to="linkTo"
      class="section-header__link"
    >
      {{ linkLabel }}
      <img :src="setaDireita" alt="">
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.section-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;

  &__title {
    color: $text-primary;
    font-size: 2.25rem;
    font-weight: 900;
    letter-spacing: -0.9px;
    line-height: 1.1;
  }

  &__description {
    margin-top: 1rem;
    max-width: 672px;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 700;
    text-decoration: none;

    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
