import { capturarDadosDaTurma } from "../dados/capturaDadosDaTurma.js";
import { juntarDadosEEnviar } from "../dados/juntarDadosEEnviar.js";
export function ultimaEtapaFormulario() {

    const form = document.querySelector("#parte2 form");
    form.addEventListener('submit', async (e)=> {
        e.preventDefault();
        if (form.checkValidity()) {
            // Tudo preenchido corretamente
            capturarDadosDaTurma()
            try {
                await juntarDadosEEnviar();
            } catch (error) {
                console.error("Erro ao enviar os dados:", error);
            }
        }
        else {
            // Mostra os erros de validação
            form.reportValidity();
      }
    })

}