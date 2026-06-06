<script setup>
import Botao from '@/components/ui/Botao.vue';
import setaDireita from '@/assets/icons/seta-direita.svg';
</script>

<template>
  <section class="explorar-banner" aria-labelledby="explorar-banner-titulo">
    <span class="explorar-banner__decor explorar-banner__decor--left" aria-hidden="true" />
    <span class="explorar-banner__decor explorar-banner__decor--right" aria-hidden="true" />

    <div class="explorar-banner__content">
      <h2 id="explorar-banner-titulo" class="explorar-banner__title">
        Pronto para começar?
      </h2>
      <p class="explorar-banner__text">
        Navegue pelo catálogo completo e encontre o apoio que você precisa hoje.
      </p>
      <Botao
        variant="primary"
        to="/politicas"
        :icon="setaDireita"
        icon-alt=""
        class="explorar-banner__cta"
      >
        Explore as políticas disponíveis
      </Botao>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.explorar-banner {
  position: relative;
  margin-top: 3rem;
  padding: 3rem 2rem;
  border-radius: 32px;
  background: $bg-secondary;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &__decor {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;

    &--left {
      top: -48px;
      left: -48px;
      width: 256px;
      height: 256px;
      background: rgba(30, 58, 138, 0.06);
    }

    &--right {
      top: -80px;
      right: -80px;
      width: 384px;
      height: 384px;
      background: rgba(85, 178, 162, 0.08);
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
  }

  &__title {
    color: $text-brand-dark;
    font-size: 1.875rem;
    font-weight: 900;
    line-height: 1.2;
  }

  &__text {
    max-width: 574px;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  &__cta {
    margin-top: 1rem;
    min-width: 307px;
  }
}
</style>
