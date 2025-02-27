document.getElementById('salvar').addEventListener('click', enviarDados);
document.getElementById('limpar').addEventListener('click', limparDados);

function enviarDados() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '' || email === '') {
        alert('Preencha todos os campos');
        if (nome === '') {
            document.getElementById('nome').style.backgroundColor = 'red';
        }
        if (email === '') {
            document.getElementById('email').style.backgroundColor = 'red';
        }
    } else {
        console.log('Dados enviados com sucesso');
        adicionarNaTabela(nome, email);
        limparDados();
    }
}

function limparDados() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    nome.value = '';    
    email.value = '';
    nome.style.backgroundColor = '';
    email.style.backgroundColor = '';
}

function adicionarNaTabela(nome, email) {
    const tabela = document.getElementById('resultado');
    const novaLinha = tabela.insertRow(-1);

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
}
