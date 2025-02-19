let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codPedido = document.getElementById('codPedido').value

    fetch(`http://localhost:3000/pedido?codPedido=${codPedido}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codPedido + '<br>' 
        res.innerHTML += dados.clienteId + '<br>' 
        res.innerHTML += dados.dataPedido + '<br>' 
        res.innerHTML += dados.valorPedido + '<br>'   
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})