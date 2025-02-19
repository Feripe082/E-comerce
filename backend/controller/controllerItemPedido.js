const {ItemPedido} = require('../model/associacao')

const cadastrarItemPedido = async(req,res)=>{
    const valores = req.body

    try{
        const pesq = await ItemPedido.create(valores,{raw:true})
        res.status(200).json({messgae:'Dados cadastrados'})
    }catch(err){
        console.error('Deu ruim',err)
        res.status(500).json({messgae:'Deu ruim'})
    }
}

    const listarItemPedido = async (req,res)=>{
        try{
            const pesq = await ItemPedido.findAll()
            res.status(200).json(pesq)
        }catch(err){
            console.error('Erro a listar o ItemPedido!',err)
            res.status(500).json({message: 'Erro a listar o ItemPedido!'})
        }
    }
    
    const consultarItemPedido = async (req,res)=>{
        const valor = req.query
        console.log(valor)
        try{
            const pesq = await ItemPedido.findOne({where: { codItemPedido: valor.codItemPedido}})
            if(pesq === null){
                console.log('Não encontrada no banco de dados!')
                res.status(404).json({message: "Não encontrada no banco de dados!"})
            }else{
                console.log(pesq)
                res.status(200).json(pesq)
            }
        }catch(err){
            console.error('Erro a consultar o ItemPedido!',err)
            res.status(500).json({message: 'Erro a consultar o ItemPedido!'})
        }
    }
    
    const apagarItemPedido = async (req,res)=>{
        const valor = req.params
        console.log(valor)
        try{
            const pesq = await ItemPedido.findByPk(valor.id)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "ItemPedido não existe no banco de dados!"})
            }else{
                await ItemPedido.destroy({where: { codItemPedido: valor.id}})
                res.status(200).json({message: "ItemPedido Excluído do banco de dados!"})
            }
        }catch(err){
            console.error('Erro ao excluir o ItemPedido!',err)
            res.status(500).json({message: 'Erro ao excluir o ItemPedido!'})
        }
    }
    
    const atualizarItemPedido = async (req,res)=>{
        const valores = req.body
        console.log(valores)
        try{
            const pesq = await ItemPedido.findByPk(valores.codItemPedido)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "ItemPedido não encontrado no banco de dados!"})
            }else{
                await ItemPedido.update(valores, {where: { codItemPedido: valores.codItemPedido}})
                const pesq2 = await ItemPedido.findByPk(valores.codItemPedido)
                res.status(200).json(pesq2)
            }
        }catch(err){
            console.error('Erro ao atualizar o ItemPedido!',err)
            res.status(500).json({message: 'Erro ao atualizar o ItemPedido!'})
        }
    }



    module.exports = {cadastrarItemPedido, listarItemPedido, apagarItemPedido,atualizarItemPedido,consultarItemPedido}