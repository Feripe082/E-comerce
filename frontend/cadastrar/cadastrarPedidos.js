let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let clienteId = document.getElementById('clienteId').value
    let dataPedido = document.getElementById('dataPedido').value
    let valorPedido = document.getElementById('valorPedido').value

    const valores ={
        clienteId:clienteId,
        dataPedido:dataPedido,
        valorPedido:valorPedido,


    }

    fetch('http://localhost:3000/pedido',{
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