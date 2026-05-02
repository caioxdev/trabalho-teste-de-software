<script setup>
import email from '@/assets/icons/icone-email.svg';
import senha from '@/assets/icons/icone-senha.svg';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const perfil = ref('cidadao');
const aba = ref('entrar');

const router = useRouter();
const auth = useAuthStore();

onMounted(() => {
  document.body.classList.add('login-page')
});

onUnmounted(() => {
  document.body.classList.remove('login-page')
});

const entrar = () => {
  auth.login('token-simulado', {
    email: 'usuario@email.com',
    perfil: perfil.value
  });
  router.push('/home')
}

</script>

<template>
  <div class="container">
    <div class="card-login">
      <div class="tabs">
        <button
          type="button"
          :class="{
            ativo: aba === 'entrar'
          }"
          @click="aba = 'entrar'"
        >
        Entrar
      </button>
      <button
          type="button"
          :class="{
            ativo: aba === 'cadastrar'
          }"
          @click="aba = 'cadastrar'"
        >
        Cadastrar
      </button>
      </div>
      <form class="login-form">
        <div class="form-header">
          <h1>Portal Cidadão</h1>
          <div class="toggle">
            <button
              type="button"
              :class="{
                ativo: perfil === 'cidadao'
              }"
              @click="perfil = 'cidadao'"
            >
            Cidadão
          </button>
            <button
              type="button"
              :class="{
                ativo: perfil === 'admin'
              }"
              @click="perfil = 'admin'"
            >
              Administrador
            </button>
          </div>
        </div>

        <div class="input-group">
          <div class="container-input">
            <label for="">email</label>
            <div class="input">
              <img :src="email" alt="icone-email">
              <input type="email" class="input-field" placeholder="seu@email.com">
            </div>
          </div>
          <div class="container-input">
            <label for="">senha</label>
            <div class="input">
              <img :src="senha" alt="icone-senha">
              <input type="password" class="input-field" placeholder="********">
            </div>
          </div>
        </div>
        <button type="button" class="btn-entrar" @click="entrar">Entrar</button>
        <span>Esqueci minha senha</span>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/variables.scss" as *;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card-login {
  max-width: 480px;
  width: 100%;
  border-radius: 32px;
  background-color: #E6E7EE;
  box-shadow:
    8px 8px 16px $shadow-dark,
    -8px -8px 16px $shadow-light;
}

.tabs {
  display: flex;
  width: 100%;
  border-bottom: 3px solid #d8d8d8;
  margin-bottom: 24px;

  button {
    flex: 1;
    padding: 24px 0;
    border: none;
    border-radius: 3px solid transparent;
    background-color: transparent;
    color: #94A3B8;
    font-size: $font-md;
    font-weight: 500;
    cursor: pointer;

    &.ativo {
      color: $text-brand;
      border-bottom: 3px solid $text-brand;
    }
  }
}

.login-form {
  display: flex;
  padding: 12px 48px 64px 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h1 {
      color: $text-brand-dark;
      font-size: 1.875rem;
      font-weight: 800;
      letter-spacing: 0.75px;
    }

    .toggle {
      display: flex;
      background-color: $bg-primary;
      border-radius: 20px;
      padding: 4px;

      button {
        flex: 1;
        padding: 0 24px;
        height: 36px;
        border: none;
        border-radius: 16px;
        background-color: transparent;
        color: #64748B;
        font-size: $font-sm;
        font-weight: 700;

        &.ativo {
          color: $text-brand-dark;
          background-color: $bg-secondary;
        }
      }
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: 16px;

    .container-input {
      margin-top: 16px;

      label {
        font-size: $font-sm;
        font-weight: 600;
        color: #43474E;
        text-transform: uppercase;
      }

      .input {
        position: relative;
        width: 100%;

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
          line-height: 1;
          box-shadow:
            inset 2px 2px 5px $shadow-dark,
            inset -2px -2px 5px $shadow-light;

          &::placeholder {
            color: #94A3B8;
            font-size: $font-sm;
            font-weight: 600;
          }
        }
      }
    }
  }

  .btn-entrar {
    color: #fff;
    font-size: $font-md;
    font-weight: 700;
    line-height: 150%;
    border: none;
    border-radius: 48px;
    padding: 16px 0;
    width: 100%;
    background: $button-primary;
    margin-top: 32px;
  }

  span {
    color: rgba(0, 36, 68, 0.70);
    font-size: $font-sm;
    font-weight: 600;
    line-height: 143%;
    margin-top: 32px;
  }
}
</style>