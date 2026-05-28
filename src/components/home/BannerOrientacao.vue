<script setup>
import Botao from '@/components/ui/Botao.vue';
import setaDireita from '@/assets/icons/seta-direita.svg';
</script>

<template>
  <section class="orientation-banner">
    <div class="orientation-banner__content">
      <div class="orientation-banner__text">
        <h2>Não sabe por onde começar?</h2>
        <p>
          Acesse nosso Canal de Orientação ao Cidadão e receba ajuda personalizada.
        </p>
      </div>
      <Botao
        variant="secondary"
        to="/orientacoes"
        :icon="setaDireita"
        icon-alt=""
      >
        Ir para orientações
      </Botao>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/scss/mixins.scss' as *;
@use '@/scss/variables.scss' as *;

.orientation-banner {
  @include padding-main;
  max-width: 1200px;
  margin: 0 auto 4rem;

  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 48px;
    border-radius: 48px;
    background: $card-highlight-gradient;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  &__text {
    max-width: 640px;

    h2 {
      color: #fff;
      font-size: 1.875rem;
      font-weight: 900;
      line-height: 1.2;
    }

    p {
      margin-top: 8px;
      color: #87a4cc;
      font-size: 1.125rem;
      line-height: 1.55;
    }
  }

  :deep(.app-button--secondary) {
    flex-shrink: 0;
    background: #fff;
    color: $text-brand-dark;
  }
}
</style>
