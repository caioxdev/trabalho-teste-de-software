<script setup>
import SearchInput from '@/components/ui/SearchInput.vue';
import FilterChips from '@/components/ui/FilterChips.vue';

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  filter: {
    type: String,
    default: 'tudo',
  },
  filters: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'update:filter']);
</script>

<template>
  <section class="search-with-filters">
    <SearchInput
      :model-value="modelValue"
      :placeholder="placeholder"
      @update:model-value="emit('update:modelValue', $event)"
    />
    <FilterChips
      :options="filters"
      :model-value="filter"
      @update:model-value="emit('update:filter', $event)"
    />
  </section>
</template>

<style lang="scss" scoped>
@use '@/scss/variables.scss' as *;

.search-with-filters {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 1.5rem;
  border-radius: 32px;
  background-color: $bg-secondary;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
