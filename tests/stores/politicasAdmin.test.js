import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { usePoliticasAdminStore } from '@/stores/politicasAdmin'

describe('Politicas Admin Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  const novaPolitica = {
    nome: 'Auxílio Estudantil',
    categoria: 'EDUCACAO',
    publicoAlvo: 'Universitarios',
    descricao: 'Auxílio financeiro',
    documentos: 'RG, CPF',
    orgao: 'MEC',
    prazo: '31/12/2026',
    criterios: 'Estar matriculado',
  }

  it('deve cadastrar nova política', () => {
    const store = usePoliticasAdminStore()

    const quantidadeInicial = store.lista.length

    store.salvar(novaPolitica)

    expect(store.lista.length)
      .toBe(quantidadeInicial + 1)
  })

  it('deve gerar slug corretamente', () => {
    const store = usePoliticasAdminStore()

    const id = store.salvar(novaPolitica)

    expect(id).toBe('auxilio-estudantil')
  })

  it('deve localizar política pelo id', () => {
    const store = usePoliticasAdminStore()

    const id = store.salvar(novaPolitica)

    expect(store.obterPorId(id)).not.toBe(null)
  })

  it('deve editar política existente', () => {
    const store = usePoliticasAdminStore()

    const id = store.salvar(novaPolitica)

    store.salvar(
      {
        ...novaPolitica,
        descricao: 'Descrição alterada',
      },
      id
    )

    expect(
      store.obterPorId(id).descricao
    ).toBe('Descrição alterada')
  })

  it('deve remover política', () => {
    const store = usePoliticasAdminStore()

    const id = store.salvar(novaPolitica)

    store.remover(id)

    expect(
      store.obterPorId(id)
    ).toBe(null)
  })

  it('deve restaurar lista padrão', () => {
    const store = usePoliticasAdminStore()

    store.salvar(novaPolitica)

    store.restaurarPadrao()

    expect(
      store.lista.some(
        p => p.titulo === 'Auxílio Estudantil'
      )
    ).toBe(false)
  })
})