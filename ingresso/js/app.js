
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let subtraiIngresso = parseInt(document.getElementById(`qtd-${tipoIngresso}`).innerText); 

    if(quantidade>0) {
        if((subtraiIngresso-quantidade)>=0) {
            subtraiIngresso -= quantidade;
            document.getElementById(`qtd-${tipoIngresso}`).innerText = subtraiIngresso;    
            alert('Compra realizada com sucesso!')
        } else {
            alert(`Quantidade indisponíel. Restam ${subtraiIngresso} ingressos para ${tipoIngresso}.`);
        }    
    } else {
        alert('Informe uma quantidade de ingressos válida.')
    }
    
}