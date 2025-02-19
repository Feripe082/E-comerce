let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codPedido = document.getElementById('codPedido').value
    let clienteId = document.getElementById('clienteId').value
    let dataPedido = document.getElementById('dataPedido').value
    let valorPedido = document.getElementById('valorPedido').value

    const valores ={
        codPedido:codPedido,
        clienteId:clienteId,
        dataPedido:dataPedido,
        valorPedido:valorPedido,


    }

    fetch('http://localhost:3000/pedido',{
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