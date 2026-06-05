<script setup>
import Botao from '@/components/ui/Botao.vue';
import iconeInteresseRegistrado from '@/assets/icons/icone-interesse-registrado.svg';
import iconeProximosPassos from '@/assets/icons/icone-proximos-passos.svg';
import setaDireita from '@/assets/icons/seta-direita.svg';

defineProps({
  politicaId: {
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
  description: {
    type: String,
    required: true,
  },
  dataRegistro: {
    type: String,
    required: true,
  },
  ultimaAtualizacao: {
    type: String,
    required: true,
  },
  proximosPassos: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['remover']);
</script>

<template>
  <article class="interesse-card">
    <div class="interesse-card__body">
      <div class="interesse-card__top">
        <div class="interesse-card__intro">
          <span class="interesse-card__category">{{ category }}</span>
          <h2 class="interesse-card__title">{{ title }}</h2>
        </div>
        <span class="interesse-card__badge">
          <img :src="iconeInteresseRegistrado" alt="">
          Interesse registrado
        </span>
      </div>

      <p class="interesse-card__description">{{ description }}</p>

      <div class="interesse-card__datas">
        <div class="interesse-card__data-box">
          <span class="interesse-card__data-label">Data do registro</span>
          <span class="interesse-card__data-valor">{{ dataRegistro }}</span>
        </div>
        <div class="interesse-card__data-box">
          <span class="interesse-card__data-label">Última atualização</span>
          <span class="interesse-card__data-valor">{{ ultimaAtualizacao }}</span>
        </div>
      </div>

      <section class="interesse-card__passos">
        <h3 class="interesse-card__passos-titulo">
          <img :src="iconeProximosPassos" alt="">
          Próximos passos
        </h3>
        <ol class="interesse-card__passos-lista">
          <li
            v-for="(passo, index) in proximosPassos"
            :key="index"
          >
            <span class="interesse-card__passo-num">{{ index + 1 }}</span>
            <span>{{ passo }}</span>
          </li>
        </ol>
      </section>
    </div>

    <div class="interesse-card__actions">
      <Botao
        variant="primary"
        :to="`/politicas/${politicaId}`"
        :icon="setaDireita"
        icon-alt=""
        class="interesse-card__btn interesse-card__btn--detalhes"
      >
        Ver detalhes
      </Botao>
      <Botao
        variant="secondary"
        to="/orientacoes"
        class="interesse-card__btn"
      >
        Canal de Orientação
      </Botao>
      <button
        type="button"
        class="interesse-card__btn-remover"
        @click="emit('remover')"
      >
        Remover interesse
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.interesse-card {
  display: flex;
  flex-direction: column;
  max-width: 677px;
  border-radius: 32px;
  background: $bg-secondary;
  box-shadow: 0 10px 40px rgba(0, 36, 68, 0.08);

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
  }

  &__top {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__category {
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

  &__title {
    color: $text-brand-dark;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.25;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 9999px;
    background: rgba(85, 178, 162, 0.12);
    color: #004139;
    font-size: $font-sm;
    font-weight: 700;
    white-space: nowrap;

    img {
      width: 15px;
      height: 15px;
    }
  }

  &__description {
    color: $text-secondary;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  &__datas {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 560px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__data-box {
    padding: 1rem;
    border-radius: 16px;
    background: $bg-muted;
  }

  &__data-label {
    display: block;
    color: $text-secondary;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__data-valor {
    display: block;
    margin-top: 0.5rem;
    color: $text-brand-dark;
    font-size: 1.125rem;
    font-weight: 700;
  }

  &__passos {
    padding: 1.5rem;
    border-radius: 16px;
    background: rgba(0, 36, 68, 0.04);
  }

  &__passos-titulo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1rem;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 700;

    img {
      width: 20px;
      height: auto;
    }
  }

  &__passos-lista {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 12px;
      color: $text-secondary;
      font-size: $font-md;
      line-height: 1.5;
    }
  }

  &__passo-num {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: $bg-secondary;
    color: $text-brand-dark;
    font-size: $font-sm;
    font-weight: 700;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem 2rem;
  }

  &__btn {
    flex: 0 1 auto;

    &--detalhes {
      min-width: 199px;
    }
  }

  :deep(.app-button--secondary) {
    min-width: 203px;
  }

  &__btn-remover {
    flex: 1;
    min-width: 193px;
    padding: 1rem 2rem;
    border: 2px solid #c3c6cf;
    border-radius: 48px;
    background: transparent;
    color: $text-secondary;
    font-family: inherit;
    font-size: $font-md;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.85;
      color: $text-brand-dark;
      border-color: $text-brand-dark;
    }
  }
}
</style>
