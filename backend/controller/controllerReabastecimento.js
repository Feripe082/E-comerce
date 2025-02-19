const {Reabastecimento} = require('../model/associacao')

const cadastrarReabastecimento = async(req,res)=>{
    const valores = req.body

    try{
        const pesq = await Reabastecimento.create(valores,{raw:true})
        res.status(200).json({messgae:'Dados cadastrados'})
    }catch(err){
        console.error('Deu ruim',err)
        res.status(500).json({messgae:'Deu ruim'})
    }
}

    const listarReabastecimento = async (req,res)=>{
        try{
            const pesq = await Reabastecimento.findAll()
            res.status(200).json(pesq)
        }catch(err){
            console.error('Erro a listar o Reabastecimento!',err)
            res.status(500).json({message: 'Erro a listar o Reabastecimento!'})
        }
    }
    
    const consultarReabastecimento = async (req,res)=>{
        const valor = req.query
        console.log(valor)
        try{
            const pesq = await Reabastecimento.findOne({where: { codReabastecimento: valor.codReabastecimento}})
            if(pesq === null){
                console.log('Não encontrada no banco de dados!')
                res.status(404).json({message: "Não encontrada no banco de dados!"})
            }else{
                console.log(pesq)
                res.status(200).json(pesq)
            }
        }catch(err){
            console.error('Erro a consultar o Reabastecimento!',err)
            res.status(500).json({message: 'Erro a consultar o Reabastecimento!'})
        }
    }
    
    const apagarReabastecimento = async (req,res)=>{
        const valor = req.params
        console.log(valor)
        try{
            const pesq = await Reabastecimento.findByPk(valor.id)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Reabastecimento não existe no banco de dados!"})
            }else{
                await Reabastecimento.destroy({where: { codReabastecimento: valor.id}})
                res.status(200).json({message: "Reabastecimento Excluído do banco de dados!"})
            }
        }catch(err){
            console.error('Erro ao excluir o Reabastecimento!',err)
            res.status(500).json({message: 'Erro ao excluir o Reabastecimento!'})
        }
    }
    
    const atualizarReabastecimento = async (req,res)=>{
        const valores = req.body
        console.log(valores)
        try{
            const pesq = await Reabastecimento.findByPk(valores.codReabastecimento)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Reabastecimento encontrado no banco de dados!"})
            }else{
                await Reabastecimento.update(valores, {where: { codReabastecimento: valores.codReabastecimento}})
                const pesq2 = await Reabastecimento.findByPk(valores.codReabastecimento)
                res.status(200).json(pesq2)
            }
        }catch(err){
            console.error('Erro ao atualizar o Reabastecimento!',err)
            res.status(500).json({message: 'Erro ao atualizar o Reabastecimento!'})
        }
    }



module.exports = {cadastrarReabastecimento,listarReabastecimento, consultarReabastecimento, apagarReabastecimento, atualizarReabastecimento}