<script setup>
import { ref, watch } from 'vue';
import CampoFormularioAdmin from '@/components/ui/CampoFormularioAdmin.vue';
import { categoriasPolitica } from '@/data/politicasAdmin';

const props = defineProps({
  valoresIniciais: {
    type: Object,
    default: () => ({}),
  },
  modoEdicao: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['salvar', 'cancelar']);

const nome = ref('');
const categoria = ref(categoriasPolitica[0]);
const publicoAlvo = ref('');
const descricao = ref('');
const documentos = ref('');
const orgao = ref('');
const prazo = ref('');
const criterios = ref('');

function aplicarValores(valores) {
  nome.value = valores.nome ?? '';
  categoria.value = valores.categoria ?? categoriasPolitica[0];
  publicoAlvo.value = valores.publicoAlvo ?? '';
  descricao.value = valores.descricao ?? '';
  documentos.value = valores.documentos ?? '';
  orgao.value = valores.orgao ?? '';
  prazo.value = valores.prazo ?? '';
  criterios.value = valores.criterios ?? '';
}

watch(
  () => props.valoresIniciais,
  (valores) => aplicarValores(valores),
  { immediate: true, deep: true },
);

function enviar() {
  emit('salvar', {
    nome: nome.value.trim(),
    categoria: categoria.value,
    publicoAlvo: publicoAlvo.value.trim(),
    descricao: descricao.value.trim(),
    documentos: documentos.value.trim(),
    orgao: orgao.value.trim(),
    prazo: prazo.value.trim(),
    criterios: criterios.value.trim(),
  });
}
</script>

<template>
  <form class="form-politica" @submit.prevent="enviar">
    <CampoFormularioAdmin
      v-model="nome"
      label="Nome da política"
      placeholder="Ex: Programa de Apoio ao Aluguel Social"
      required
    />

    <div class="form-politica__row">
      <CampoFormularioAdmin
        v-model="categoria"
        label="Categoria"
        tipo="select"
        :opcoes="categoriasPolitica"
        required
      />
      <CampoFormularioAdmin
        v-model="publicoAlvo"
        label="Público-alvo"
        placeholder="Ex: Famílias de baixa renda em áreas de risco"
        required
      />
    </div>

    <CampoFormularioAdmin
      v-model="descricao"
      label="Descrição"
      tipo="textarea"
      placeholder="Descreva os objetivos principais e o impacto esperado desta política..."
      required
    />

    <CampoFormularioAdmin
      v-model="documentos"
      label="Documentos necessários"
      tipo="textarea"
      placeholder="RG, CPF, Comprovante de Residência, etc..."
    />

    <div class="form-politica__row">
      <CampoFormularioAdmin
        v-model="orgao"
        label="Órgão responsável"
        placeholder="Ex: Secretaria de Habitação e Urbanismo"
      />
      <CampoFormularioAdmin
        v-model="prazo"
        label="Prazo"
        placeholder="Ex: Indeterminado ou Vigência até 2026"
      />
    </div>

    <CampoFormularioAdmin
      v-model="criterios"
      label="Critérios de participação"
      tipo="textarea"
      placeholder="Liste os requisitos para que um cidadão possa se beneficiar..."
    />

    <footer class="form-politica__acoes">
      <button
        type="button"
        class="form-politica__btn form-politica__btn--secundario"
        @click="emit('cancelar')"
      >
        Cancelar
      </button>
      <button
        type="submit"
        class="form-politica__btn form-politica__btn--primario"
      >
        {{ modoEdicao ? 'Salvar alterações' : 'Salvar política' }}
      </button>
    </footer>
  </form>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.form-politica {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__acoes {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 1rem;
    padding-top: 1rem;
  }

  &__btn {
    min-width: 136px;
    padding: 1rem 2rem;
    border-radius: 48px;
    font-family: inherit;
    font-size: $font-md;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.92;
    }

    &--secundario {
      border: 2px solid #c3c6cf;
      background: transparent;
      color: $text-secondary;
    }

    &--primario {
      border: none;
      background: $button-primary;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      color: #fff;
    }
  }
}
</style>
