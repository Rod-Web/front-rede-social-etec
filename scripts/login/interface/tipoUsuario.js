
export function tipoUsuario() {
    const selectElement = document.getElementById('tipo-usuario');
    selectElement.addEventListener('change', (event) => {
        console.log('Tipo de usuário alterado para:', event.target.value);
        InfoUsuario(event.target.value);
    });
}



function InfoUsuario(tipo) {
    const identificadorLabel = document.getElementById('text-identificador');
    if (tipo === 'aluno') {
        identificadorLabel.textContent = 'RM:';
    } else if (tipo === 'professor') {
        identificadorLabel.textContent = 'RF:';
    }
}