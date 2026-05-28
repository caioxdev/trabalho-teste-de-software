<script setup>
import lupaIcon from '@/assets/icons/icone-lupa.svg';

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Busque por área: saúde, educação, assistência social...',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="search-input">
    <img :src="lupaIcon" alt="" class="search-input__icon">
    <input
      type="search"
      class="search-input__field"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.search-input {
  position: relative;
  width: 100%;

  &__icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    opacity: 0.6;
    pointer-events: none;
  }

  &__field {
    width: 100%;
    border: none;
    outline: none;
    background: $bg-primary;
    border-radius: 6px;
    padding: 19px 16px 20px 48px;
    font-size: 1.125rem;
    color: $text-secondary;

    &::placeholder {
      color: #6b7280;
    }
  }
}
</style>
