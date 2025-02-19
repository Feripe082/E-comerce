let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codItemPedido = document.getElementById('codItemPedido').value

    fetch(`http://localhost:3000/itemPedido?codItemPedido=${codItemPedido}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codItemPedido + '<br>' 
        res.innerHTML += dados.pedidoId + '<br>' 
        res.innerHTML += dados.produtoId + '<br>' 
        res.innerHTML += dados.quantidadeProduto + '<br>'   
        res.innerHTML += dados.precoProduto + '<br>'      
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})