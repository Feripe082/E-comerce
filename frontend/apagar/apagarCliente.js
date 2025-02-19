let res = document.getElementById('res')
let apag = document.getElementById('apag')

apag.addEventListener('click', ()=>{
    const codCliente = document.getElementById('codCliente').value

    fetch(`http://localhost:3000/cliente/${codCliente}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
    })
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
        res.innerHTML ='Deletado com sucesso'
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados!',err)
    })

})