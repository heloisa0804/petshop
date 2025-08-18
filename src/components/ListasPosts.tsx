//src/components/ListaPosts.txs

"use client";

import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";
import { useState } from "react";
import { log } from "console";

type ListaPostsProps = {
  posts: Post[];
};

export default function ListasPosts({ posts }: ListaPostsProps) {
  /*Gerando um novo array de categorias usando map e garantindo que não há repetição de categorias usando spread e new e new Set */
  const categorias = [...new Set(posts.map((post) => post.categoria))];

  /* Definindo o statte com tipos null (quando não há categoria selecionada) ou string (que é p tipo para nomes/textos referentes às categorias).
  Passamos null entre parênteses indicando que por padrão não há categoria selecionada */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(
    "comportamento"
  );

  const postFiltrados = categoriaAtiva
    ? posts.filter((post) => post.categoria === categoriaAtiva)
    : posts;

  console.log(postFiltrados);

  return (
    <>
      <FiltroCategorias />
      <div className={estilos.posts}>
        {posts.map((post) => (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>{post.titulo}</h3>
              <p>{post.subtitulo}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
