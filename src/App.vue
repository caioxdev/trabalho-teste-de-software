<script setup lang="js">
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
</script>

<template>
  <Header v-if="!route.meta?.hideHeader" />
  <router-view />
  <Footer />
</template>
