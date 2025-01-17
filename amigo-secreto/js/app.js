let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    if(amigo.value == '' || amigo.value.length<3) {
        alert('Informe um nome válido.');
    } else {
        amigos.push(amigo.value);
        if(lista.textContent == '') {
            lista.textContent = amigo.value;
        } else {
            if(lista.textContent.includes(amigo.value)) {
                alert('Nome já inserido.');
            } else {
                lista.textContent = lista.textContent + ', ' + amigo.value;
            }
        }
    }
    amigo.value = '';
}

function sortear() {
    if(amigos.length>3) {
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for(let i=0; i<amigos.length; i++) {
            if(i == (amigos.length-1)) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';            
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
            }
        }
    } else {
        alert('Adicione mais amigos antes de sortear.')
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}