import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('deve realizar login corretamente', () => {
    const auth = useAuthStore()

    auth.login('token123', {
      nome: 'Maria',
      perfil: 'cidadao'
    })

    expect(auth.token).toBe('token123')
    expect(auth.user.nome).toBe('Maria')
    expect(auth.isAuthenticated).toBe(true)
  })
})

it('deve salvar token no localStorage', () => {
  const auth = useAuthStore()

  auth.login('token123', {
    nome: 'Maria',
    perfil: 'cidadao',
  })

  expect(localStorage.getItem('token')).toBe('token123')
})

it('deve realizar logout', () => {
  const auth = useAuthStore()

  auth.login('token123', {
    nome: 'Maria',
    perfil: 'cidadao',
  })

  auth.logout()

  expect(auth.token).toBe(null)
  expect(auth.user).toBe(null)
})

it('deve remover dados do localStorage ao fazer logout', () => {
  const auth = useAuthStore()

  auth.login('token123', {
    nome: 'Maria',
    perfil: 'cidadao',
  })

  auth.logout()

  expect(localStorage.getItem('token')).toBe(null)
  expect(localStorage.getItem('user')).toBe(null)
})