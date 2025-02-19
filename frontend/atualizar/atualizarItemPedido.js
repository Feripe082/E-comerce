let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codItemPedido = document.getElementById('codItemPedido').value
    let pedidoId = document.getElementById('pedidoId').value
    let produtoId = document.getElementById('produtoId').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value
    let precoProduto = document.getElementById('precoProduto').value

    const valores ={
        codItemPedido:codItemPedido,
        pedidoId:pedidoId,
        produtoId:produtoId,
        quantidadeProduto:quantidadeProduto,
        precoProduto:precoProduto


    }

    fetch('http://localhost:3000/itemPedido',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)

        
    })
    .then(res => res.json())
    .then(valores=>{
        console.log(valores)
        res.innerHTML = 'Atualizado com sucesso'

    })
    .catch((err)=>{
        console.error('Deu erro',err)
    })
})