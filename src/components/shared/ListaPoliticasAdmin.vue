<script setup>
import ItemListaPoliticaAdmin from '@/components/shared/ItemListaPoliticaAdmin.vue';

defineProps({
  politicas: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['editar', 'excluir']);
</script>

<template>
  <section class="admin-lista" aria-label="Lista de políticas">
    <div
      v-if="!politicas.length"
      class="admin-lista__vazio"
    >
      <p>Nenhuma política cadastrada no momento.</p>
      <RouterLink to="/cadastrar-politicas">
        Cadastrar Nova Política
      </RouterLink>
    </div>

    <ul v-else class="admin-lista__itens">
      <li
        v-for="(politica, index) in politicas"
        :key="politica.id"
        class="admin-lista__item"
      >
        <ItemListaPoliticaAdmin
          v-bind="politica"
          @editar="emit('editar', $event)"
          @excluir="emit('excluir', $event)"
        />
        <hr
          v-if="index < politicas.length - 1"
          class="admin-lista__divisor"
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.admin-lista {
  border-radius: 24px;
  background: $bg-secondary;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &__itens {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin: 0;
    padding: 0;
  }

  &__divisor {
    margin: 0;
    border: none;
    height: 1px;
    background: rgba(195, 198, 207, 0.5);
  }

  &__vazio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 4rem 2rem;
    text-align: center;

    p {
      margin: 0;
      color: $text-secondary;
      font-size: $font-md;
    }

    a {
      color: $text-brand-dark;
      font-weight: 700;
    }
  }
}
</style>
