<script setup>
import iconeSeparador from '@/assets/icons/icone-separador.svg';

defineProps({
  modoEdicao: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <header class="cadastrar-header">
    <nav class="cadastrar-header__breadcrumb" aria-label="Navegação">
      <RouterLink to="/gerenciar-politicas" class="cadastrar-header__crumb">
        Início
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="cadastrar-header__separator">
      <RouterLink to="/gerenciar-politicas" class="cadastrar-header__crumb">
        Gerenciar Políticas
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="cadastrar-header__separator">
      <span class="cadastrar-header__crumb cadastrar-header__crumb--active">
        {{ modoEdicao ? 'Editar' : 'Cadastrar' }}
      </span>
    </nav>

    <h1 class="cadastrar-header__title">
      {{ modoEdicao ? 'Editar Política' : 'Cadastrar Nova Política' }}
    </h1>
    <p class="cadastrar-header__subtitle">
      {{
        modoEdicao
          ? 'Atualize as informações da política selecionada no catálogo do portal.'
          : 'Preencha as informações necessárias para disponibilizar um novo programa no catálogo do portal.'
      }}
    </p>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.cadastrar-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__breadcrumb {
    display: flex;
    flex-wrap: wrap;
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
    padding-top: 0.25rem;
    color: $text-brand-dark;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1.1;
  }

  &__subtitle {
    max-width: 42rem;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }
}
</style>
