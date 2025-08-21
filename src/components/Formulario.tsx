"use client";
import { useState } from "react";
import estilos from "./Formulario.module.css";
import { enviarContato } from "@/lib/enviar-contato";

export default function Formulario() {
  //Estados para os textos da mensagens
  const [mensagem, setMensagem] = useState("");

  //Estados para o tipo de mensagem: sucesso ou erro
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  async function processarDados(dadosForm: FormData) {
    setMensagem("");
    setTipoMensagem("");

    try {
      enviarContato(dadosForm);
      setMensagem("Mensagem enviada com sucesso!");
      setTipoMensagem("sucesso");

      // Reseta os campos do formúlario
      dadosForm.set("nome", "");
      dadosForm.set("email", "");
      dadosForm.set("mensagem", "");
    } catch (error: unknown) {
      //Verificando se é um erro do type Error, para evitar erros no deploy.
      setMensagem(error instanceof Error ? error.message : "Erro ao enviar");
      setTipoMensagem("erro");
    }
  }

  return (
    <form action={processarDados} className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite o nome completo"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe um e-mail válido"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva sua mensagem aqui"
        ></textarea>
      </div>
      <div className={estilos.campo}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
