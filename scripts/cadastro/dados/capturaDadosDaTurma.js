
export let dadosTurma = {};

export function capturarDadosDaTurma() {
    const selects = document.querySelectorAll("#parte2 select");
    selects.forEach((select) => {
        dadosTurma[select.id] = select.value;
    });
    console.log("Informações da turma coletadas");
}