import estilos from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form action="" className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Informe um e-mail válido"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="msg">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva mensagem aqui"
        ></textarea>
      </div>

      <div className={estilos.campo}>
        <button type="submit" className={estilos.botao}>
          Enviar
        </button>
      </div>
    </form>
  );
}
