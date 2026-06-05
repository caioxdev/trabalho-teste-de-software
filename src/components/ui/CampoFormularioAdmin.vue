<script setup>
import iconeInput from '@/assets/icons/icone-input.svg';

defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  tipo: {
    type: String,
    default: 'text',
    validator: (v) => ['text', 'textarea', 'select'].includes(v),
  },
  placeholder: {
    type: String,
    default: '',
  },
  opcoes: {
    type: Array,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label class="campo-admin">
    <span class="campo-admin__label">{{ label }}</span>

    <textarea
      v-if="tipo === 'textarea'"
      class="campo-admin__textarea"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      rows="3"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <div
      v-else-if="tipo === 'select'"
      class="campo-admin__select-wrap"
    >
      <select
        class="campo-admin__select"
        :value="modelValue"
        :required="required"
        @change="emit('update:modelValue', $event.target.value)"
      >
        <option
          v-for="opcao in opcoes"
          :key="opcao"
          :value="opcao"
        >
          {{ opcao }}
        </option>
      </select>
      <img :src="iconeInput" alt="" class="campo-admin__select-icon">
    </div>

    <input
      v-else
      class="campo-admin__input"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.campo-admin {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  &__label {
    padding-left: 4px;
    color: $text-secondary;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__input,
  &__textarea,
  &__select {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 1px solid #d1d5db;
    border-radius: 12px;
    background: $bg-secondary;
    color: $text-primary;
    font-family: inherit;
    font-size: $font-md;
    line-height: 1.4;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: 2px solid rgba(30, 58, 138, 0.25);
      border-color: $text-brand;
    }
  }

  &__textarea {
    min-height: 75px;
    resize: vertical;
  }

  &__select-wrap {
    position: relative;
  }

  &__select {
    appearance: none;
    padding-right: 3rem;
    cursor: pointer;
  }

  &__select-icon {
    position: absolute;
    top: 50%;
    right: 1.25rem;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
