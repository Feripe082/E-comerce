let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let pedidoId = document.getElementById('pedidoId').value
    let produtoId = document.getElementById('produtoId').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value
    let precoProduto = document.getElementById('precoProduto').value

    const valores ={
        pedidoId:pedidoId,
        produtoId:produtoId,
        quantidadeProduto:quantidadeProduto,
        precoProduto:precoProduto


    }

    fetch('http://localhost:3000/itemPedido',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)

        
    })
    .then(res => res.json())
    .then(valores=>{
        console.log(valores)
        res.innerHTML = 'Cadastrado com sucesso'

    })
    .catch((err)=>{
        console.error('Deu erro',err)
    })
})