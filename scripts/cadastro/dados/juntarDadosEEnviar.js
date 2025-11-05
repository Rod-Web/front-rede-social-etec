import { dadosAluno } from "./capturarDadosPessoais.js";
import { dadosTurma } from "./capturaDadosDaTurma.js";
export async function juntarDadosEEnviar() {
    const dadosCompletos = {
        ...dadosAluno,
        ...dadosTurma
    }; 

  try {
    const resposta = await fetch("http://localhost:3001/alunos/inserirAluno", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosCompletos),
    });

    console.log("Dados enviados com sucesso!");


    const data = await resposta.json();

    if (!resposta.ok) {
      alert("Erro: " + data.erro); 
      return;
    }

    alert("Aluno cadastrado com sucesso!");
    console.log("Dados tratados:", data.dados);


    if (data.sucesso) {
      location.href = "/Front-end-rede-social-etec/index.html";
    }

  } catch (erro) {
    alert("Erro de conexão com o servidor: " + erro.message);
  }
}