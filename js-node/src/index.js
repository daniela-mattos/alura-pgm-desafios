export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
    if(!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) +1; 
        }    
    });
    return resultado;
}

// function quebraEmParagrafos(texto) {
//     const contagem = paragrafos.flatMap((paragrafo) => {
//         if(!paragrafo) return [];
//         return verificaPalavrasDuplicadas(paragrafo);
//         }
// // flatMap substitui filter e map
// //  .filter((paragrafo) => paragrafo)    
// //  .map((paragrafo) => {    
//     )
//     console.log(contagem);
// }


// Forma de resolver os parágrafos vazios usando "reduce"
// const paragrafos = ["código", "js", "", "web", "", "array"];

// const result = paragrafos.reduce((acum, paragrafo) => {
//  if (paragrafo) {
//    return [...acum, paragrafo];
//  }
//  return acum;
// }, []);

// console.log(result);