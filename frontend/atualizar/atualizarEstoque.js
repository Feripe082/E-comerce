let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codEstoque = document.getElementById('codEstoque').value
    let produtoId = document.getElementById('produtoId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeEstoque = document.getElementById('quantidadeEstoque').value

    const valores ={
        codEstoque:codEstoque,
        produtoId:produtoId,
        nomeProduto:nomeProduto,
        quantidadeEstoque:quantidadeEstoque,


    }

    fetch('http://localhost:3000/estoque',{
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