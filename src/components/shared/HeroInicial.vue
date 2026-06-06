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
      <h1 class="hero__title">
        {{ title }}
      </h1>

      <p class="hero__subtitle">
        {{ subtitle }}
      </p>

      <div class="hero__actions">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.hero {
  position: relative;
  width: 100%;
  min-height: 500px;

  background:
    linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('@/assets/img/imagem-fundo-home.webp') center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    padding: 5rem 2rem;
    text-align: center;
    animation: fadeUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  }

  &__title {
    color: #ffffff;
    font-size: clamp(2.5rem, 6vw, $font-title);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    margin: 0 0 1rem 0;

    background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.9));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: none;

    @supports not (background-clip: text) {
      color: #fff;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }

  &__subtitle {
    color: rgba(255, 255, 255, 0.9);
    font-size: clamp(1rem, 3vw, $font-md);
    font-weight: 400;
    line-height: 1.5;
    max-width: 650px;
    margin: 0 auto 2.5rem auto;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    // Totalmente limpo - sem fundo, sem blur, sem borda
    background: transparent;
    backdrop-filter: none;
    border: none;
    padding: 0;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;

    &__content {
      padding: 3rem 1.5rem;
    }

    &__subtitle {
      margin-bottom: 2rem;
    }
  }
}
</style>