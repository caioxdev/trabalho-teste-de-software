<script setup>
import { RouterLink } from 'vue-router';
import iconeSeparador from '@/assets/icons/icone-separador.svg';
import iconeCadastrarPoliticas from '@/assets/icons/admin-cadastar-politicas.svg';
</script>

<template>
  <header class="gerenciar-header">
    <nav class="gerenciar-header__breadcrumb" aria-label="Navegação">
      <RouterLink to="/gerenciar-politicas" class="gerenciar-header__crumb">
        Início
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="gerenciar-header__separator">
      <span class="gerenciar-header__crumb gerenciar-header__crumb--active">
        Gerenciar Políticas
      </span>
    </nav>

    <div class="gerenciar-header__row">
      <div class="gerenciar-header__texto">
        <h1 class="gerenciar-header__title">Gerenciamento de Políticas</h1>
        <p class="gerenciar-header__subtitle">
          Visualize, edite e exclua as políticas cadastradas no portal
        </p>
      </div>
      <RouterLink to="/cadastrar-politicas" class="gerenciar-header__btn">
        <img :src="iconeCadastrarPoliticas" alt="">
        Cadastrar Nova Política
      </RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.gerenciar-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
  }

  &__title {
    color: $text-brand-dark;
    font-size: clamp(1.75rem, 4vw, 3rem);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  &__subtitle {
    margin-top: 0.75rem;
    max-width: 28rem;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    padding: 1rem 2rem;
    border-radius: 48px;
    background: $button-primary;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: $font-md;
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.15s ease;

    img {
      width: 20px;
      height: 20px;
      filter: brightness(0) invert(1);
    }

    &:hover {
      opacity: 0.92;
    }
  }
}
</style>
