let btn_t1 = document.getElementById('btn_t1')
let btn_t2 = document.getElementById('btn_t2')
let btn_t3= document.getElementById('btn_t3')
let btn_t4 = document.getElementById('btn_t4')
let btn_t5 = document.getElementById('btn_t5')
let btn_t6 = document.getElementById('btn_t6')
let btn_t7 = document.getElementById('btn_t7')
let btn_t8 = document.getElementById('btn_t8')
let btn_t9 = document.getElementById('btn_t9')
let btn_t10 = document.getElementById('btn_t10')
let btn_t11 = document.getElementById('btn_t11')
let btn_t12 = document.getElementById('btn_t12')
let btn_t13 = document.getElementById('btn_t13')
let btn_t14 = document.getElementById('btn_t14')
let btn_t15 = document.getElementById('btn_t15')

let produtos = []

function adicionarCarrinho(e){
    let nome = e.target.getAttribute('data-nome')
    let preco = e.target.getAttribute('data-preco')
    let codProduto = e.target.getAttribute('data-codProduto')
    let quantidade = e.target.parentElement.querySelector('#qtde').value
    let produto = {
        nome: nome,
        preco: preco,
        codProduto: codProduto,
        quantidade: quantidade
    }
    produtos.push(produto)
    console.log(produtos)

    localStorage.setItem('produtos',JSON.stringify(produtos))
}


btn_t1.addEventListener('click', adicionarCarrinho)
btn_t2.addEventListener('click', adicionarCarrinho)
btn_t3.addEventListener('click', adicionarCarrinho)
btn_t4.addEventListener('click', adicionarCarrinho)
btn_t5.addEventListener('click', adicionarCarrinho)
btn_t6.addEventListener('click', adicionarCarrinho)
btn_t7.addEventListener('click', adicionarCarrinho)
btn_t8.addEventListener('click', adicionarCarrinho)
btn_t9.addEventListener('click', adicionarCarrinho)
btn_t10.addEventListener('click', adicionarCarrinho)
btn_t11.addEventListener('click', adicionarCarrinho)
btn_t12.addEventListener('click', adicionarCarrinho)
btn_t13.addEventListener('click', adicionarCarrinho)
btn_t14.addEventListener('click', adicionarCarrinho)
btn_t15.addEventListener('click', adicionarCarrinho)