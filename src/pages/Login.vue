<script setup>
import inputLogin from "@/components/inputLogin.vue";
import emailIcone from "@/assets/icons/icone-email.svg";
import senhaIcone from "@/assets/icons/icone-senha.svg";
import nomeIcone from "@/assets/icons/icone-nome.svg";
import confirmSenhaIcone from "@/assets/icons/icone-confirmar-senha.svg";
import mensagemAdminIcone from "@/assets/icons/icone-mensagem-admin.svg";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth.js";
import { useToast } from 'vue-toastification';
import usuarios from '@/data/usuarios.js'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const emailValue = ref('');
const senhaValue = ref('');
const erro = ref('');
const toast = useToast();

const entrar = async () => {
  if (!emailValue.value || !senhaValue.value) {
    toast.error('Preencha o e-mail e a senha');
    return 0;
  }

  const usuario = usuarios.find (
    u => u.email === emailValue.value && u.senha === senhaValue.value
  );

  if (!usuario) {
    toast.error('E-mail ou senha incorretos');
    return;
  }

  NProgress.start();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  auth.login('token-simulado', usuario)
  NProgress.done();

  if (usuario.perfil === 'admin') {
    router.push('/gerenciar-politicas');
  } else {
    router.push('/home')
  }

};

const perfil = ref("cidadao");
const aba = ref("entrar");

const router = useRouter();
const auth = useAuthStore();

onMounted(() => {
  document.body.classList.add("login-page");
});

onUnmounted(() => {
  document.body.classList.remove("login-page");
});
</script>

<template>
  <div class="container">
    <div class="card-login">
      <div class="tabs">
        <button
          type="button"
          :class="{
            ativo: aba === 'entrar',
          }"
          @click="aba = 'entrar'"
        >
          Entrar
        </button>
        <button
          type="button"
          :class="{
            ativo: aba === 'cadastrar',
          }"
          @click="aba = 'cadastrar'"
        >
          Cadastrar
        </button>
      </div>
      <form class="login-form">
        <!-- ENTRAR -->
        <div v-show="aba === 'entrar'" class="form-content">
          <div class="form-header">
            <h1>Portal Cidadão</h1>
            <div class="toggle">
              <button
                type="button"
                :class="{
                  ativo: perfil === 'cidadao',
                }"
                @click="perfil = 'cidadao'"
              >
                Cidadão
              </button>
              <button
                type="button"
                :class="{
                  ativo: perfil === 'admin',
                }"
                @click="perfil = 'admin'"
              >
                Administrador
              </button>
            </div>
          </div>
          <div class="input-group">
            <inputLogin
              label="email"
              type="email"
              placeholder="seu@email.com"
              :icon="emailIcone"
              iconAlt="icone-email"
              v-model="emailValue"
            />
            <inputLogin
              label="senha"
              type="password"
              placeholder="• • • • • • • •"
              :icon="senhaIcone"
              iconAlt="icone-senha"
              v-model="senhaValue"
            />
          </div>
          <button type="button" class="btn-entrar" @click="entrar">
            Entrar
          </button>
          <span>Esqueci minha senha</span>
        </div>
        <!-- CADASTRAR -->
        <div v-show="aba === 'cadastrar'" class="form-content">
          <div class="form-header-cadastrar">
            <h1>Portal Cidadão</h1>
            <span>Crie sua conta</span>
            <p>Preencha os dados abaixo para acessar os serviços digitais.</p>
          </div>
          <div class="input-group">
            <inputLogin
              label="nome"
              type="text"
              placeholder="Como deseja ser chamado"
              :icon="nomeIcone"
              iconAlt="icone-nome"
            />
            <inputLogin
              label="email"
              type="email"
              placeholder="seu@email.com"
              :icon="emailIcone"
              iconAlt="icone-email"
            />
            <div class="input-group-row">
              <inputLogin
                label="senha"
                type="password"
                placeholder="• • • • • • • •"
                :icon="senhaIcone"
                iconAlt="icone-senha"
              />
              <inputLogin
                label="confirmar senha"
                type="password"
                placeholder="• • • • • • • •"
                :icon="confirmSenhaIcone"
                iconAlt="icone-senha"
              />
            </div>
          </div>
          <button type="button" class="btn-entrar">Cadastrar</button>
          <div class="footer-cadastrar">
            <div class="divisor"></div>
            <p>
              <img :src="mensagemAdminIcone" alt="Atenção" />
              Acesso administrador é concedido pelo gestor da plataforma
            </p>
          </div>
        </div>
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

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.card-login {
  max-width: 480px;
  width: 100%;
  border-radius: 32px;
  background-color: #e6e7ee;
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
    color: #94a3b8;
    font-size: $font-md;
    font-weight: 600;
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
      background-color: #e2e2e2;
      border-radius: 20px;
      padding: 4px;

      button {
        flex: 1;
        padding: 0 24px;
        height: 36px;
        border: none;
        border-radius: 16px;
        background-color: transparent;
        color: #64748b;
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

    .input-group-row {
      display: flex;
      width: 100%;
      gap: 16px;
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
    color: rgba(0, 36, 68, 0.7);
    font-size: $font-sm;
    font-weight: 600;
    line-height: 143%;
    margin-top: 32px;
    cursor: pointer;
  }

  // CADASTRAR
  .form-header-cadastrar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: $text-brand-dark;
      font-size: 1.875rem;
      font-weight: 800;
      letter-spacing: 0.75px;
    }

    span {
      color: $text-primary;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.75px;
    }

    p {
      color: $text-secondary;
      font-size: $font-sm;
      font-weight: 400;
      line-height: 171%;
      text-align: center;
    }
  }
  .footer-cadastrar {
    .divisor {
      width: 100%;
      height: 1px;
      background-color: rgb(209, 209, 209);
      margin: 24px 0;
    }

    p {
      color: $text-secondary;
      text-align: center;
      font-size: $font-sm;
      font-weight: 400;
      line-height: 162%;

      img {
        margin-right: 8px;
      }
    }
  }
}
</style>
