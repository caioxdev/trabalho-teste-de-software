import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"));
  const user = ref(JSON.parse(localStorage.getItem("user")));

  const isAuthenticated = computed(() => !!token.value);

  function login(newToken, userData) {
    token.value = newToken;
    user.value = userData;

    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    token.value = null;
    user.value = null;

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout
  };
});