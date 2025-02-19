let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/reabastecimentos`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codReabastecimento + '<br>'
           res.innerHTML += 'Id do esstoque: ' + dad.estoqueId + '<br>'
           res.innerHTML += 'Nome do produto: ' + dad.nomeProduto + '<br>'
           res.innerHTML += 'Quantidade no estoque: ' + dad.quantidadeEstoque + '<br>'
           res.innerHTML += 'Data de reabastecimento ' + dad.dataReabastecimento + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})