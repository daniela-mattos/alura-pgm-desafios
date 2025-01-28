const fs = require('fs');

// Ler o conteúdo do arquivo animais.json como uma string
const data = fs.readFileSync('animais.json', 'utf-8');
console.log(data);

const animais = JSON.parse(data);

const animal = {
    id: 4,
    nome: 'Mico Leão',
    tipo: 'Peixe',
    habitat: 'Mata atlântica'
}
animais.push(animal);

console.log(animais);

animais.splice(1, 1);

console.log(animais);

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(animais, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("Objeto JavaScript Resultante das Operações:");
console.log(animais);