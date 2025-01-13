function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    if(quantidade>0 && de>0 && ate>0){
        if(ate>de) {
            for(let i=0; i<quantidade; i++) {
                let numero; 
                numero = obterNumeroAleatorio(de, ate);      
        
                //garante que não vai sortear números repetidos
                while(sorteados.includes(numero)) { 
                    numero = obterNumeroAleatorio(de, ate); 
                }
                //inclui no sorteados somente números diferentes dos já sorteados
                sorteados.push(numero);

                console.log(sorteados);
                let resultado = document.getElementById('resultado');
                resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
                alterarStatusBotao();
            }    
        } else {
            alert('O primeiro número deve ser maior que o segundo.');
        }
    } else {
        alert('Informe quantidade e números de parâmetro!');
    }   
}

function obterNumeroAleatorio(min, max) {
//floor retorna numero inteiro
    return Math.floor(Math.random() * (max - min +1)) + min; 
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}