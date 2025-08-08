import Container from "./Container";
import estilos from "./SemPosts.module.css";

//src/componentes/SemPosts.tsx
export default function SemPost() {
  return (
    <Container>
      <p className={estilos.semPosts}>
        Nenhum post encontrado! Tente novamente mais tarde
      </p>
    </Container>
  );
}
