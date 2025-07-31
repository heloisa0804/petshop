import { Metadata } from "next";
import estilos from "./contato.module.css";
//src//app/not-found.tsx
export const metadata: Metadata = {
  title: "Contato | PetShop ",
  description: "Entre em contato conosto",
};
export default function page() {
  return (
    <section className={estilos.conteudo}>
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quae
        voluptate voluptates praesentium quos. Molestias.
      </p>
    </section>
  );
}
