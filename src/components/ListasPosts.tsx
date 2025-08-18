//src/components/ListaPosts.txs

"use client";

import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";
import { useState } from "react";

type ListaPostsProps = {
  posts: Post[];
};

export default function ListasPosts({ posts }: ListaPostsProps) {
  /*Gerando um novo array de categorias usando map e garantindo que não há repetição de categorias usando spread e new e new Set */
  const categorias = [...new Set(posts.map((post) => post.categoria))];

  const [categoriaAtiva, setCategoriaAtiva] = useState();

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
