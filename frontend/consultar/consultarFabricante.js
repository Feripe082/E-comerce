let res = document.getElementById('res')
let consult = document.getElementById('consult')

consult.addEventListener('click', ()=>{
    const codFabricante = document.getElementById('codFabricante').value

    fetch(`http://localhost:3000/fabricante?codFabricante=${codFabricante}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        res.innerHTML = dados.codFabricante + '<br>' 
        res.innerHTML += dados.nomeFabricante + '<br>' 
        res.innerHTML += dados.marcaFabricante + '<br>' 
        res.innerHTML += dados.cnpjFabricante + '<br>' 
        res.innerHTML += dados.telefoneFabricante + '<br>'  
        res.innerHTML += dados.emailFabricante + '<br>'  
        res.innerHTML += dados.logradouro + '<br>'  
        res.innerHTML += dados.numero + '<br>'  
        res.innerHTML += dados.complemento + '<br>'  
        res.innerHTML += dados.bairro + '<br>'  
        res.innerHTML += dados.localidade + '<br>'  
        res.innerHTML += dados.uf + '<br>'  
        res.innerHTML += dados.cep + '<br>'  
    })
    .catch((err)=>{
        console.error('Erro ao consultar os dados!',err)
    })
})