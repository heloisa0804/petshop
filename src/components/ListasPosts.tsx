//src/components/ListaPosts.txs
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";

type ListaPostsProps = {
  posts: Post[];
};

export default function ListasPosts({ posts }: ListaPostsProps) {
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
