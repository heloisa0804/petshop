//src//app/not-found.tsx

import { Metadata } from "next";
import estilos from "./not-found.module.css";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Página não encontrada | PetShop ",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops!Página não encontrada!!</h2>
      <div className={estilos.imagem404}>
        <img
          src="./images/404.svg"
          alt="Cachorrinho com cara triste e nariz vermelho com símbolo de interrogação"
        />
        <p>
          <Link href="/"> Voltar para a página inicial</Link>
        </p>
      </div>
    </section>
  );
}
