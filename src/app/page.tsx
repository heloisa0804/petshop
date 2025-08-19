//src//app/not-found.tsx

import ListasPosts from "@/components/ListasPosts";
import estilos from "./page.module.css";
import { Post } from "@/types/Post";
import SemPost from "@/components/SemPosts";

// Importando os recursos da lib supabase
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    throw new Error("Erro ao buscar os posts: " + error.message);
  }

  const posts: Post[] = data;

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      {/* Renderização Condicional */}
      {posts.length === 0 ? <SemPost /> : <ListasPosts posts={posts} />}
    </section>
  );
}
