const dados = require("./dados.json");

console.log(dados);

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

dados.produtos.push(produto);

console.log(dados);

const produtoStr = JSON.stringify(produto);

console.log(produtoStr);