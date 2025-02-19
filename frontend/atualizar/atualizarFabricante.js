let atualizar = document.getElementById('atualizar')
let res = document.getElementById('res')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    let codFabricante = document.getElementById('codFabricante').value
    let nomeFabricante = document.getElementById('nomeFabricante').value
    let marcaFabricante = document.getElementById('marcaFabricante').value
    let cnpjFabricante = document.getElementById('cnpjFabricante').value
    let telefoneFabricante = document.getElementById('telefoneFabricante').value
    let emailFabricante = document.getElementById('emailFabricante').value
    let logradouro = document.getElementById('logradouro').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let localidade = document.getElementById('localidade').value
    let uf = document.getElementById('uf').value
    let cep = document.getElementById('cep').value

    const valores ={
        codFabricante:codFabricante,
        nomeFabricante:nomeFabricante,
        marcaFabricante:marcaFabricante,
        cnpjFabricante:cnpjFabricante,
        telefoneFabricante:telefoneFabricante,
        emailFabricante:emailFabricante,
        logradouro:logradouro,
        numero:numero,
        complemento:complemento,
        bairro:bairro,
        localidade:localidade,
        uf:uf,
        cep:cep

    }

    fetch('http://localhost:3000/fabricante',{
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