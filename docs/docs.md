# Documentação Técnica - Portal Cidadão

## Objetivo

Este documento apresenta as informações técnicas relacionadas ao processo de testes e qualidade do software aplicados ao Portal Cidadão.

---

## Arquitetura

### Frontend

* Vue 3
* Vite
* Pinia
* Vue Router
* SCSS

### Persistência

* LocalStorage

### Dados

* Dados simulados (mockados)
* Sem integração com backend

---

## Testes Automatizados

### Ferramentas

* Vitest
* @vue/test-utils
* jsdom
* @vitest/coverage-v8

### Arquivos Testados

```text
tests/
└── stores/
    ├── auth.test.js
    ├── interesses.test.js
    └── politicasAdmin.test.js
```

### Funcionalidades Validadas

#### Auth Store

* Login
* Logout
* Persistência de sessão
* Remoção de dados

#### Interesses Store

* Registro de interesse
* Remoção de interesse
* Verificação de interesse
* Controle de duplicidade
* Formatação de datas

#### PoliticasAdmin Store

* Cadastro
* Edição
* Exclusão
* Busca por ID
* Restauração da lista padrão
* Geração de slug

---

## Resultados

### Testes

* 16 testes executados
* 16 testes aprovados
* 0 falhas

### Cobertura

| Métrica    | Resultado |
| ---------- | --------- |
| Statements | 89.79%    |
| Branches   | 39.06%    |
| Functions  | 87.50%    |
| Lines      | 92.68%    |

---

## Comandos Utilizados

```bash
npm run test

npm run test:coverage
```

---

## Observações

* Projeto acadêmico.
* Backend não implementado nesta etapa.
* Dados simulados para validação das funcionalidades.
* Foco em qualidade, usabilidade, acessibilidade e responsividade.