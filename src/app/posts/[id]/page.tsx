//src/app/app/[id]/page.tsx
import Container from "@/components/Container";
import estilos from "./detalhes-post.module.css";
export default function DetalhePost() {
  return (
    <article className={estilos.conteudo}>
      <h2>Título</h2>
      <Container>
        <h3>Categoria</h3>
        <p>Descrição</p>
      </Container>
    </article>
  );
}
