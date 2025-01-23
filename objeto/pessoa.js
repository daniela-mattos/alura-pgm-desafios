const pessoa = {
    nome: 'Qualqyer',
    notas: [9,8,10,10],
    calcularMediaNotas: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2); // Arredondando para duas casas decimais
    },
    classificarDesempenho: function() {
        const mediaCalc = this.calcularMediaNotas();
        if(media < 6) {
            return 'Desempenho insuficiente';
        } else if(media < 7.5) {
            return 'Desempenho regular';
        } else if(media < 8.9) {
            return 'Bom Desempenho';
        } else {
            return 'Desempenho Excelente';
        }
    }
}
const media = pessoa.calcularMediaNotas();
console.log(media);
const desempenho = pessoa.classificarDesempenho();
console.log(desempenho);

const carro = {
    marca: 'qualquer',
    modelo: 'bonito',
    ano: 2009,
    cor: 'azul',
    portas: 2,
    motor: true,
    placa: "ABC1234"
}

Object.defineProperty(carro, "placa", { enumerable: false });

console.log(`
    Propriedades Enumeráveis do Carro: 
    `);

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa);
