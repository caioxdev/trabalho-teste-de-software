import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useAuthStore } from '@/stores/auth'
import { useInteressesStore } from '@/stores/interesses'

describe('Interesses Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()

    const auth = useAuthStore()

    auth.login('token', {
      nome: 'Maria',
      email: 'maria@email.com',
      perfil: 'cidadao',
    })
  })

  it('deve registrar interesse', () => {
    const store = useInteressesStore()

    store.registrar('bolsa-familia')

    expect(store.lista.length).toBe(1)
  })

  it('deve verificar interesse existente', () => {
    const store = useInteressesStore()

    store.registrar('bolsa-familia')

    expect(
      store.possuiInteresse('bolsa-familia')
    ).toBe(true)
  })

  it('não deve duplicar interesse', () => {
    const store = useInteressesStore()

    store.registrar('bolsa-familia')
    store.registrar('bolsa-familia')

    expect(store.lista.length).toBe(1)
  })

  it('deve remover interesse', () => {
    const store = useInteressesStore()

    store.registrar('bolsa-familia')
    store.remover('bolsa-familia')

    expect(store.lista.length).toBe(0)
  })

  it('deve indicar quando existem interesses', () => {
    const store = useInteressesStore()

    store.registrar('bolsa-familia')

    expect(store.temInteresses).toBe(true)
  })

  it('deve retornar data formatada', () => {
    const store = useInteressesStore()

    store.registrar('bolsa-familia')

    expect(
      store.dataRegistroFormatada('bolsa-familia')
    ).not.toBe('')
  })
})