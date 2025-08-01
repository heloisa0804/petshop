//src/components/ListaPosts.txs
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

// Configurando um tipo para este componente e, neste tipo, definimos a prop post relacionado ela ao tipo Post criado anteriormente.
type ListaPostProps = {
  post: Post[];
};

export default function ListasPosts({ post }: ListaPostProps) {
  return (
    <div className={estilos.posts}>
      <article>
        <h3>Titulo do post</h3>
        <p>Subtítulo do post </p>
      </article>
    </div>
  );
}
