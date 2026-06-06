<script setup>
import iconeInscricoesAbertas from '@/assets/icons/icone-inscricoes-abertas.svg';
import mapaCobertura from '@/assets/images/mapa-cobertura.svg';

defineProps({
  orgao: {
    type: String,
    required: true,
  },
  prazo: {
    type: String,
    required: true,
  },
  cobertura: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <aside class="meta-painel">
    <div class="meta-painel__campo">
      <span class="meta-painel__label">Órgão responsável</span>
      <p class="meta-painel__valor">{{ orgao }}</p>
    </div>

    <div class="meta-painel__campo">
      <span class="meta-painel__label">Prazo</span>
      <p class="meta-painel__prazo">
        <img :src="iconeInscricoesAbertas" alt="" class="meta-painel__prazo-icone">
        {{ prazo }}
      </p>
    </div>

    <div class="meta-painel__mapa">
      <img :src="mapaCobertura" alt="" class="meta-painel__mapa-img">
      <span class="meta-painel__mapa-badge">{{ cobertura }}</span>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.meta-painel {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
  border-radius: 32px;
  background: $bg-secondary;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &__campo {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__label {
    color: $text-secondary;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__valor {
    color: $text-brand-dark;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4;
  }

  &__prazo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 700;
    line-height: 1.4;
  }

  &__prazo-icone {
    width: 15px;
    height: auto;
  }

  &__mapa {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
  }

  &__mapa-img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  &__mapa-badge {
    position: absolute;
    left: 12px;
    bottom: 12px;
    padding: 4px 12px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(4px);
    color: $text-brand-dark;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
}
</style>
