let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codProduto = document.getElementById('codProduto').value

    fetch(`http://localhost:3000/produto?codProduto=${codProduto}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codProduto + '<br>' 
        res.innerHTML += dados.fabricanteId + '<br>' 
        res.innerHTML += dados.nomeProduto + '<br>' 
        res.innerHTML += dados.quantidadeProduto + '<br>'   
        res.innerHTML += dados.precoProduto + '<br>'   
        res.innerHTML += dados.descricaoProduto + '<br>'   
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})