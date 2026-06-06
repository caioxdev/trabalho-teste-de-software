<script setup>
import Botao from '@/components/ui/Botao.vue';
import iconeVerDetalhes from '@/assets/icons/icone-ver-detalhes.svg';

defineProps({
  id: {
    type: String,
    required: true,
  },
  listIcon: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  listDescription: {
    type: String,
    required: true,
  },
  publico: {
    type: String,
    required: true,
  },
  local: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="policy-list-card">
    <div class="policy-list-card__head">
      <div class="policy-list-card__intro">
        <span class="policy-list-card__category">{{ category }}</span>
        <h2 class="policy-list-card__title">{{ title }}</h2>
      </div>
      <img
        :src="listIcon"
        :alt="title"
        class="policy-list-card__icon"
      >
    </div>
    <p class="policy-list-card__description">{{ listDescription }}</p>
    <div class="policy-list-card__tags">
      <span class="policy-list-card__tag">Público: {{ publico }}</span>
      <span class="policy-list-card__tag">Local: {{ local }}</span>
    </div>
    <Botao
      variant="outline"
      :to="`/politicas/${id}`"
      :icon="iconeVerDetalhes"
      icon-alt=""
    >
      Ver detalhes
    </Botao>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.policy-list-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 32px;
  background: $bg-secondary;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__category {
    display: inline-flex;
    padding: 4px 16px;
    border-radius: 9999px;
    background: rgba(0, 65, 57, 0.1);
    color: $text-accent;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__title {
    color: $text-brand-dark;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.33;
  }

  &__icon {
    flex-shrink: 0;
    max-width: 32px;
    max-height: 30px;
  }

  &__description {
    color: $text-secondary;
    font-size: $font-md;
    line-height: 1.625;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-bottom: 8px;
  }

  &__tag {
    padding: 4px 12px;
    border-radius: 9999px;
    background: #edeeef;
    color: #4f657b;
    font-size: 0.75rem;
    font-weight: 500;
  }
}
</style>
