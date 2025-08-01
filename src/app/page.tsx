//src//app/not-found.tsx

import ListasPosts from "@/components/ListasPosts";
import estilos from "./page.module.css";
export default function Home() {
  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as últimas notícias sobre Pets</p>
      <ListasPosts />
    </section>
  );
}
