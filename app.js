let listaNumeros = [];

function sortear(){
    let numeroSorteado;

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
   
    for(var i=0; i<quantidadeDeNumeros; i++){
        numeroSorteado = obterNumeroAleatorio(numeroMinimo, numeroMaximo);

        while(listaNumeros.includes(numeroSorteado)){
            numeroSorteado = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        }

        listaNumeros.push(numeroSorteado);
    }

    exibirResultado(quantidadeDeNumeros, listaNumeros);
    statusDoBotao('pointer', '#1875E8');

    listaNumeros = [];
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function exibirResultado(quantidadeDeNumeros, listaNumeros){
    let textoDoResultado = document.getElementById('resultado');
    let palavrasNumerosESorteados = quantidadeDeNumeros > 1 ? 'Números Sorteados' : 'Número Sorteado';

    if(listaNumeros.length == 0){
        textoDoResultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    } else{
        textoDoResultado.innerHTML = `<label class="texto__paragrafo">${palavrasNumerosESorteados}:  ${listaNumeros}</label>`;
    }
}

function limparCampos(){
    inputs = document.querySelectorAll('.container__input');
    inputs.forEach(input => {
        input.value = '';
    });
}

function statusDoBotao(valorCursor, valorBackground){
    let botaoReiniciar = document.querySelector('.container__botao-desabilitado');
    botaoReiniciar.style.cursor = valorCursor;
    botaoReiniciar.style.background = valorBackground;
}

function reiniciar(){
    listaNumeros.length = 0;
    exibirResultado(0, []);
    limparCampos();
    statusDoBotao('not-allowed', '#6f6f70');
}