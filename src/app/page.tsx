//src//app/not-found.tsx

import ListasPosts from "@/components/ListasPosts";
import estilos from "./page.module.css";
import arrayPosts from "@/data/array-posts";
import { log } from "node:console";
export default async function Home() {
  const resposta = await fetch(`http://localhost:2112/posts`);
  if (!resposta.ok) {
    throw new Error("Erro ao buscar os posts: " + resposta.statusText);
  }
  const posts = await resposta.json();
  console.log(posts);

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as últimas notícias sobre Pets</p>
      <ListasPosts posts={arrayPosts} />
    </section>
  );
}
