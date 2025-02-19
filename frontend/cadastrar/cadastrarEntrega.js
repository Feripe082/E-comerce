let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let pedidoId = document.getElementById('pedidoId').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let quantidadeProduto = document.getElementById('quantidadeProduto').value
    let dataEntrega = document.getElementById('dataEntrega').value

    const valores ={
        pedidoId:pedidoId,
        nomeProduto:nomeProduto,
        quantidadeProduto:quantidadeProduto,
        dataEntrega:dataEntrega,


    }

    fetch('http://localhost:3000/entrega',{
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