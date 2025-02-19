const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Pedido = db.define('pedido', {
    codPedido: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    clienteId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    },
    dataPedido: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    valorPedido: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName: 'pedidos',
    timestamps:false
})

module.exports = Pedido
