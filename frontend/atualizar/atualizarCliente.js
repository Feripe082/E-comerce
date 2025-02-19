let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codCliente = document.getElementById('codCliente').value
    let nomeCliente = document.getElementById('nomeCliente').value
    let sobrenomeCliente = document.getElementById('sobrenomeCliente').value
    let cpfCliente = document.getElementById('cpfCliente').value
    let telefoneCliente = document.getElementById('telefoneCliente').value
    let emailCliente = document.getElementById('emailCliente').value
    let logradouro = document.getElementById('logradouro').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let localidade = document.getElementById('localidade').value
    let uf = document.getElementById('uf').value
    let cep = document.getElementById('cep').value
    let statusCliente = document.getElementById('statusCliente').value

    const valores ={
        codCliente:codCliente,
        nomeCliente:nomeCliente,
        sobrenomeCliente:sobrenomeCliente,
        cpfCliente:cpfCliente,
        telefoneCliente:telefoneCliente,
        emailCliente:emailCliente,
        logradouro:logradouro,
        numero:numero,
        complemento:complemento,
        bairro:bairro,
        localidade:localidade,
        uf:uf,
        cep:cep,
        statusCliente:statusCliente

    }

    fetch('http://localhost:3000/cliente',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)

        
    })
    .then(res => res.json())
    .then(valores=>{
        console.log(valores)
        res.innerHTML = 'Atualizado com sucesso'

    })
    .catch((err)=>{
        console.error('Deu erro',err)
    })
})