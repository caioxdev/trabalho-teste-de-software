<script setup>
import { ref, watch } from 'vue';
import SearchInput from '@/components/ui/SearchInput.vue';
import FilterChips from '@/components/ui/FilterChips.vue';
import { filtrosArea } from '@/data/politicas';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  busca: {
    type: String,
    default: '',
  },
  area: {
    type: String,
    default: 'assistencia-social',
  },
});

const emit = defineEmits(['close', 'apply', 'clear']);

const buscaLocal = ref(props.busca);
const areaLocal = ref(props.area);

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      buscaLocal.value = props.busca;
      areaLocal.value = props.area;
    }
  },
);

function aplicar() {
  emit('apply', { busca: buscaLocal.value, area: areaLocal.value });
  emit('close');
}

function limpar() {
  buscaLocal.value = '';
  areaLocal.value = 'tudo';
  emit('clear');
  emit('close');
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="modal-filtro"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-filtro-titulo"
    >
      <button
        type="button"
        class="modal-filtro__backdrop"
        aria-label="Fechar"
        @click="$emit('close')"
      />
      <div class="modal-filtro__panel">
        <header class="modal-filtro__header">
          <h2 id="modal-filtro-titulo" class="modal-filtro__title">
            Filtrar Políticas
          </h2>
          <button
            type="button"
            class="modal-filtro__close"
            aria-label="Fechar"
            @click="$emit('close')"
          >
            ×
          </button>
        </header>

        <div class="modal-filtro__body">
          <section class="modal-filtro__section">
            <h3 class="modal-filtro__section-title">Busca por nome</h3>
            <SearchInput
              v-model="buscaLocal"
              placeholder="Ex: Bolsa Família, CadÚnico..."
            />
          </section>

          <section class="modal-filtro__section">
            <FilterChips
              v-model="areaLocal"
              :options="filtrosArea"
              label="Área de interesse"
            />
          </section>
        </div>

        <footer class="modal-filtro__footer">
          <button
            type="button"
            class="modal-filtro__btn modal-filtro__btn--secondary"
            @click="limpar"
          >
            Limpar filtros
          </button>
          <button
            type="button"
            class="modal-filtro__btn modal-filtro__btn--primary"
            @click="aplicar"
          >
            Aplicar Filtros
          </button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.modal-filtro {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  &__backdrop {
    position: absolute;
    inset: 0;
    border: none;
    background: rgba(0, 36, 68, 0.4);
    cursor: pointer;
  }

  &__panel {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 672px;
    max-height: min(90vh, 921px);
    border-radius: 32px;
    background: $bg-secondary;
    box-shadow: 0 24px 48px 0 rgba(0, 36, 68, 0.12);
    overflow: hidden;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid rgba(195, 198, 207, 0.2);
  }

  &__title {
    color: $text-brand-dark;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 9999px;
    background: transparent;
    color: $text-secondary;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;

    &:hover {
      background: $bg-primary;
    }
  }

  &__body {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 32px;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__section-title {
    color: $text-secondary;
    font-size: $font-sm;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 32px;
    background: $bg-primary;
  }

  &__btn {
    flex: 1;
    min-width: 200px;
    padding: 18px 32px;
    border-radius: 48px;
    font-family: inherit;
    font-size: $font-md;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.92;
    }

    &--secondary {
      border: 2px solid #1a3a5c;
      background: #fff;
      color: $text-brand-dark;
    }

    &--primary {
      border: none;
      background: $button-primary;
      color: #fff;
    }
  }
}
</style>
