let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()
    
    let codReabastecimento = document.getElementById('codReabastecimento').value
    let estoqueId = document.getElementById('estoqueId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeEstoque = document.getElementById('quantidadeEstoque').value
    let dataReabastecimento = document.getElementById('dataReabastecimento').value

    const valores ={
        codReabastecimento:codReabastecimento,
        estoqueId:estoqueId,
        nomeProduto:nomeProduto,
        quantidadeEstoque:quantidadeEstoque,
        dataReabastecimento:dataReabastecimento,


    }

    fetch('http://localhost:3000/reabastecimento',{
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