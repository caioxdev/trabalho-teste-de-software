<script setup>
import iconeEditar from '@/assets/icons/admin-editar.svg';
import iconeExcluir from '@/assets/icons/admin-excluir.svg';

defineProps({
  id: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  icone: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['editar', 'excluir']);
</script>

<template>
  <article class="admin-item">
    <div class="admin-item__info">
      <div class="admin-item__icon-wrap">
        <img :src="icone" :alt="titulo" class="admin-item__icon">
      </div>
      <div class="admin-item__texto">
        <h2 class="admin-item__titulo">{{ titulo }}</h2>
        <span class="admin-item__categoria">{{ categoria }}</span>
      </div>
    </div>

    <div class="admin-item__acoes">
      <button
        type="button"
        class="admin-item__acao"
        @click="emit('editar', id)"
      >
        <img :src="iconeEditar" alt="">
        Editar
      </button>
      <button
        type="button"
        class="admin-item__acao admin-item__acao--excluir"
        @click="emit('excluir', id)"
      >
        <img :src="iconeExcluir" alt="">
        Excluir
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.admin-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 128px;
  padding: 2rem;

  &__info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 16px;
    background: rgba(0, 36, 68, 0.05);
  }

  &__icon {
    max-width: 28px;
    max-height: 28px;
  }

  &__texto {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__titulo {
    color: $text-brand-dark;
    font-size: 1.125rem;
    font-weight: 800;
    line-height: 1.3;
  }

  &__categoria {
    display: inline-flex;
    align-self: flex-start;
    padding: 4px 16px;
    border-radius: 9999px;
    background: rgba(0, 65, 57, 0.1);
    color: $text-accent;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__acoes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }

  &__acao {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    border: none;
    background: transparent;
    color: $text-brand-dark;
    font-family: inherit;
    font-size: $font-md;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.15s ease;

    img {
      width: 14px;
      height: 14px;
    }

    &:hover {
      opacity: 0.75;
    }

    &--excluir {
      color: #b42318;

      &:hover {
        opacity: 0.85;
      }
    }
  }
}
</style>
