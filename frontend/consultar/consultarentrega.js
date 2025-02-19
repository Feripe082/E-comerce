let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codCliente = document.getElementById('codEntrega').value

    fetch(`http://localhost:3000/entrega?codEntrega=${codEntrega}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codEntrega + '<br>' 
        res.innerHTML += dados.pedidoId + '<br>' 
        res.innerHTML += dados.nomeProduto + '<br>' 
        res.innerHTML += dados.quantidadeProduto + '<br>' 
        res.innerHTML += dados.dataEntrega + '<br>'  
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})