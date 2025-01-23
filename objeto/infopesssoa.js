const pessoa = {
    nome: 'Aloin Certz',
    idade: 23,
    solteiro: true,
    hobbies: ['nadar', 'comer', 'andar'],
    endereco: {
        rua: 'Alreu',
        cidade: 'Sertodo',
        estado: 'UO'
    },
}

function mostrarInfoPessoa(pessoa) {
    console.log(`Informações pessoais:
        Nome: ${pessoa.nome}
        Idade: ${pessoa.idade}
        Solteiro? ${pessoa.solteiro=true ? 'Sim' : 'não'}
        Hobies: ${pessoa.hobbies}
        Endereço: Rua ${pessoa.endereco.rua}, ${pessoa.endereco.cidade}/${pessoa.endereco.cidade}
        `)
}
mostrarInfoPessoa(pessoa);

const pessoas = [
    {
        nome: 'Mitsy',
        idade: 15,
        cidade: 'Gatolândia'
    },
    {
        nome: 'Gerta',
        idade: 25,
        cidade: 'eilândia'
    },
    {
        nome: 'Opres',
        idade: 41,
        cidade: 'Gatolândia'
    },
];

pessoas.push({nome: 'Wertui', idade: 52, cidade: 'Ertsa'});

function mostrarPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        console.log(pessoa);
    });
}

mostrarPessoas(pessoas);

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(function(pessoa) {
        return pessoa.cidade === cidade;
    });
}

let pessoasCidade = filtrarPorCidade(pessoas, 'Gatolândia');
console.log(pessoasCidade);


const calculadora = {
    soma: function(a,b) { return a+b },
    subtracao: function(a,b) { return a-b },
    multiplicacao: function(a,b) { return a*b},
    divisao: function(a,b) { return a/b},
    calcularMedia: function(vet) { 
        let somaVet = 0;
        vet.forEach(numero => {
            somaVet += numero;
        })
        return somaVet/vet.length; 
    }
}

console.log(`6+3 = ${calculadora.soma(6, 3)}`);
console.log(`6-3 = ${calculadora.subtracao(6, 3)}`);
console.log(`6*3 = ${calculadora.multiplicacao(6, 3)}`);
console.log(`6/3 = ${calculadora.divisao(6, 3)}`); 

console.log(`A média do vetor 1,2,3,4 é = ${calculadora.calcularMedia([1,2,3,4])}`)


const contaBancaria = {
    titular: 'Mitsy',
    saldo: 50,
    depositar: function(valor) { this.saldo += valor },
    sacar: function(valor) {
        if(valor>this.saldo) {
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log('Saque realizado');
        }
    }
}

const cliente = {
    nome: 'fulano dental',
    conta: contaBancaria
}

console.log(`Saldo acessado pelo Cliente: ${cliente.conta.saldo}`);
//conta é o atalho para conta bancária, ela é uma referência (ponteiro?) de contaBancaria.

contaBancaria.depositar(10);
console.log(`Saldo atual, com o depósito: ${contaBancaria.saldo}`);

contaBancaria.sacar(10);
console.log(`Saldo atual, com o saque: ${contaBancaria.saldo}`);