# PetShop

Projeto de uma aplicação web SPA usando Next.js, Typescript e Supabase ( Baas - Back End as a Service).

## 10_rotinas-do-formulario-de-contato

- Criação do componente `Formulario` e importação na página de Contato
- Programação de uma **ação de servidor (server action)**: `lib/enviar-contato.ts`:
  - É uma função que executa no back-end, por isso, a diretiva `use server`
  - Responsável por receber, validar e enviar os dados para Supabase
- Gerenciamento de `state` do `Formulario` e do `BotaoEnviar` visando melhorar a experiência do úsuario demonstrando o status do processamento através de mensagens e estilos personalizados.

---

## 09_migrando-api-para-supabase

### No projeto no supabase

- Cadastro no Supabase usando a conta de GitHub
- Criação e configuração de um projeto dentro do Supabase
- Criação da tabela `post` com os campos:
  - id (uuid), pk
  - titulo (text), not null
  - subtitulo (text), noot null
  - descrição (text), noot nul
  - categoria (text), not null
- Importação dos dados para a tabela usando o formato `csv`
- Adição de uma política de segurança para `SELECT` público

### No projeto PetShop (VSCode)

#### Configuração geral

- Instalação de lib `npm install @supabase/supabase-js`
- Criação do arquivo conbteudo variáveis de ambiente: `env.local`, com aplicação das variáveis `NEXT_PUBLIC_SUPABASE_URL` E `NEXT_PUBLIC_SUPABASE_ANON_KEY`.Obs.: conteúdo para este arquivo está pronto em sua conta no Supabase, dentro do botão **CONNECT**.
- Criação da ppasta `lib` e do arquivo `supabase.ts`

#### Pagínas Home (app/page.tsx) e DetalhePost (app/posr/[id]/page.tsx)

- Substituição da função `fetch` e do acesso à fake-api pela função e recursos do supabase
- Ajustes nas verificações de erro
- Criação de um componente especial de `loading`( exibindo enquanto o processamento dos posts esta acontecendo)

---

## 08_filtro-de-categorias

### Resumo do ciclo de comunicação da prop que passa uma função do pai (ListaPosts) para o filho (FiltroCategorias)

- Usuário clica em um botão do FiltroCategorias
- Esse clique (`onClick`) ele "chama" a prop `aoSelecionar` passando para ela a categoria escolhida (por exemplo, 'bem-estar')
- O `aoSelecionar` na verdade é um apontamento para o `setCategoriaAtiva` definida no pai (ListasPosts)
- O React/Next atualiza o estado (o state `categoriaAtiva`) do pai
- O pai (ListasPosts) reexecuta com novo estado, exebindo os posts conforme a categoria ativa
- O `postsFiltrados` é atualizado e os posts filtrado aparecem.

Em resumo, o filho **não muda o estado sozinho**. Ele só **avisa** o pai.

Quem tem o estado. tem o controle.

---

## 07_componentes-SemPosts-e-notfound-da-rota-de-posts

- Criação do componentes `Semposts` e aplicação de renderização condicional na page `Home`
- Criação da page `not-found.tsx` e aplicação de rota dinâmica de post usando verificação de erro status 404 e chamada da função `notFound()`

---

## 06_fake-api-usando-json-server-e-aplicando-rota-dinamica

- Instalação e configuração `jason server` como dependência de desenvolvedor: Para Instalar: `npm install json-server --sev-dev`
- Ultilização do `fetch` com `async/await` na página Home para sonsumir os posts da fak-api
- Exclusão do array de posts
- Substituição do array fixo de posts por dados da fake-api
- Configuração de rota dinâmica com carregamento de dados a partir da rota
- Uso de `Promise` como tipo para a prop `params`
- Geração de metadados dinâmicos usando a função `generaMetadata`
- Refatoração da programação de busca de dados na fake-api usando uma função dedicada (`buscarPorId`)

---

## 05_home-com-lista-de-posts-a-partir-de-um-array

- Configuração de um novo tipo `Post`
- Adição de um array de dados: `array-post.ts`
- Componente `ListasPosts.tsx` com prop `posts`
- Ultilização de `map` para renderizar os <article> com o conteúdo dinâmico de cada post

---

## 04_melhorias-nas-paginas-e-componente-container

- Adição de contúdo às pages (Sobre, Produtos, Contato)
- Ultilização de imagem SVG na page Not Found
- Criação e aplicação do componente XContainer usando children
- Desativação do compilador TurboPack para evitar bugs cache ( em especial quando a alguns m´dulos Css)

---

## 03_componentes-cabecalho-menu-e-modulos-de-estilo

- Criação de componentes `Cabecalho` e `Menu`
- Definição de link ativo no menu ultilizando o hook `usePathname`
- Ativação a renderização de componentes em modo ciente com `use client`
- Importação e aplicação do módulo CSS

---

## 02_paginas-basicas-links-ajustes-de-layout-metadados

- Criação das páginas/rotas (usando pastas e arquivo page)
- Definição de metadados especificos para cada página
- Adição do componentes `<Link>` para navegação entre as rotas
- Ajustes diversos de estrutura HTML

---

## 01_css-global-fonts-favicon-metadados

- Adição de estilos
- Importação, configuração e aplicação de fonts de web usando `next/fonts`
- Aplicação automática de favicon adicionado arquivo `icon.png` direto na pasta `app`

---

## 00_projeto-zerado

Ajustes e exclusões de elementos da instalação padrão do Next.js

## Revisando tópicos importantes

- `src/app/page.tsx: página `(index, Home). Obs.: o nome do arquivo **precisa ser** `page.tsx`, mas o nome interno (na função) pode ser qualquer um.

- `src/app/layout.tsx`: componente/arquivo especial que define a estrutura padrão (layout) para todas as páginas.
