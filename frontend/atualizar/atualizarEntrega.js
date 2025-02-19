let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()
    
    let codEntrega = document.getElementById('codEntrega').value
    let pedidoId = document.getElementById('pedidoId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value
    let dataEntrega = document.getElementById('dataEntrega').value

    const valores ={
        codEntrega:codEntrega,
        pedidoId:pedidoId,
        nomeProduto:nomeProduto,
        quantidadeProduto:quantidadeProduto,
        dataEntrega:dataEntrega,


    }

    fetch('http://localhost:3000/entrega',{
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