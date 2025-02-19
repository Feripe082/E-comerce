let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/pagamentos`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codPagamento + '<br>'
           res.innerHTML += 'Id do pedido: ' + dad.pedidoId + '<br>'
           res.innerHTML += 'Data do vencimento: ' + dad.dataVencimento + '<br>'
           res.innerHTML += 'Valor do pagamento: ' + dad.valorPagamento + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})