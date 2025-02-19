let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let estoqueId = document.getElementById('estoqueId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeEstoque = document.getElementById('quantidadeEstoque').value
    let dataReabastecimento = document.getElementById('dataReabastecimento').value

    const valores ={
        estoqueId:estoqueId,
        nomeProduto:nomeProduto,
        quantidadeEstoque:quantidadeEstoque,
        dataReabastecimento:dataReabastecimento,


    }

    fetch('http://localhost:3000/reabastecimento',{
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