<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";

import HeaderAdmin from "./components/layout/HeaderAdmin.vue"
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

const route = useRoute();
const auth = useAuthStore();

const hideHeader = computed(() => route.meta?.hideHeader === true);
const hideFooter = computed(() => route.meta?.hideFooter === true);
const isAdmin = computed(() => route.matched.some(r => r.meta.role === 'admin') && auth.user?.perfil === 'admin');
</script>

<template>
  <div class="layout">
    <HeaderAdmin v-if="isAdmin" />
    <Header v-else-if="!hideHeader" />
    <main class="content">
        <router-view />
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
  display: flex;
  flex-direction: column;
}
</style>