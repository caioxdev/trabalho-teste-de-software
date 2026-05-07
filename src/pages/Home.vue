<script setup>
import setaDireita from "@/assets/icons/seta-direita.svg";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="hero">
    <div class="container-topo">
      <h1>Encontre os programas sociais que você tem direito</h1>
      <p>
        Consulte, filtre e acompanhe políticas públicas de assistência social em
        um só lugar. Uma plataforma feita para garantir seus direitos
        fundamentais.
      </p>
      <div class="container-btn-topo">
        <RouterLink id="btn-explorar-politicas" to="/politicas">
          Explorar Políticas <img :src="setaDireita" alt="Seta direita" />
        </RouterLink>
        <RouterLink id="btn-como-funciona" to="/orientacoes">Como funciona?</RouterLink>
      </div>
    </div>
  </section>
  <section class="secao-busca">
    <p>Teste</p>
  </section>
  <main>
    <h2>Teste</h2>
  </main>
</template>

<style lang="scss" scoped>
@use "@/scss/variables.scss" as *;
@use "@/scss/mixins.scss" as *;

.hero {
  width: 100%;
  min-height: 465px;
  background: url("@/assets/img/imagem-fundo-home.webp") center/cover no-repeat;

  .container-topo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 792px;
    padding-top: 5.625rem;

    h1 {
      color: #fff;
      font-size: 3rem;
      font-weight: 800;
      line-height: 100%;
      width: 700px;
      letter-spacing: 1.8px;
      text-align: center;
      position: relative;
      z-index: 2;

      &::before {
        content: "Encontre os programas sociais que você tem direito";
        position: absolute;
        inset: 0;
        z-index: -1;
        filter: blur(18px);
        opacity: 0.6;
      }
    }

    p {
      width: 649px;
      color: #c3c3c3;
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
      text-align: justify;
      margin: 2rem 0 4rem;
    }

    .container-btn-topo {
      display: flex;
      gap: 48px;

      #btn-explorar-politicas {
        display: flex;
        padding: 1rem 2rem;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 48px;
        background: $button-primary;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

        text-decoration: none;
        color: #fff;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 155%;

        img {
          filter: brightness(0) invert(1);
        }
      }

      #btn-como-funciona {
        display: flex;
        padding: 1rem 2rem;
        justify-content: center;
        align-items: center;
        border-radius: 48px;
        background: $button-secondary;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

        text-decoration: none;
        color: $text-brand-dark;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 155%;
      }
    }
  }
}

.secao-busca {
  @include padding-main;
}

main {
  @include padding-main;
}

</style>