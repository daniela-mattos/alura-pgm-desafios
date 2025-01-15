let total = 0;

function adicionar() {
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;
let listaProdutos = document.getElementById('lista-produtos');
let carrinho = listaProdutos.querySelector('.carrinho__produtos__produto');
let showTotal = document.getElementById('valor-total');

//Solução Alura tratando as strings
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];

if(quantidade>0) {
    let preco = valorUnitario*quantidade;
    let itemSpan = document.createElement('span'); 
    itemSpan.innerHTML = `<br>
                        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
                        <span class="texto-azul">R$${preco}</span>`;
    carrinho.appendChild(itemSpan);
    total += preco;
    showTotal.innerHTML = total;
    document.getElementById('quantidade').value = 0;
} else {
    alert('Informe uma quantidade válida!')
}

}

function limpar() {
    let listaProdutos = document.getElementById('lista-produtos');
    let carrinho = listaProdutos.querySelector('.carrinho__produtos__produto');
    const spans = carrinho.querySelectorAll('span'); 
    spans.forEach(span => span.remove()); 
    const brs = carrinho.querySelectorAll('br'); 
    brs.forEach(br => br.remove());
    let showTotal = document.getElementById('valor-total');
    showTotal.innerHTML = 0;

}

//pra usar com o switch que não foi preciso
function criaSpan(quantidade, produto, preco) {
    let itemSpan = document.createElement('span'); 
    itemSpan.innerHTML = `<br>
                          <span class="texto-azul">${quantidade}x</span> ${produto} 
                          <span class="texto-azul">R$${preco}</span>`;
    return itemSpan

}


//primeira solução sem separar as strings
// switch (produto) {
//     case 'Fone de ouvido - R$100':
//         carrinho.appendChild(criaSpan(quantidade, nomeProduto, preco));
//         total += preco;
//         break;
//     case 'Celular - R$1400':
//         carrinho.appendChild(criaSpan(quantidade, nomeProduto, preco));
//         total += preco;
//         break;
//     case 'Oculus VR - R$5000':
//         carrinho.appendChild(criaSpan(quantidade, nomeProduto, preco));
//         total += preco;
//         break;
// }