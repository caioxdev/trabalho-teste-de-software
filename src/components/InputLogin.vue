<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  icon: {
    type: String,
    default: null
  },
  iconAlt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="container-input">
    <label>{{ label }}</label>
    <div class="input">
      <img v-if="icon" :src="icon" :alt="iconAlt">
      <input
        :type="type"
        class="input-field"
        :placeholder="placeholder"
        :class="{ 'sem-icone': !icon }"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/variables.scss" as *;

.container-input {
  margin-top: 16px;
  width: 100%;

  label {
    font-size: $font-sm;
    font-weight: 600;
    color: #43474E;
    text-transform: uppercase;
  }

  .input {
    position: relative;
    width: 100%;
    margin-top: 8px;

    img {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;

      &[alt="icone-senha"] {
        top: 42%;
      }
    }

    .input-field {
      width: 100%;
      padding: 18px 18px 18px 48px;
      border: none;
      background-color: #E6E7EE;
      border-radius: 8px;
      outline: none !important;
      line-height: 1;
      box-shadow:
        inset 2px 2px 5px $shadow-dark,
        inset -2px -2px 5px $shadow-light;

      &.sem-icone {
        padding-left: 18px;
      }

      &::placeholder {
        color: #94A3B8;
        font-size: $font-sm;
        font-weight: 600;
      }
    }
  }
}
</style>