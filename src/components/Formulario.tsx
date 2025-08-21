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
        <input
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva mensagem aqui"
        />
      </div>
    </form>
  );
}
