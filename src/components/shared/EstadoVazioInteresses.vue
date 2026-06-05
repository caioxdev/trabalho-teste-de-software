<script setup>
import Botao from '@/components/ui/Botao.vue';
import iconeSemInteresse from '@/assets/icons/icone-sem-interesse.svg';
import setaDireita from '@/assets/icons/seta-direita.svg';
</script>

<template>
  <section class="interesses-vazio" aria-label="Nenhum interesse registrado">
    <div class="interesses-vazio__decor interesses-vazio__decor--top" />
    <div class="interesses-vazio__decor interesses-vazio__decor--bottom" />

    <div class="interesses-vazio__content">
      <div class="interesses-vazio__icon-wrap">
        <img
          :src="iconeSemInteresse"
          alt=""
          class="interesses-vazio__icon"
        >
      </div>

      <h2 class="interesses-vazio__title">Nenhum interesse registrado</h2>
      <p class="interesses-vazio__text">
        Você ainda não demonstrou interesse em nenhuma política pública.
        Explore os programas disponíveis e registre seu interesse para
        acompanhar os próximos passos.
      </p>

      <Botao
        variant="primary"
        to="/politicas"
        :icon="setaDireita"
        icon-alt=""
        class="interesses-vazio__cta"
      >
        Explorar Políticas
      </Botao>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.interesses-vazio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 588px;
  padding: 6rem 2rem;
  border-radius: 32px;
  background: $bg-secondary;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &__decor {
    position: absolute;
    width: 256px;
    height: 256px;
    border-radius: 50%;
    pointer-events: none;

    &--top {
      top: -96px;
      right: -96px;
      background: rgba(30, 58, 138, 0.06);
    }

    &--bottom {
      bottom: -96px;
      left: -96px;
      background: rgba(85, 178, 162, 0.08);
      filter: blur(2px);
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    text-align: center;
  }

  &__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 128px;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: $bg-muted;
  }

  &__icon {
    width: 56px;
    height: auto;
  }

  &__title {
    color: $text-brand-dark;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.25;
  }

  &__text {
    margin-top: 1rem;
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  &__cta {
    margin-top: 2rem;
    min-width: 265px;
  }
}
</style>
