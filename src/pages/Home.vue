<template>
  <HeroInicial
    title="Encontre os programas sociais que você tem direito"
    subtitle="Consulte, filtre e acompanhe políticas públicas de assistência social em um só lugar. Uma plataforma feita para garantir seus direitos fundamentais."
  >
    <Botao
      variant="primary"
      to="/politicas"
      :icon="setaDireita"
      icon-alt="Seta direita"
    >
      Explorar Políticas
    </Botao>
    <Botao
      variant="secondary"
      to="/orientacoes"
    >
      Como funciona?
    </Botao>
  </HeroInicial>

  <main class="home-main">
    <div class="home-main__content">
      <BuscaComFiltros
        v-model="busca"
        v-model:filter="filtroAtivo"
        :filters="filtrosArea"
        placeholder="Busque por área: saúde, educação, assistência social..."
      />
      <PoliticasDestaque :policies="politicasFiltradas" />
    </div>
    <BannerOrientacao />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import setaDireita from '@/assets/icons/seta-direita.svg';
import { filtrosArea, politicasDestaque } from '@/data/politicas';
import Botao from '@/components/ui/Botao.vue';
import HeroInicial from '@/components/shared/HeroInicial.vue';
import BuscaComFiltros from '@/components/shared/BuscaComFiltros.vue';
import PoliticasDestaque from '@/components/shared/PoliticasDestaque.vue';
import BannerOrientacao from '@/components/shared/BannerOrientacao.vue';

const busca = ref('');
const filtroAtivo = ref('tudo');

const politicasFiltradas = computed(() => {
  let lista = politicasDestaque;

  if (filtroAtivo.value !== 'tudo') {
    lista = lista.filter((p) => p.areas.includes(filtroAtivo.value));
  }

  const termo = busca.value.trim().toLowerCase();
  if (termo) {
    lista = lista.filter(
      (p) =>
        p.title.toLowerCase().includes(termo) ||
        p.description.toLowerCase().includes(termo) ||
        p.category.toLowerCase().includes(termo),
    );
  }

  return lista;
});
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;

.home-main {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__content {
    @include padding-main;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    margin-top: 3rem;
  }
}
</style>
