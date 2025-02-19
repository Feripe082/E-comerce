const {Pagamento} = require('../model/associacao')

const cadastrarPagamento = async(req,res)=>{
    const valores = req.body

    try{
        const pesq = await Pagamento.create(valores,{raw:true})
        res.status(200).json({messgae:'Dados cadastrados'})
    }catch(err){
        console.error('Deu ruim',err)
        res.status(500).json({messgae:'Deu ruim'})
    }
}

    const listarPagamento = async (req,res)=>{
        try{
            const pesq = await Pagamento.findAll()
            res.status(200).json(pesq)
        }catch(err){
            console.error('Erro a listar o Pagamento!',err)
            res.status(500).json({message: 'Erro a listar o Pagamento!'})
        }
    }
    
    const consultarPagamento = async (req,res)=>{
        const valor = req.query
        console.log(valor)
        try{
            const pesq = await Pagamento.findOne({where: { codPagamento: valor.codPagamento}})
            if(pesq === null){
                console.log('Não encontrada no banco de dados!')
                res.status(404).json({message: "Não encontrada no banco de dados!"})
            }else{
                console.log(pesq)
                res.status(200).json(pesq)
            }
        }catch(err){
            console.error('Erro a consultar o Pagamento',err)
            res.status(500).json({message: 'Erro a consultar o Pagamento!'})
        }
    }
    
    const apagarPagamento = async (req,res)=>{
        const valor = req.params
        console.log(valor)
        try{
            const pesq = await Pagamento.findByPk(valor.id)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Pagamento não existe no banco de dados!"})
            }else{
                await Pagamento.destroy({where: { codPagamento: valor.id}})
                res.status(200).json({message: "Pagamento Excluído do banco de dados!"})
            }
        }catch(err){
            console.error('Erro ao excluir o Pagamento!',err)
            res.status(500).json({message: 'Erro ao excluir o Pagamento!'})
        }
    }
    
    const atualizarPagamento = async (req,res)=>{
        const valores = req.body
        console.log(valores)
        try{
            const pesq = await Pagamento.findByPk(valores.codPagamento)
            if(pesq === null){
                console.log(pesq)
                res.status(404).json({message: "Pagamento não encontrado no banco de dados!"})
            }else{
                await Pagamento.update(valores, {where: { codPagamento: valores.codPagamento}})
                const pesq2 = await Pagamento.findByPk(valores.codPagamento)
                res.status(200).json(pesq2)
            }
        }catch(err){
            console.error('Erro ao atualizar o Pagamento!',err)
            res.status(500).json({message: 'Erro ao atualizar o Pagamento!'})
        }
    }



    module.exports = {cadastrarPagamento, listarPagamento, apagarPagamento,atualizarPagamento,consultarPagamento}