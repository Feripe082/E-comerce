let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codPagamento = document.getElementById('codPagamento').value

    fetch(`http://localhost:3000/pagamento?codPagamento=${codPagamento}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codPagamento + '<br>' 
        res.innerHTML += dados.pedidoId + '<br>' 
        res.innerHTML += dados.dataVencimento + '<br>' 
        res.innerHTML += dados.valorPagamento + '<br>'   
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})