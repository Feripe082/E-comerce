let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let fabricanteId = document.getElementById('fabricanteId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value
    let precoProduto = document.getElementById('precoProduto').value
    let descricaoProduto = document.getElementById('descricaoProduto').value

    const valores ={
        fabricanteId:fabricanteId,
        nomeProduto:nomeProduto,
        quantidadeProduto:quantidadeProduto,
        precoProduto:precoProduto,
        descricaoProduto:descricaoProduto


    }

    fetch('http://localhost:3000/produto',{
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