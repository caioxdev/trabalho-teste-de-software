<script setup>
import Botao from '@/components/ui/Botao.vue';

defineProps({
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
});

const emit = defineEmits(['registrar-interesse']);
</script>

<template>
  <header class="detalhes-hero">
    <span class="detalhes-hero__category">{{ category }}</span>
    <div class="detalhes-hero__row">
      <div class="detalhes-hero__text">
        <h1 class="detalhes-hero__title">{{ title }}</h1>
        <p class="detalhes-hero__description">{{ description }}</p>
      </div>
      <Botao
        variant="primary"
        type="button"
        class="detalhes-hero__cta"
        @click="emit('registrar-interesse')"
      >
        Registrar Interesse
      </Botao>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.detalhes-hero {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__category {
    display: inline-flex;
    align-self: flex-start;
    padding: 6px 16px;
    border-radius: 9999px;
    background: rgba(0, 65, 57, 0.1);
    color: $text-accent;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem 2rem;
  }

  &__text {
    flex: 1;
    min-width: min(100%, 20rem);
    max-width: 41rem;
  }

  &__title {
    color: $text-brand-dark;
    font-size: clamp(2rem, 4vw, 3.75rem);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  &__description {
    margin-top: 1rem;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  &__cta {
    flex-shrink: 0;
    min-width: 246px;
    padding: 1rem 2.5rem;
    font-size: $font-md;
  }
}
</style>
