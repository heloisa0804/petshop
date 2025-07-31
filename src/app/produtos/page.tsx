import { Metadata } from "next";
import estilos from "./produto.module.css";
//src//app/not-found.tsx
export const metadata: Metadata = {
  title: "Produtos | PetShop ",
  description: "Temos produtos variados de todos os tipos de animais",
};
export default function Produtos() {
  return (
    <section className={estilos.conteudo}>
      <h2>Produtos</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, non.
      </p>
    </section>
  );
}
