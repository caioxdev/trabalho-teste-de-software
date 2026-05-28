<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-lado-esq">
        <h1>Portal Cidadão</h1>
        <span>© 2026 Portal Cidadão. Um serviço de Governança Digital.</span>
      </div>
      <nav class="nav">
        <router-link to="#">Privacidade</router-link>
        <router-link to="#">Termos de Uso</router-link>
        <router-link to="#">Acessibilidade</router-link>
        <router-link to="#">Contato</router-link>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
@use "@/styles/mixins" as *;

.footer {
  width: 100%;
  background-color: $bg-secondary;
  box-shadow: $box-shadow-2;

  .container {
    @include flex(space-between, center, row, 0);
    padding: 1rem 3rem;
  }

  .footer-lado-esq {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      color: $text-brand;
      font-size: $font-md;
      font-weight: 800;
      line-height: 150%;
    }

    span {
      color: $text-secondary;
      font-size: $font-sm;
      font-weight: 400;
      line-height: 143%;
      letter-spacing: 0.35px;
    }
  }

  .nav {
    display: flex;
    gap: 32px;

    a {
      color: $text-secondary;
      text-decoration: none;
      transition: color .2s ease;

      &:hover {
        color: $text-brand;
      }
    }
  }
}


</style>