<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'card'].includes(v),
  },
  to: {
    type: [String, Object],
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
  icon: {
    type: String,
    default: null,
  },
  iconAlt: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to"
    :type="to ? undefined : type"
    class="app-button"
    :class="`app-button--${variant}`"
  >
    <slot />
    <img
      v-if="icon"
      :src="icon"
      :alt="iconAlt"
      class="app-button__icon"
    >
  </component>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.92;
  }

  &--primary {
    padding: 1rem 2rem;
    border-radius: 48px;
    background: $button-primary;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: $font-sm;
    font-weight: 700;
    line-height: 155%;

    .app-button__icon {
      filter: brightness(0) invert(1);
    }
  }

  &--secondary {
    padding: 1rem 2rem;
    border-radius: 48px;
    background: $button-secondary;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: $text-brand-dark;
    font-size: $font-sm;
    font-weight: 700;
    line-height: 155%;
  }

  &--card {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    background: $button-secondary;
    color: $text-primary;
    font-size: $font-md;
    font-weight: 700;
    line-height: 150%;
    box-shadow: none;
  }
}
</style>
