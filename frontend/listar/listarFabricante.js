let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/fabricantes`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codFabricante + '<br>'
           res.innerHTML += 'Nome do fabricante: ' + dad.nomeFabricante + '<br>'
           res.innerHTML += 'Marca: ' + dad.sobremarcaFabricanteomeCliente + '<br>'
           res.innerHTML += 'CNPJ: ' + dad.cnpjFabricante + '<br>'
           res.innerHTML += 'Telefone: ' + dad.telefoneFabricante + '<br>'
           res.innerHTML += 'Email: ' + dad.emailFabricante + '<br>'
           res.innerHTML += 'Logradouro: ' + dad.logradouro + '<br>'
           res.innerHTML += 'Numero: ' + dad.numero + '<br>'
           res.innerHTML += 'Complemento: ' + dad.complemento + '<br>'
           res.innerHTML += 'Bairro: ' + dad.bairro + '<br>'
           res.innerHTML += 'Localidade: ' + dad.localidade + '<br>'
           res.innerHTML += 'Uf: ' + dad.uf + '<br>'
           res.innerHTML += 'CEP: ' + dad.cep + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})