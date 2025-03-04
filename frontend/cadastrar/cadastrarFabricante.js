let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    let nomeFabricante = document.getElementById('nomeFabricante').value
    let marcaFabricante = document.getElementById('marcaFabricante').value
    let cnpjFabricante = document.getElementById('cnpjFabricante').value
    let telefoneFabricante = document.getElementById('telefoneFabricante').value
    let emailFabricante = document.getElementById('emailFabricante').value
    let senha = document.getElementById('senha').value
    let logradouro = document.getElementById('logradouro').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let localidade = document.getElementById('localidade').value
    let uf = document.getElementById('uf').value
    let cep = document.getElementById('cep').value

    const valores ={
        nomeFabricante:nomeFabricante,
        marcaFabricante:marcaFabricante,
        cnpjFabricante:cnpjFabricante,
        telefoneFabricante:telefoneFabricante,
        emailFabricante:emailFabricante,
        senha:senha,
        logradouro:logradouro,
        numero:numero,
        complemento:complemento,
        bairro:bairro,
        localidade:localidade,
        uf:uf,
        cep:cep

    }

    fetch('http://localhost:3000/fabricante',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)

        
    })
    .then(res => res.json())
    .then(valores=>{
        console.log(valores)
        res.innerHTML = 'Cadastrado com sucesso'

    })
    .catch((err)=>{
        console.error('Deu erro',err)
    })
})