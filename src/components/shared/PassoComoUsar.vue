<script setup>
defineProps({
  numero: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="passo-card">
    <span class="passo-card__decor" aria-hidden="true" />
    <span class="passo-card__numero">{{ numero }}</span>
    <h3 class="passo-card__titulo">{{ titulo }}</h3>
    <p class="passo-card__descricao">{{ descricao }}</p>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.passo-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 288px;
  padding: 2rem;
  border-radius: 24px;
  background: $bg-secondary;
  box-shadow: 
    -20px -20px 40px 0 #FFF inset, 
    -20px -20px 40px 0 #FFF, 
    20px 20px 40px 0 rgba(0, 0, 0, 0.15) inset, 
    20px 20px 40px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &__decor {
    position: absolute;
    top: -16px;
    right: -16px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: rgba(30, 58, 138, 0.06);
    pointer-events: none;
  }

  &__numero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: $card-highlight-gradient;
    box-shadow: 0 4px 12px rgba(0, 36, 68, 0.15);
    color: #fff;
    font-size: 1.125rem;
    font-weight: 800;
  }

  &__titulo {
    margin-top: 1.5rem;
    color: $text-brand-dark;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.25;
  }

  &__descricao {
    margin-top: 1.5rem;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }
}
</style>
