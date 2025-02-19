let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/produtos`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codProduto + '<br>'
           res.innerHTML += 'Id do fabricante: ' + dad.fabricanteId + '<br>'
           res.innerHTML += 'Nome do produto: ' + dad.nomeProduto + '<br>'
           res.innerHTML += 'Quantidade do produto: ' + dad.quantidadeProduto + '<br>'
           res.innerHTML += 'Preço do produto: ' + dad.precoProduto + '<br>'
           res.innerHTML += 'Descrição do produto: ' + dad.descricaoProduto + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})