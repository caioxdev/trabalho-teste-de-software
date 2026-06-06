<script setup>
import iconeSeparador from '@/assets/icons/icone-separador.svg';
</script>

<template>
  <header class="politicas-header">
    <nav class="politicas-header__breadcrumb" aria-label="Navegação">
      <RouterLink to="/home" class="politicas-header__crumb">
        Início
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="politicas-header__separator">
      <span class="politicas-header__crumb politicas-header__crumb--active">
        Políticas
      </span>
    </nav>
    <h1 class="politicas-header__title">Políticas Públicas Disponíveis</h1>
    <p class="politicas-header__subtitle">
      Encontre o programa certo para o seu perfil e situação. O Portal
      Cidadão facilita o acesso aos seus direitos fundamentais.
    </p>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.politicas-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 0.5rem;

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
    font-size: 1.25rem;
    line-height: 1.625;
  }
}
</style>
