let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codProduto = document.getElementById('codProduto').value
    let fabricanteId = document.getElementById('fabricanteId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value
    let precoProduto = document.getElementById('precoProduto').value
    let descricaoProduto = document.getElementById('descricaoProduto').value

    const valores ={
        codProduto:codProduto,
        fabricanteId:fabricanteId,
        nomeProduto:nomeProduto,
        quantidadeProduto:quantidadeProduto,
        precoProduto:precoProduto,
        descricaoProduto:descricaoProduto


    }

    fetch('http://localhost:3000/produto',{
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