//exercicio 1

const livro = {
    titulo: 'O grande Gatsby',
    autor: 'F Scott',
    anoPublicacao: 1900,
    genero: 'Ficção'
}

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    
    `);


//exercicio 2
const anoAtual = new Date().getFullYear();
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade da Publicação: ${livro.idadePublicacao}

    `
console.log(mostrarDetalhes);

//Exercício 3

console.log(`Detalhes do Livro:
    Título: ${livro['titulo']}
    Autor: ${livro['autor']}
    Ano de Publicação: ${livro['anoPublicacao']}
    Gênero: ${livro['genero']}
    Idade da Publicação: ${livro['idadePublicacao']}
`);

//Exercício 4

livro.avaliacao = null;
if(livro.avaliacao == null) {
    livro.avaliacao = 'Ainda não li';
} else {
    console.log('O livro já tem avaliação');
}

console.log(`Avaliação do livro: ${livro.avaliacao}`);

// Exercício 5

livro.genero = 'Aventura';
console.log(livro.genero);

// Exercício 6

delete livro.avaliacao;

console.log(`Detalhes do Livro:
    Título: ${livro['titulo']}
    Autor: ${livro['autor']}
    Ano de Publicação: ${livro['anoPublicacao']}
    Gênero: ${livro['genero']}
    Idade da Publicação: ${livro['idadePublicacao']}
    Avaliação: ${livro.avaliacao} 
`);
//livro.avaliacao retorna undefine porque foi excluido

