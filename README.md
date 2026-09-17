# GitHub Explorer

Aplicação client-side (SPA) que consome a API pública do GitHub para buscar um usuário, exibir seu perfil e explorar seus repositórios ordenados por popularidade. Desenvolvida como desafio técnico para vaga de Front-End.

🔗 **Demo:** https://desafio-front-vinicius-fernandes.vercel.app

## ✨ Funcionalidades

- Busca de um usuário do GitHub pelo username
- Exibição dos detalhes do usuário: avatar, nome, bio, seguidores, seguindo e e-mail
- Listagem dos repositórios públicos do usuário
- Ordenação da listagem por estrelas (decrescente/crescente), nome ou atualização recente
- Página de detalhes do repositório: nome, descrição, estrelas, linguagem principal e link externo para o GitHub
- Tratamento de erros (usuário/repositório não encontrado, limite de requisições da API excedido)
- Página 404 para rotas inexistentes
- Layout responsivo (mobile, tablet, desktop)

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React 19](https://react.dev/) | Core |
| [React Router v8](https://reactrouter.com/) | Roteamento (modo SPA, `ssr: false`) |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática (modo `strict`) |
| [TanStack Query](https://tanstack.com/query) | Cache, loading/error state e requisições assíncronas |
| [Axios](https://axios-http.com/) | Cliente HTTP para consumo da API do GitHub |
| [React Bootstrap](https://react-bootstrap.github.io/) + [Bootstrap 5](https://getbootstrap.com/) | UI e responsividade |
| [nuqs](https://nuqs.47ng.com/) | Estado de ordenação sincronizado com a URL |
| [Vitest](https://vitest.dev/) | Testes unitários |
| [Biome](https://biomejs.dev/) | Lint e formatação de código |
| [Vite](https://vitejs.dev/) | Build tool |

## 📁 Arquitetura

O projeto segue uma organização por **features**, isolando regras de negócio e componentes específicos de cada domínio, com uma camada `shared` para o que é reutilizado entre features.

```
app/
├── api/                     # Camada de acesso à API do GitHub
│   ├── client.ts            # Instância do axios + tratamento de erros (404, rate limit)
│   ├── error.ts             # Classe ApiError
│   ├── types.ts             # Tipos dos dados retornados pela API
│   └── services/            # Funções de chamada (getUser, getRepos, getRepo)
│
├── features/                # Cada pasta é uma feature isolada
│   ├── home/                # Página inicial (busca)
│   ├── user-profile/        # Perfil do usuário + listagem de repositórios
│   └── repo-detail/         # Detalhe de um repositório
│       ├── components/      # Componentes visuais da feature
│       ├── hooks/           # Hooks (React Query) da feature
│       └── utils/           # Funções auxiliares da feature
│
├── shared/                  # Componentes e utilitários usados em mais de uma feature
│   ├── components/
│   └── utils/
│
├── routes/                  # Componentes de rota (mapeados em routes.ts)
├── routes.ts                # Definição das rotas da aplicação
└── root.tsx                 # Layout raiz, providers e error boundary
```

### Rotas

| Rota | Descrição |
|---|---|
| `/` | Busca de usuário |
| `/u/:username` | Perfil do usuário + repositórios |
| `/u/:username/:repo` | Detalhes de um repositório |
| `*` | Página 404 |

### Decisões técnicas

- **SPA sem SSR**: como o desafio pede uma aplicação *client-side* que consome a API do GitHub diretamente do navegador, o `react-router.config.ts` desabilita o server-side rendering (`ssr: false`).
- **TanStack Query** para as chamadas à API: cuida de cache, estados de loading/erro e evita requisições duplicadas, sem precisar de um estado global manual.
- **nuqs** para o filtro de ordenação: mantém a ordenação escolhida na URL (`?sort=...`), permitindo compartilhar/recarregar a página sem perder o filtro.
- **Sem autenticação na API**: as chamadas à API do GitHub são feitas sem token, direto do navegador (client-side), respeitando o limite público de 60 requisições/hora por IP — adequado ao escopo do desafio.

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e [pnpm](https://pnpm.io/).

```bash
# instalar dependências
pnpm install

# rodar em modo desenvolvimento
pnpm dev
```

Aplicação disponível em `http://localhost:5173`.

### Outros scripts

```bash
pnpm build       # build de produção
pnpm start       # sobe o build de produção
pnpm typecheck   # checagem de tipos (TypeScript)
pnpm format      # formata o código com Biome
pnpm test        # roda os testes em modo watch
pnpm test:run    # roda os testes uma vez (CI)
```

## 🧪 Testes

Testes unitários com Vitest cobrindo a lógica de negócio pura: ordenação de repositórios (`sortRepos`) e formatação de dados (`formatNumber`, `formatRelativeTime`).

```bash
pnpm test:run
```

## 🔌 API

Consome diretamente a [API REST do GitHub](https://docs.github.com/en/rest):

- `GET /users/{username}` — dados do usuário
- `GET /users/{username}/repos` — repositórios do usuário
- `GET /repos/{owner}/{repo}` — detalhes de um repositório

## 👤 Autor

**Vinicius Fernandes**
GitHub: [@fernandes-vinicius](https://github.com/fernandes-vinicius)
