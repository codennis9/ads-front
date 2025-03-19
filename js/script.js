var cont = 1;


const enviarDados = () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');

    if (nome.value === '' && email.value === '' || nome.value === '' || email.value === '') {
        alert('Preencha todos os campos');
        nome.style.border = '1px solid red';
        email.style.border = '1px solid red';

    } else {
       nome.style.border = '1px solid green';
       email.style.border = '1px solid green';
       
       printDados(nome.value,email.value)

       limparFormulario()
    }
}

const limparDados = () => {
    const limpaFormulario = confirm("Deseja limpar formulario?")
    
    if(limpaFormulario)
        limparFormulario()

    const limpaTabela = confirm("Deseja limpar sua tabela?");

    if(limpaTabela) 
        limparTabela()
    
}

const setBlockNumber = (tecla) => {
    if (tecla.charCode >= 48 && tecla.keyCode <= 57) {
        tecla.preventDefault();
    }
}  

const printDados = (nome, email) => {
    try {
        let colunaNome = document.getElementById("nome"+cont);
        let colunaEmail = document.getElementById("email"+cont);

        colunaNome.innerHTML = nome;
        colunaEmail.innerHTML = email;
        cont++;
    } catch (error) {
        alert("Não é possivel adicionar mais coisas na agenda")
    }
    

}

const limparFormulario = () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    nome.value = '';    
    email.value = '';
    nome.focus();
}

const limparTabela = () => {

    for (let index = 0; index < 4; index++) {
        document.getElementById("nome"+cont).innerHTML = '';
        document.getElementById("email"+cont).innerHTML = '';
        cont--;
    }
  
}