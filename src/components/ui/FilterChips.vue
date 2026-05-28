<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: 'tudo',
  },
  label: {
    type: String,
    default: 'FILTROS:',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="filter-chips">
    <span class="filter-chips__label">{{ label }}</span>
    <div class="filter-chips__list">
      <button
        v-for="option in options"
        :key="option.id"
        type="button"
        class="filter-chips__chip"
        :class="{ 'filter-chips__chip--active': modelValue === option.id }"
        @click="emit('update:modelValue', option.id)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  &__label {
    font-size: $font-sm;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: $text-secondary;
    padding-right: 8px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__chip {
    border: none;
    cursor: pointer;
    padding: 8px 20px;
    border-radius: 9999px;
    background: $bg-muted;
    color: $text-secondary;
    font-size: $font-sm;
    font-weight: 600;
    font-family: inherit;
    transition: background 0.15s ease, color 0.15s ease;

    &--active {
      background: $text-brand-dark;
      color: #fff;
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
