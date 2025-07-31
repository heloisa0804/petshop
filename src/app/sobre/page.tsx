import { Metadata } from "next";
import estilos from "./sobre.module.css";
//src//app/not-found.tsx
export const metadata: Metadata = {
  title: "Sobre | PetShop ",
  description: "Temos notícias todos os dias",
};

export default function Sobre() {
  return (
    <section className={estilos.conteudo}>
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iste
        tempora in quas animi quia sint, maiores sequi, voluptates pariatur,
        deserunt doloremque fuga libero explicabo nobis! Et voluptate tempore
        vitae!
      </p>
    </section>
  );
}
