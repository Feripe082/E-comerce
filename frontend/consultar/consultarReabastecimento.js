let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codReabastecimento = document.getElementById('codReabastecimento').value

    fetch(`http://localhost:3000/reabastecimento?codReabastecimento=${codReabastecimento}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codReabastecimento + '<br>' 
        res.innerHTML += dados.estoqueId + '<br>' 
        res.innerHTML += dados.nomeProduto + '<br>' 
        res.innerHTML += dados.quantidadeEstoque + '<br>'   
        res.innerHTML += dados.dataReabastecimento + '<br>'    
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})