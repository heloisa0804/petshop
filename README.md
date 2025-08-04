# PetShop

Projeto de uma aplicação web SPA usando Next.js, Typescript e Supabase ( Baas - Back End as a Service).

## 06_fake-api-usando-json-server-e-aplicando-rota-dinamica

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
