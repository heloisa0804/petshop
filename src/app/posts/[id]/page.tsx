// src/app/app/[id]/page.tsx
import Container from "@/components/Container";
import estilos from "./detalhes-post.module.css";
import { Post } from "@/types/Post";
import { notFound } from "next/navigation";

///Faça um novo fetch na Api usando este id e mostre no HTML abaixo os dados obtidos
type DetalhesPostProps = {
  params: { id: string };
};

// A função abaixo precisa:
// - Receber o id
// - Executar o acesso à API usando este id e retornar o post com os dados
// - O retorno da função DEVE SER uma Promise
// - Não se esqueça de chamar/usar esta nova função dentro do generaTeMetadata e do Detalhes no lugar do codigo que vc irá remover.

async function buscarPostPorId(id: string): Promise<Post> {
  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });
  if (resposta.status === 404) {
    // Buscar a page not-found.tsx automaticamente em casa de erro 404
    notFound();
  }
  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();
  return post;
}

export async function generateMetadata({ params }: DetalhesPostProps) {
  const { id } = await params;
  const post = await buscarPostPorId(id);

  return {
    title: post.titulo + " | Petshop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhesPostProps) {
  const { id } = params;
  const post: Post = await buscarPostPorId(id);

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
