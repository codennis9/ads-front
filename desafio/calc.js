function calcular(operacao) {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const resultadoDiv = document.getElementById('resultado');

   
    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Por favor, insira valores válidos');
        return;
    }
    if (valor1 === 0 || valor2 === 0) {
        alert('Por favor, insira valores diferentes de zero');
        return;
    }
    if (valor1 === '' || valor2 === '') {
        alert('Por favor, insira os valores');
        return
    }
    let resultado;
    switch (operacao) {
        case 'somar':
            resultado = valor1 + valor2;
            break;
        case 'subtrair':
            resultado = valor1 - valor2;
            break;
        case 'multiplicar':
            resultado = valor1 * valor2;
            break;
        case 'dividir':
            if (valor2 === 0) {
                resultadoDiv.textContent = "Erro: Divisão por zero não é permitida.";
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            resultadoDiv.textContent = "Operação inválida.";
            return;
    }


    resultadoDiv.textContent = `Resultado: ${resultado}`;
}

function limparCampos() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').textContent = '0';
}

window.onload = function () {
    document.getElementById('somar').onclick = () => calcular('somar');
    document.getElementById('subtrair').onclick = () => calcular('subtrair');
    document.getElementById('multiplicar').onclick = () => calcular('multiplicar');
    document.getElementById('dividir').onclick = () => calcular('dividir');
    document.getElementById('ce').onclick = limparCampos;
};