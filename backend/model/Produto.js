const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    codProduto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    fabricanteId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
        }
    },
    nomeProduto:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    quantidadeProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoProduto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricaoProduto:{
        type: DataTypes.STRING(40),
        allowNull: false
    }
},{
    tableName: 'produtos',
    timestamps:false
})

module.exports = Produto