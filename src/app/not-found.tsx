//src//app/not-found.tsx

import { Metadata } from "next";
import estilos from "./not-found.module.css";
export const metadata: Metadata = {
  title: "Página não encontrada | PetShop ",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops!Página não encontrada!! 🐶😹</h2>
    </section>
  );
}
