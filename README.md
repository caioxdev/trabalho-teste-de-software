# Portal Cidadão

Plataforma web para centralizar e facilitar o acesso a políticas públicas de assistência social.

![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)
![SCSS](https://img.shields.io/badge/SCSS-sass?logo=sass&color=cc6699)

---

## Sobre o Projeto

O Portal Cidadão é um projeto acadêmico que organiza e divulga políticas públicas com foco em assistência social. A proposta é melhorar o acesso à informação, tornando a navegação mais simples, moderna e acessível.

---

## Tecnologias

- Vue 3
- Sass (SCSS)
- Vite
- Pinia
- Vue Router
- Vue Toastification
- NProgress
- Vitest
- Commitizen

---

## Estrutura do Projeto

```bash
portal-cidadao/
├── docs/
├── tests/
├── public/
├── src/
│   ├── assets/          # ícones, fontes e imagens
│   ├── components/
│   │   ├── ui/          # componentes genéricos (Botao, InputLogin, SearchInput…)
│   │   ├── layout/      # estrutura da página (Header, Footer, UserDropdown…)
│   │   └── shared/      # componentes de uso específico (CardPolitica, HeroInicial…)
│   ├── data/            # dados simulados (políticas, usuários)
│   ├── pages/           # views/rotas da aplicação
│   ├── router/          # configuração do Vue Router
│   ├── stores/          # estado global com Pinia (ex.: autenticação)
│   ├── styles/          # variáveis, mixins e estilos globais (SCSS)
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```

---

## Como Executar

```bash
npm install
npm run dev
```

---

## Funcionalidades

- Listagem de políticas públicas
- Busca por categoria e palavra-chave
- Filtros por público-alvo e região
- Página de detalhes de cada política
- Registro de interesse (simulado)
- Área de acompanhamento (simulada)
- Painel administrativo (simulado)
- Canal de orientação ao cidadão

---

## Documentação do Time

O guia de branches, padrão de commits, fluxo de desenvolvimento e testes estão disponíveis na **Wiki** do repositório.

---

## Documentação Técnica

A documentação de testes e qualidade do software está disponível em:

- [Documentação Técnica](./docs/docs.md)

---

## Design

Protótipo navegável disponível no [Figma](https://www.figma.com/proto/BxwZWjf4djwCX9Y3nRRCuy/Portal-Cidad%C3%A3o?node-id=12-1396&p=f&viewport=234%2C-335%2C0.09&t=yRnoNL7u9zKLpU8J-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A1396&page-id=0%3A1)

---

## Screenshots

### Tela de Login
<img alt="TELA LOGIN" src="https://github.com/user-attachments/assets/3678d34e-7d14-4ebe-9870-8855b9f81d3c" />

### Tela Cadastrar
<img alt="TELA CADASTRAR" src="https://github.com/user-attachments/assets/3cd0b80f-ba53-4f39-96c7-b1e0d892fbf3" />

## Cidadão

### Tela Home
<img alt="TELA HOME-USUARIO" src="https://github.com/user-attachments/assets/7e0ef62b-0d45-447c-a0b9-81b84dfb54a7" />

### Tela Políticas
<img alt="TELA POLITICAS" src="https://github.com/user-attachments/assets/fd03ebe1-9e37-4fbc-9623-2d84bcefa421" />


### Tela Políticas - Detalhes
<img alt="TELA POLITICAS - DETALHES" src="https://github.com/user-attachments/assets/577a5634-e540-47fa-998b-4b7f97a7b24f" />

### Tela Interesses
<img alt="TELA INTERESSES" src="https://github.com/user-attachments/assets/96f69121-51f3-4256-b9d3-4031bf2e9da9" />

### Tela Interesses - Sem Nada
<img alt="TELA INTERESSES - SEM NADA" src="https://github.com/user-attachments/assets/0f250f77-7548-4dce-874c-68516d463db8" />

### Tela Orientações
<img alt="TELA ORIENTAÇÕES" src="https://github.com/user-attachments/assets/6b70f1a2-f545-4e7e-b3f9-ae12f2240ad5" />

## Modals

### Modal de Registrar Interesse
<img alt="modal-registrar interesse" src="https://github.com/user-attachments/assets/218a8694-1c9a-41de-887b-6d5f7b065cd6" />

### Modal de Filtrar Políticas
<img alt="modal-filtrar-politicas" src="https://github.com/user-attachments/assets/d27e3594-0a70-451a-b968-92cbc6be39c1" />


## Administrador

### Tela de Gerenciar Políticas
<img alt="TELA GERENCIAR POLITICAS - ADMIN" src="https://github.com/user-attachments/assets/d0662096-62e0-4767-a14c-9d89a26189a1" />

### Tela de Cadastrar Políticas
<img alt="TELA CADASTRAR POLITICA - ADMIN" src="https://github.com/user-attachments/assets/0dd759ff-0b47-446c-b22f-35ead0f3a0db" />

---


## Equipe

- Ádam Amarildo Guedes Carneiro
- Alessandro da Silva Júnior
- Arthur Freitas Araújo
- Arthur Martins Fonseca Dias
- Caio Seabra de Queiroz
- Marina Souza Ramos
- Miguel Oliveira Ramos

---

## Observações

- Sem backend nesta etapa
- Dados simulados no front-end
- Foco em UI/UX e acessibilidade
- Estrutura preparada para evolução futura