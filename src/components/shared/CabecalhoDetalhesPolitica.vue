<script setup>
import { useRouter } from 'vue-router';
import iconeSeparador from '@/assets/icons/icone-separador.svg';

defineProps({
  titulo: {
    type: String,
    required: true,
  },
});

const router = useRouter();

function voltar() {
  if (window.history.length > 1) {
    router.back();
    return;
  }
  router.push('/politicas');
}
</script>

<template>
  <div class="detalhes-nav">
    <button type="button" class="detalhes-nav__back" aria-label="Voltar" @click="voltar">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.825 9H16V7H3.825L9.425 1.4L8 0L0 8L8 16L9.425 14.6L3.825 9Z" fill="currentColor" />
      </svg>
    </button>
    <nav class="detalhes-nav__breadcrumb" aria-label="Navegação">
      <RouterLink to="/home" class="detalhes-nav__crumb">
        Início
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="detalhes-nav__separator">
      <RouterLink to="/politicas" class="detalhes-nav__crumb">
        Políticas
      </RouterLink>
      <img :src="iconeSeparador" alt="" class="detalhes-nav__separator">
      <span class="detalhes-nav__crumb detalhes-nav__crumb--active">
        {{ titulo }}
      </span>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.detalhes-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: $bg-secondary;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    cursor: pointer;

    img {
      width: 14px;
      height: 14px;
    }
  }

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
}
</style>
