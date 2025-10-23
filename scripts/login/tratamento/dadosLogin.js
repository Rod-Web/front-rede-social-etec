export async function tratamentoDados(tipoUsuario, identificador, senha) {


  const dataUser = {
    usuario: tipoUsuario,
    identificador: identificador,
    senha: senha,
  };


  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    });

    const data = await response.json();

    if (response.ok && data.sucesso) {
      document.getElementById("resposta").textContent =
        "✅ Login bem-sucedido!";

      console.log("Usuário: ", data.usuario)
      console.log("Token JWT:", data.token);
      localStorage.setItem("token", data.token);
      // Redirecionar
      } else {
        console.warn("⚠️ Falha no login:", data.mensagem);
        document.getElementById("resposta").textContent
        = data.mensagem;
      }
    } catch (erro) {
      console.error("❌ Erro na requisição:", erro.message);
      alert("Erro ao conectar com o servidor.");
    }

}
