const {Estoque} = require('../model/associacao')

const cadastrarEstoque = async(req,res)=>{
    const valores = req.body

    try{
        const pesq = await Estoque.create(valores,{raw:true})
        res.status(200).json({messgae:'Dados cadastrados'})
    }catch(err){
        console.error('Deu ruim',err)
        res.status(500).json({messgae:'Deu ruim'})
    }
}

    const listarEstoque = async (req,res)=>{
        try{
            const pesq = await Estoque.findAll()
            res.status(200).json(pesq)
        }catch(err){
            console.error('Erro a listar o Estoque!',err)
            res.status(500).json({message: 'Erro a listar o Estoque!'})
        }
    }
    
    const consultarEstoque = async (req,res)=>{
        const valor = req.query
        console.log(valor)
        try{
            const pesq = await Estoque.findOne({where: { codEstoque: valor.codEstoque}})
            if(pesq === null){
                console.log('Não encontrada no banco de dados!')
                res.status(404).json({message: "Não encontrada no banco de dados!"})
            }else{
                console.log(pesq)
                res.status(200).json(pesq)
            }
        }catch(err){
            console.error('Erro a consultar o Estoque!',err)
            res.status(500).json({message: 'Erro a consultar o Estoque!'})
        }
    }
    
    const apagarEstoque = async (req,res)=>{
        const valor = req.params
        console.log(valor)
        try{
            const pesq = await Estoque.findByPk(valor.id)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Estoque não existe no banco de dados!"})
            }else{
                await Estoque.destroy({where: { codEstoque: valor.id}})
                res.status(200).json({message: "Estoque Excluído do banco de dados!"})
            }
        }catch(err){
            console.error('Erro ao excluir o Estoque!',err)
            res.status(500).json({message: 'Erro ao excluir o Estoque!'})
        }
    }
    
    const atualizarEstoque = async (req,res)=>{
        const valores = req.body
        console.log(valores)
        try{
            const pesq = await Estoque.findByPk(valores.codEstoque)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Estoque não encontrado no banco de dados!"})
            }else{
                await Estoque.update(valores, {where: { codEstoque: valores.codEstoque}})
                const pesq2 = await Estoque.findByPk(valores.codEstoque)
                res.status(200).json(pesq2)
            }
        }catch(err){
            console.error('Erro ao atualizar o Estoque!',err)
            res.status(500).json({message: 'Erro ao atualizar o Estoque!'})
        }
    }


module.exports = {cadastrarEstoque, listarEstoque, apagarEstoque,atualizarEstoque,consultarEstoque}