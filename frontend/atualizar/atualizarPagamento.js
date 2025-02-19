let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codPagamento = document.getElementById('codPagamento').value
    let pedidoId = document.getElementById('pedidoId').value
    let dataVencimento = document.getElementById('dataVencimento').value
    let valorPagamento = document.getElementById('valorPagamento').value

    const valores ={
        codPagamento:codPagamento,
        pedidoId:pedidoId,
        dataVencimento:dataVencimento,
        valorPagamento:valorPagamento,


    }

    fetch('http://localhost:3000/pagamento',{
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