<script setup>
import { ref, watch } from 'vue';
import iconeMensagemAdmin from '@/assets/icons/icone-mensagem-admin.svg';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  politicaTitulo: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close', 'submit']);

const nome = ref('');
const cpf = ref('');
const cidade = ref('');
const declaracao = ref(false);

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      nome.value = '';
      cpf.value = '';
      cidade.value = '';
      declaracao.value = false;
    }
  },
);

function fechar() {
  emit('close');
}

function enviar() {
  emit('submit', {
    nome: nome.value,
    cpf: cpf.value,
    cidade: cidade.value,
    declaracao: declaracao.value,
  });
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="modal-interesse"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-interesse-titulo"
    >
      <button
        type="button"
        class="modal-interesse__backdrop"
        aria-label="Fechar"
        @click="fechar"
      />

      <div class="modal-interesse__panel">
        <header class="modal-interesse__header">
          <div>
            <h2 id="modal-interesse-titulo" class="modal-interesse__title">
              Registrar Interesse
            </h2>
            <p class="modal-interesse__subtitle">
              Você está registrando interesse na política:
              <strong>{{ politicaTitulo }}</strong>
            </p>
          </div>
          <button
            type="button"
            class="modal-interesse__close"
            aria-label="Fechar"
            @click="fechar"
          >
            ×
          </button>
        </header>

        <div class="modal-interesse__body">
          <div class="modal-interesse__aviso">
            <img :src="iconeMensagemAdmin" alt="">
            <p>
              Este registro é apenas informativo e não garante participação no
              programa. Você receberá orientações sobre como acessar o benefício.
            </p>
          </div>

          <form class="modal-interesse__form" @submit.prevent="enviar">
            <label class="modal-interesse__field">
              <span>Nome completo</span>
              <input
                v-model="nome"
                type="text"
                placeholder="Como consta no documento"
                required
              >
            </label>

            <div class="modal-interesse__row">
              <label class="modal-interesse__field">
                <span>CPF</span>
                <input
                  v-model="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  required
                >
              </label>
              <label class="modal-interesse__field">
                <span>Cidade / Estado</span>
                <input
                  v-model="cidade"
                  type="text"
                  placeholder="Ex: Brasília / DF"
                  required
                >
              </label>
            </div>

            <label class="modal-interesse__checkbox">
              <input v-model="declaracao" type="checkbox" required>
              <span>
                Declaro que li e entendi que este registro é apenas uma
                manifestação de interesse
              </span>
            </label>

            <footer class="modal-interesse__footer">
              <button
                type="button"
                class="modal-interesse__btn modal-interesse__btn--secondary"
                @click="fechar"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="modal-interesse__btn modal-interesse__btn--primary"
              >
                Confirmar registro
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.modal-interesse {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &__backdrop {
    position: absolute;
    inset: 0;
    border: none;
    background: rgba(0, 36, 68, 0.45);
    cursor: pointer;
  }

  &__panel {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 672px;
    max-height: calc(100vh - 2rem);
    overflow: hidden;
    border-radius: 24px;
    background: $bg-secondary;
    box-shadow: $box-shadow-1;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem 2rem 1.5rem;
    background: $bg-muted;
  }

  &__title {
    color: $text-brand-dark;
    font-size: 1.5rem;
    font-weight: 800;
  }

  &__subtitle {
    margin-top: 0.5rem;
    color: $text-secondary;
    font-size: $font-md;
    line-height: 1.5;

    strong {
      color: $text-primary;
      font-weight: 700;
    }
  }

  &__close {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: $text-secondary;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }

  &__body {
    overflow-y: auto;
    padding: 2rem;
  }

  &__aviso {
    display: flex;
    gap: 1rem;
    padding: 1.125rem 1.5rem;
    border-radius: 12px;
    background: rgba(0, 65, 57, 0.06);

    img {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      margin-top: 2px;
    }

    p {
      margin: 0;
      color: $text-secondary;
      font-size: $font-sm;
      line-height: 1.5;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: $text-secondary;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    input {
      padding: 1rem 1.25rem;
      border: 1px solid #d1d5db;
      border-radius: 12px;
      background: $bg-secondary;
      color: $text-primary;
      font-family: inherit;
      font-size: $font-md;

      &::placeholder {
        color: #94a3b8;
      }
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 560px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__checkbox {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    color: $text-secondary;
    font-size: $font-sm;
    line-height: 1.45;
    cursor: pointer;

    input {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      margin-top: 2px;
    }
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  &__btn {
    min-width: 134px;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 48px;
    font-family: inherit;
    font-size: $font-md;
    font-weight: 700;
    cursor: pointer;

    &--secondary {
      background: $button-secondary;
      color: $text-brand-dark;
    }

    &--primary {
      background: $button-primary;
      color: #fff;
    }
  }
}
</style>
