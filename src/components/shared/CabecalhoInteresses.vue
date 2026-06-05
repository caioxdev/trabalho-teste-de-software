<script setup>
import iconeSeparador from '@/assets/icons/icone-separador.svg';
</script>

<template>
  <header class="interesses-header">
    <nav class="interesses-header__breadcrumb" aria-label="Navegação">
      <RouterLink to="/home" class="interesses-header__crumb">
        Início
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="interesses-header__separator">
      <span class="interesses-header__crumb interesses-header__crumb--active">
        Interesse
      </span>
    </nav>
    <h1 class="interesses-header__title">Meus Interesses</h1>
    <p class="interesses-header__subtitle">
      Acompanhe as políticas públicas que você demonstrou interesse
    </p>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.interesses-header {
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
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  &__subtitle {
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }
}
</style>
