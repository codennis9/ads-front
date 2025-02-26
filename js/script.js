
function enviarDados() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');

    if (nome.value === '' || email.value === '') {
        alert('Preencha todos os campos');
    } else {
       console.log('Dados enviados com sucesso');
    }
}

const limparDados = () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    nome.value = '';    
    email.value = '';
}
    