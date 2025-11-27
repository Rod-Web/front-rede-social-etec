export async function tratamentoDados(tipoUsuario, identificador, senha) {
  
  const dataUser = {
    usuario: tipoUsuario,
    identificador,
    senha,
  };

  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(dataUser),
    });

    // tenta converter em JSON, mas com segurança
    let data;
    try {
      data = await response.json();
    } catch {
      data = { mensagem: "Resposta inválida do servidor." };
    }
    console.log(data)

    let respHtml = document.getElementById("resposta");
    respHtml.style.color = "red"
    // se o servidor retornou sucesso (200)
    if (data.sucesso) {
      respHtml.style.color = "green"
      respHtml.textContent = "✅ Login bem-sucedido!"
      console.log("Usuário:", data.usuario);

      const size = data.usuario.identificador.length;
      
      if (size == 7)
        window.location.href = "/html/dashbord-professor.html";
      else  if (size == 6)
        window.location.href = "/html/dashbord-aluno.html";

      
    } else {

      // resposta com erro de negócio (ex: 401, 400)
      console.warn("⚠️ Falha no login:", data.mensagem || "Erro desconhecido");
      respHtml.textContent = data.mensagem || "Falha ao realizar login."
    }

  } catch (erro) {

    console.error("❌ Erro na requisição:", erro);
    respHtml.textContent = "Erro ao conectar com o servidor.";

  }

}
