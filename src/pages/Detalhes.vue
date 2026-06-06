<template>
  <main v-if="politica" class="detalhes-page">
    <div class="detalhes-page__content">
      <CabecalhoDetalhesPolitica :titulo="politica.title" />

      <HeroDetalhesPolitica
        :category="politica.category"
        :title="politica.title"
        :description="politica.detailDescription"
        @registrar-interesse="modalAberto = true"
      />

      <div class="detalhes-page__grid">
        <div class="detalhes-page__principal">
          <section class="detalhes-page__publico">
            <h2 class="detalhes-page__publico-titulo">
              <img
                :src="iconePublicoAlvo"
                alt=""
                class="detalhes-page__publico-icone"
              >
              Público-alvo
            </h2>
            <div class="detalhes-page__chips">
              <span
                v-for="chip in politica.publicoChips"
                :key="chip"
                class="detalhes-page__chip"
              >
                {{ chip }}
              </span>
            </div>
          </section>

          <div class="detalhes-page__listas">
            <SecaoListaDetalhe
              titulo="Critérios"
              :icone="iconeCriterios"
              :itens="politica.criterios"
              tipo="criterio"
            />
            <SecaoListaDetalhe
              titulo="Documentos"
              :icone="iconeDocumentos"
              :itens="politica.documentos"
              tipo="documento"
            />
          </div>
        </div>

        <PainelMetaPolitica
          :orgao="politica.orgao"
          :prazo="politica.prazo"
          :cobertura="politica.cobertura"
        />
      </div>

      <RouterLink to="/orientacoes" class="detalhes-page__orientacao">
        Ficou com dúvidas? Acesse o Canal de Orientação
        <img :src="setaDireita" alt="">
      </RouterLink>
    </div>

    <ModalRegistrarInteresse
      :open="modalAberto"
      :politica-titulo="politica.title"
      @close="modalAberto = false"
      @submit="confirmarInteresse"
    />
  </main>

  <section v-else class="detalhes-page detalhes-page--empty">
    <div class="detalhes-page__content">
      <h1>Política não encontrada</h1>
      <p>A política solicitada não existe ou foi removida.</p>
      <RouterLink to="/politicas">Voltar para políticas</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import { politicas } from '@/data/politicas';
import { useInteressesStore } from '@/stores/interesses';
import CabecalhoDetalhesPolitica from '@/components/shared/CabecalhoDetalhesPolitica.vue';
import HeroDetalhesPolitica from '@/components/shared/HeroDetalhesPolitica.vue';
import SecaoListaDetalhe from '@/components/shared/SecaoListaDetalhe.vue';
import PainelMetaPolitica from '@/components/shared/PainelMetaPolitica.vue';
import ModalRegistrarInteresse from '@/components/shared/ModalRegistrarInteresse.vue';
import iconePublicoAlvo from '@/assets/icons/icone-publico-alvo.svg';
import iconeCriterios from '@/assets/icons/icone-criterios.svg';
import iconeDocumentos from '@/assets/icons/icone-documentos.svg';
import setaDireita from '@/assets/icons/seta-direita.svg';

const route = useRoute();
const toast = useToast();
const interessesStore = useInteressesStore();
const modalAberto = ref(false);

const politica = computed(() =>
  politicas.find((p) => p.id === route.params.id),
);

function confirmarInteresse() {
  if (!politica.value) return;

  interessesStore.registrar(politica.value.id);
  modalAberto.value = false;
  toast.success('Interesse registrado com sucesso!');
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.detalhes-page {
  flex: 1;
  background: $bg-primary;

  &__content {
    @include padding-main;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
    max-width: 1568px;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
      gap: 3rem;
      align-items: start;
    }
  }

  &__principal {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  &__publico-titulo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.5rem;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__publico-icone {
    height: 12px;
    width: auto;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__chip {
    padding: 12px 24px;
    border-radius: 9999px;
    background: $bg-secondary;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 600;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  &__listas {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 3rem;
    }
  }

  &__orientacao {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    align-self: center;
    margin-top: 1rem;
    color: $text-brand-dark;
    font-size: $font-md;
    font-weight: 700;
    text-decoration: none;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &--empty {
    h1 {
      color: $text-brand-dark;
      font-size: 2rem;
      font-weight: 800;
    }

    p {
      margin: 1rem 0 2rem;
      color: $text-secondary;
    }

    a {
      color: $text-brand-dark;
      font-weight: 700;
    }
  }
}
</style>
