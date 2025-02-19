let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/estoques`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codEstoque + '<br>'
           res.innerHTML += 'Id do produto: ' + dad.produtoId + '<br>'
           res.innerHTML += 'Nome do produto: ' + dad.nomeProduto + '<br>'
           res.innerHTML += 'Quantidade no estoque: ' + dad.quantidadeEstoque + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})