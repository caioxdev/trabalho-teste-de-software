<script setup>
import iconeQuest from '@/assets/icons/icone-n-encontrou-quest.svg';
</script>

<template>
  <article class="cta-card">
    <div class="cta-card__pattern" aria-hidden="true" />
    <img
      :src="iconeQuest"
      alt=""
      class="cta-card__icon"
    >
    <h2 class="cta-card__title">Não encontrou o que procurava?</h2>
    <p class="cta-card__text">
      Use nossa ferramenta de triagem para descobrir políticas recomendadas para você.
    </p>
    <RouterLink to="/orientacoes" class="cta-card__button">
      Iniciar Questionário
    </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.cta-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 46px 32px;
  border-radius: 32px;
  background: $button-primary;
  text-align: center;

  &__pattern {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background:
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }

  &__icon {
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
  }

  &__title {
    position: relative;
    margin-bottom: 8px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.33;
  }

  &__text {
    position: relative;
    max-width: 320px;
    margin-bottom: 24px;
    color: rgba(135, 164, 204, 0.8);
    font-size: $font-md;
    line-height: 1.5;
  }

  &__button {
    position: relative;
    padding: 12px 32px;
    border-radius: 9999px;
    background: #fff;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 900;
    text-decoration: none;
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.92;
    }
  }
}
</style>
