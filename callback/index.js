const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acumulador, atual) => atual + acumulador, 0)
//atual é o elemento sendo iterado(do array), 0, último parâmetro, indica o valor inicial do acumulador 
console.log(soma) //170


// código da aula

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Forma completa da função
// function calculaMedia(listaDeNotas) {
//     const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
//       return acumulador + nota;
//     }, 0);
//   }

//forma reduzida do reduce() usando uma linha
function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);    
    const media = somaDasNotas / listaDeNotas.length;
    return media;
  }

  console.log(calculaMedia(salaJS));
  console.log(calculaMedia(salaJava));
  console.log(calculaMedia(salaPython));


 //Exercícios

 function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);
console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]

const valores = [10, 20, 30, 40, 50];
const soma2 = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Soma dos valores:", soma2);


// Considere duas listas de cores: 
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'] 
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'] 
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Cores sem repetir: ', coresUnicas);

function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}

const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log(listaNumerosPares); // Saída: [2, 4, 6]

const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}

const numerosFiltrados = filtraNumeros(listaNumeros);
console.log(numerosFiltrados); // Saída: [6, 9, 12]