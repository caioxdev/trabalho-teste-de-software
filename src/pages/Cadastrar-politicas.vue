<template>
  <main class="cadastrar-page">
    <div class="cadastrar-page__content">
      <CabecalhoCadastrarPolitica :modo-edicao="modoEdicao" />

      <section class="cadastrar-page__formulario">
        <FormularioCadastrarPolitica
          :valores-iniciais="valoresFormulario"
          :modo-edicao="modoEdicao"
          @salvar="salvarPolitica"
          @cancelar="voltar"
        />
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { usePoliticasAdminStore } from '@/stores/politicasAdmin';
import { obterPoliticaPorId } from '@/data/politicas';
import { politicaParaFormulario } from '@/data/politicasAdmin';
import CabecalhoCadastrarPolitica from '@/components/shared/CabecalhoCadastrarPolitica.vue';
import FormularioCadastrarPolitica from '@/components/shared/FormularioCadastrarPolitica.vue';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const politicasAdmin = usePoliticasAdminStore();

const politicaId = computed(() => route.query.id?.toString() ?? '');
const modoEdicao = computed(() => Boolean(politicaId.value));

const valoresFormulario = computed(() => {
  if (!politicaId.value) return {};

  const admin = politicasAdmin.obterPorId(politicaId.value);
  if (admin) return politicaParaFormulario(admin);

  const base = obterPoliticaPorId(politicaId.value);
  return politicaParaFormulario(base);
});

function voltar() {
  router.push('/gerenciar-politicas');
}

function salvarPolitica(dados) {
  const id = politicasAdmin.salvar(
    dados,
    modoEdicao.value ? politicaId.value : null,
  );

  toast.success(
    modoEdicao.value
      ? 'Política atualizada com sucesso!'
      : 'Política cadastrada com sucesso!',
  );

  router.push('/gerenciar-politicas');
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.cadastrar-page {
  flex: 1;
  background: $bg-primary;

  &__content {
    @include padding-main;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 1568px;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  &__formulario {
    padding: 2.5rem;
    border-radius: 24px;
    background: $bg-secondary;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
}
</style>
