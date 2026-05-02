<script setup lang="js">
import { useRoute } from "vue-router";
import { computed } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const hideHeader = computed(() => route.meta?.hideHeader === true);
const hideFooter = computed(() => route.meta?.hideFooter === true)
</script>

<template>
  <div class="layout">
    <Header v-if="!hideHeader" />
    <main class="content">
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer v-if="!hideFooter"/>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>