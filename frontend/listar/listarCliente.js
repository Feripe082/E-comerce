let res = document.getElementById('res')
let list = document.getElementById('list')

list.addEventListener('click', ()=>{

    fetch(`http://localhost:3000/clientes`)
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML = '<hr>'
        dados.forEach(dad => {
           res.innerHTML += 'Código: ' + dad.codCliente + '<br>'
           res.innerHTML += 'Nome: ' + dad.nomeCliente + '<br>'
           res.innerHTML += 'Sobrenome: ' + dad.sobrenomeCliente + '<br>'
           res.innerHTML += 'CPF: ' + dad.cpfCliente + '<br>'
           res.innerHTML += 'Telefone: ' + dad.telefoneCliente + '<br>'
           res.innerHTML += 'Email: ' + dad.emailCliente + '<br>'
           res.innerHTML += 'Logradouro: ' + dad.logradouro + '<br>'
           res.innerHTML += 'Numero: ' + dad.numero + '<br>'
           res.innerHTML += 'Complemento: ' + dad.complemento + '<br>'
           res.innerHTML += 'Bairro: ' + dad.bairro + '<br>'
           res.innerHTML += 'Localidade: ' + dad.localidade + '<br>'
           res.innerHTML += 'Uf: ' + dad.uf + '<br>'
           res.innerHTML += 'CEP: ' + dad.cep + '<br>'
           res.innerHTML += 'Status do cliente: ' + dad.statusCliente + '<br>'
           res.innerHTML += '<hr>'
           res.style.textAlign = 'center'
        })
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })
})