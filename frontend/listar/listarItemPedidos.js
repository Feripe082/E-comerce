let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/itemPedidos`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codItemPedido + '<br>'
           res.innerHTML += 'Id do pedido: ' + dad.pedidoId + '<br>'
           res.innerHTML += 'Id do produto: ' + dad.produtoId + '<br>'
           res.innerHTML += 'Quantidade do produto: ' + dad.quantidadeProduto + '<br>'
           res.innerHTML += 'Preço do produto: ' + dad.precoProduto + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})