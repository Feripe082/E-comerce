let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let produtoId = document.getElementById('produtoId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeEstoque = document.getElementById('quantidadeEstoque').value

    const valores ={
        produtoId:produtoId,
        nomeProduto:nomeProduto,
        quantidadeEstoque:quantidadeEstoque,


    }

    fetch('http://localhost:3000/estoque',{
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