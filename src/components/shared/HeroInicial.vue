<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__title" :data-text="title">{{ title }}</h1>
      <p class="hero__subtitle">{{ subtitle }}</p>
      <div class="hero__actions">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.hero {
  width: 100%;
  min-height: 465px;
  background: url('@/assets/img/imagem-fundo-home.webp') center/cover no-repeat;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 792px;
    padding-top: 5.625rem;
  }

  &__title {
    color: #fff;
    font-size: $font-title;
    font-weight: 800;
    line-height: 100%;
    max-width: 700px;
    letter-spacing: 1.8px;
    text-align: center;
    position: relative;
    z-index: 2;

    &::before {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      z-index: -1;
      filter: blur(18px);
      opacity: 0.6;
    }
  }

  &__subtitle {
    max-width: 649px;
    color: #c3c3c3;
    font-size: $font-md;
    font-weight: 400;
    line-height: 140%;
    text-align: justify;
    margin: 2rem 0 4rem;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
  }
}
</style>
