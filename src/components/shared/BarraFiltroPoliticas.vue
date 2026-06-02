<script setup>
import iconeFiltros from '@/assets/icons/icone-filtros.svg';

defineProps({
  filtroLabel: {
    type: String,
    required: true,
  },
});

defineEmits(['alterar-filtros']);
</script>

<template>
  <section class="filter-bar" aria-label="Filtros ativos">
    <div class="filter-bar__active">
      <span class="filter-bar__label">Mostrando:</span>
      <span class="filter-bar__chip">{{ filtroLabel }}</span>
    </div>
    <button
      type="button"
      class="filter-bar__action"
      @click="$emit('alterar-filtros')"
    >
      <img :src="iconeFiltros" alt="">
      Alterar filtros
    </button>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-radius: 32px;

  &__active {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  &__label {
    color: $text-secondary;
    font-size: $font-sm;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &__chip {
    padding: 4px 16px;
    border-radius: 9999px;
    background: #e1e3e4;
    color: $text-brand-dark;
    font-size: $font-sm;
    font-weight: 600;
  }

  &__action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    color: $text-brand-dark;
    font-family: inherit;
    font-size: $font-md;
    font-weight: 700;
    cursor: pointer;

    img {
      width: 14px;
      height: 9px;
    }

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>
