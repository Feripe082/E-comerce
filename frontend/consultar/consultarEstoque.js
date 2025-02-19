let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codEstoque = document.getElementById('codEstoque').value

    fetch(`http://localhost:3000/estoque?codEstoque=${codEstoque}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codEstoque + '<br>' 
        res.innerHTML += dados.produtoId + '<br>' 
        res.innerHTML += dados.nomeProduto + '<br>' 
        res.innerHTML += dados.quantidadeEstoque + '<br>'   
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})