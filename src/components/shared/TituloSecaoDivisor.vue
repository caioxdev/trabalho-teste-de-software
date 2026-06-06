<script setup>
defineProps({
  titulo: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="secao-titulo">
    <h2 :id="id" class="secao-titulo__texto">{{ titulo }}</h2>
    <span class="secao-titulo__linha" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.secao-titulo {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  &__texto {
    flex-shrink: 0;
    color: $text-brand-dark;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
    white-space: nowrap;
  }

  &__linha {
    flex: 1;
    height: 2px;
    min-width: 2rem;
    border-radius: 1px;
    background: rgba(195, 198, 207, 0.6);
  }
}
</style>
