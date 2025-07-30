//src//app/not-found.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | PetShop ",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section>
      <h2>Ops!Página não encontrada!! 🐶😹</h2>
    </section>
  );
}
