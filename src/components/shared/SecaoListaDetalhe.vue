<script setup>
import iconeTipoCriterios from '@/assets/icons/icone-tipo-criterios.svg';
import iconeTipoDocumentos from '@/assets/icons/icone-tipo-documentos.svg';

defineProps({
  titulo: {
    type: String,
    required: true,
  },
  icone: {
    type: String,
    required: true,
  },
  itens: {
    type: Array,
    required: true,
  },
  tipo: {
    type: String,
    default: 'criterio',
    validator: (v) => ['criterio', 'documento'].includes(v),
  },
});
</script>

<template>
  <section class="detalhe-secao">
    <h2 class="detalhe-secao__titulo">
      <img :src="icone" alt="" class="detalhe-secao__icone-titulo">
      {{ titulo }}
    </h2>
    <ul class="detalhe-secao__lista">
      <li
        v-for="(item, index) in itens"
        :key="index"
        class="detalhe-secao__item"
      >
        <img
          :src="tipo === 'documento' ? iconeTipoDocumentos : iconeTipoCriterios"
          alt=""
          class="detalhe-secao__icone-item"
        >
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.detalhe-secao {
  &__titulo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.5rem;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__icone-titulo {
    flex-shrink: 0;
    height: 20px;
    width: auto;
  }

  &__lista {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    gap: 12px;
    color: $text-secondary;
    font-size: $font-md;
    line-height: 1.5;
  }

  &__icone-item {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
  }
}
</style>
