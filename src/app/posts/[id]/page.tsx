// src/app/app/[id]/page.tsx
import Container from "@/components/Container";
import estilos from "./detalhes-post.module.css";
import { Post } from "@/types/Post";

///Faça um novo fetch na Api usando este id e mostre no HTML abaixo os dados obtidos
type DetalhesPostProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: DetalhesPostProps) {
  const { id } = params;

  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();

  return {
    title: post.titulo + " | Petshop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhesPostProps) {
  const { id } = params;

  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();

  return (
    <article className={estilos.conteudo}>
      <h2>{post.titulo}</h2>
      <Container>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Container>
    </article>
  );
}
