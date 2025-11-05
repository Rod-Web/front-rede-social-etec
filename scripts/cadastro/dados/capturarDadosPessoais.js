
// pega os dados pessoais do aluno nos inputs do formulário de cadastro
export let dadosAluno = {};

export function capturarDadosAluno() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
    dadosAluno[input.id] = input.value;
    if(input.id == "valorContato") dadosAluno["tipoContato"] = input.type;
    });

    console.log("Informações dos alunos coletadas");
}