<script setup>
import logo from '@/assets/icons/icone-logo.svg';
import perfil from '@/assets/icons/icone-perfil.svg';
import UserDropdown from './UserDropdown.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth.js';

const router = useRouter();
const auth = useAuthStore();

const logout = () => {
  auth.logout();
  router.replace('/login');
};
</script>

<template>
    <header class="header">
      <div class="container">
        <div class="logo">
          <img :src="logo" alt="Logo">
          <h1>Portal Cidadão</h1>
        </div>
        <nav class="nav">
          <router-link to="/home">Início</router-link>
          <router-link to="/politicas">Políticas</router-link>
          <router-link to="/interesses">Interesses</router-link>
          <router-link to="/orientacoes">Orientações</router-link>
        </nav>

        <UserDropdown>
          <template #trigger>
            <span class="trigger">
              Olá, {{ auth.user?.nome }}
              <img :src="perfil" alt="Perfil">
            </span>
          </template>

          <template #default>
            <button class="menu-item">Configurações</button>
            <button class="menu-item logout" @click="logout">
              Sair
            </button>
          </template>
        </UserDropdown>
      </div>
    </header>
</template>

<style lang="scss" scoped>
@use "@/scss/variables" as *;
@use "@/scss/mixins" as *;

.header {
  width: 100%;
  background-color: $bg-secondary;
  box-shadow: $box-shadow-1;

  .container {
    @include flex(space-between, center, row, 0);
    padding: 1rem 3rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;

    h1 {
      color: $text-primary;
      font-size: $font-lg;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: 0.5px;
    }
  }

  .nav {
    a {
      position: relative;
      color: $text-secondary;
      font-size: $font-md;
      font-weight: 500;
      line-height: 150%;
      text-decoration: none;
      margin-right: 32px;

      &::after {
        content: "";
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -4px;
        width: 100%;
        background-color: $text-secondary;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.05s;
      }

      &:hover::after,
      &:focus-visible::after {
        transform: scaleX(1);
      }

      // QUANDO ESTIVER ATIVO
      &.router-link-active {
        color: $text-brand;
      }

      &.router-link-active::after {
        transform: scaleX(1);
        background-color: $text-brand;
      }
    }
  }

  .trigger {
      display: flex;
      align-items: center;
      gap: 16px;
      color: $text-brand;
      font-size: $font-sm;
      font-weight: 800;
      line-height: 142%;

      img {
        width: 35px;
        aspect-ratio: 1 / 1;
      }
    }

  .menu-item {
  width: 100%;
  padding: 10px 12px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  }

  .menu-item:hover {
    background: #f3f4f5;
  }

  .logout {
    color: red;
  }
}
</style>