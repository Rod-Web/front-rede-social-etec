import { tratamentoDados } from "../tratamento/dadosLogin.js";

export function dados() {
  document.getElementById("form-login")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const tipoUsuario = document.getElementById("tipo-usuario").value;
      const identificador = document.getElementById("identificador").value;
      const senha = document.getElementById("senha").value;

      if (!tipoUsuario || !identificador || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      try {
        tratamentoDados(tipoUsuario, identificador, senha);
        event.target.reset();
      } catch (error) {
        console.error("Erro ao tratar os dados:", error);
      }
    });
}
