<script setup>
import iconeSeparador from '@/assets/icons/icone-separador.svg';
</script>

<template>
  <header class="orientacoes-header">
    <nav class="orientacoes-header__breadcrumb" aria-label="Navegação">
      <RouterLink to="/home" class="orientacoes-header__crumb">
        Início
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="orientacoes-header__separator">
      <span class="orientacoes-header__crumb orientacoes-header__crumb--active">
        Orientações
      </span>
    </nav>
    <h1 class="orientacoes-header__title">Canal de Orientação ao Cidadão</h1>
    <p class="orientacoes-header__subtitle">
      Entenda o que é cada programa e como acessá-lo
    </p>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.orientacoes-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__crumb {
    color: $text-secondary;
    font-size: $font-sm;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;

    &--active {
      color: $text-brand-dark;
      font-weight: 700;
    }
  }

  &__separator {
    width: 4px;
    height: 6px;
  }

  &__title {
    padding-top: 0.5rem;
    color: $text-brand-dark;
    font-size: clamp(2rem, 5vw, 3.75rem);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  &__subtitle {
    max-width: 672px;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }
}
</style>
