const {Produto} = require('../model/associacao')

const cadastrarProduto = async(req,res)=>{
    const valores = req.body

    try{
        const pesq = await Produto.create(valores,{raw:true})
        res.status(200).json({messgae:'Dados cadastrados'})
    }catch(err){
        console.error('Deu ruim',err)
        res.status(500).json({messgae:'Deu ruim'})
    }
}

    const listarProduto = async (req,res)=>{
        try{
            const pesq = await Produto.findAll()
            res.status(200).json(pesq)
        }catch(err){
            console.error('Erro a listar o Produto!',err)
            res.status(500).json({message: 'Erro a listar o Produto!'})
        }
    }
    
    const consultarProduto = async (req,res)=>{
        const valor = req.query
        console.log(valor)
        try{
            const pesq = await Produto.findOne({where: { codProduto: valor.codProduto}})
            if(pesq === null){
                console.log('Não encontrada no banco de dados!')
                res.status(404).json({message: "Não encontrada no banco de dados!"})
            }else{
                console.log(pesq)
                res.status(200).json(pesq)
            }
        }catch(err){
            console.error('Erro a consultar o Produto!',err)
            res.status(500).json({message: 'Erro a consultar o Produto!'})
        }
    }
    
    const apagarProduto = async (req,res)=>{
        const valor = req.params
        console.log(valor)
        try{
            const pesq = await Produto.findByPk(valor.id)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Produto não existe no banco de dados!"})
            }else{
                await Produto.destroy({where: { codProduto: valor.id}})
                res.status(200).json({message: "Produto Excluído do banco de dados!"})
            }
        }catch(err){
            console.error('Erro ao excluir o Produto!',err)
            res.status(500).json({message: 'Erro ao excluir o Produto!'})
        }
    }
    
    const atualizarProduto = async (req,res)=>{
        const valores = req.body
        console.log(valores)
        try{
            const pesq = await Produto.findByPk(valores.codProduto)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Produto não encontrado no banco de dados!"})
            }else{
                await Produto.update(valores, {where: { codProduto: valores.codProduto}})
                const pesq2 = await Produto.findByPk(valores.codProduto)
                res.status(200).json(pesq2)
            }
        }catch(err){
            console.error('Erro ao atualizar o Produto!',err)
            res.status(500).json({message: 'Erro ao atualizar o Produto!'})
        }
    }


    module.exports = {cadastrarProduto, listarProduto, apagarProduto,atualizarProduto,consultarProduto}