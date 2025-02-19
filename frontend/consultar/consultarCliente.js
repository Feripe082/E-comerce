let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codCliente = document.getElementById('codCliente').value

    fetch(`http://localhost:3000/cliente?codCliente=${codCliente}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codCliente + '<br>' 
        res.innerHTML += dados.nomeCliente + '<br>' 
        res.innerHTML += dados.sobrenomeCliente + '<br>' 
        res.innerHTML += dados.cpfCliente + '<br>' 
        res.innerHTML += dados.telefoneCliente + '<br>' 
        res.innerHTML += dados.emailCliente + '<br>' 
        res.innerHTML += dados.logradouro + '<br>' 
        res.innerHTML += dados.numero + '<br>' 
        res.innerHTML += dados.complemento + '<br>' 
        res.innerHTML += dados.bairro + '<br>' 
        res.innerHTML += dados.localidade + '<br>' 
        res.innerHTML += dados.uf + '<br>' 
        res.innerHTML += dados.cep + '<br>' 
        res.innerHTML += dados.statusCliente + '<br>'   
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})