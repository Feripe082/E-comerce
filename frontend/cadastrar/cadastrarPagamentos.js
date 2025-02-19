let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let pedidoId = document.getElementById('pedidoId').value
    let dataVencimento = document.getElementById('dataVencimento').value
    let valorPagamento = document.getElementById('valorPagamento').value

    const valores ={
        pedidoId:pedidoId,
        dataVencimento:dataVencimento,
        valorPagamento:valorPagamento,


    }

    fetch('http://localhost:3000/pagamento',{
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