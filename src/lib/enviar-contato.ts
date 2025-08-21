"use server";

import { supabase } from "./supabase";

export async function enviarContato(dadosDoFormulario: FormData) {
  // Extraindo e tratando os dados de cada campo do formulário
  const nome = dadosDoFormulario.get("nome")?.toString().trim();
  const email = dadosDoFormulario.get("nome")?.toString().trim();
  const mensagem = dadosDoFormulario.get("nome")?.toString().trim();

  // validação básica no back-end
  if (!nome || !email || !mensagem) {
    throw new Error("todos os campos obrigatórios");
  }

  const { error } = await supabase
    .from("contatos")
    .insert({ nome, email, mensagem });

  if (error) {
    throw new Error("Não foi possivel enviar mensagem.tente mais tarde.");
  }
}
