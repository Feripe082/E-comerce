const {Pedido} = require('../model/associacao')

const cadastrarPedido = async(req,res)=>{
    const valores = req.body

    try{
        const pesq = await Pedido.create(valores,{raw:true})
        res.status(200).json({messgae:'Dados cadastrados'})
    }catch(err){
        console.error('Deu ruim',err)
        res.status(500).json({messgae:'Deu ruim'})
    }
}

    const listarPedido= async (req,res)=>{
        try{
            const pesq = await Pedido.findAll()
            res.status(200).json(pesq)
        }catch(err){
            console.error('Erro a listar o Pedido!',err)
            res.status(500).json({message: 'Erro a listar o Pedido!'})
        }
    }
    
    const consultarPedido = async (req,res)=>{
        const valor = req.query
        console.log(valor)
        try{
            const pesq = await Pedido.findOne({where: { codPedido: valor.codPedido}})
            if(pesq === null){
                console.log('Não encontrada no banco de dados!')
                res.status(404).json({message: "Não encontrada no banco de dados!"})
            }else{
                console.log(pesq)
                res.status(200).json(pesq)
            }
        }catch(err){
            console.error('Erro a consultar o Pedido!',err)
            res.status(500).json({message: 'Erro a consultar o Pedido!'})
        }
    }
    
    const apagarPedido = async (req,res)=>{
        const valor = req.params
        console.log(valor)
        try{
            const pesq = await Pedido.findByPk(valor.id)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Pedido não existe no banco de dados!"})
            }else{
                await Pedido.destroy({where: { codPedido: valor.id}})
                res.status(200).json({message: "Pedido Excluído do banco de dados!"})
            }
        }catch(err){
            console.error('Erro ao excluir o Pedido!',err)
            res.status(500).json({message: 'Erro ao excluir o Pedido!'})
        }
    }
    
    const atualizarPedido = async (req,res)=>{
        const valores = req.body
        console.log(valores)
        try{
            const pesq = await Pedido.findByPk(valores.codPedido)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Pedido não encontrado no banco de dados!"})
            }else{
                await Pedido.update(valores, {where: { codPedido: valores.codPedido}})
                const pesq2 = await Pedido.findByPk(valores.codPedido)
                res.status(200).json(pesq2)
            }
        }catch(err){
            console.error('Erro ao atualizar o Pedido!',err)
            res.status(500).json({message: 'Erro ao atualizar o Pedido!'})
        }
    }

    


    module.exports = {cadastrarPedido, listarPedido, apagarPedido,atualizarPedido,consultarPedido}