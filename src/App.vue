<script setup lang="js">
import { useRoute } from "vue-router";
import { computed } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const hideHeader = computed(() => route.meta?.hideHeader);
</script>

<template>
  <Header v-if="!hideHeader" />
  <router-view />
  <Footer />
</template>
