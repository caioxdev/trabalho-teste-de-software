<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from "vue";

const open = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  open.value = !open.value;
};

const handleClickOutside = (event) => {
  if (!menuRef.value) return;

  if (!menuRef.value.contains(event.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="user-dropdown" ref="menuRef">
    <div class="trigger" @click="toggleMenu">
      <slot name="trigger"></slot>
    </div>
    <Transition name="dropdown">
      <div v-if="open" class="menu">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;

.user-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 9999;
  background-color: $bg-secondary;
  border-radius: 8px;
  min-width: 160px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
