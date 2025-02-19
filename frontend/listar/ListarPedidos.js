let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/pedidos`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codPedido + '<br>'
           res.innerHTML += 'Id do cliente: ' + dad.clienteId + '<br>'
           res.innerHTML += 'Data do pedido: ' + dad.dataPedido + '<br>'
           res.innerHTML += 'Valor do pedido: ' + dad.valorPedido + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})