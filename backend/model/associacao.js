const Cliente = require('./Cliente')
const Entrega = require('./Entrega')
const Estoque = require('./Estoque')
const Fabricante = require('./Fabricante')
const Pagamento = require('./Pagamento')
const Pedido = require('./Pedido')
const Produto = require('./Produto')
const Reabastecimento = require('./Reabastecimento')
const ItemPedido = require('./ItemPedido')


Cliente.hasMany(Pedido, {
    foreignKey: 'clienteId',
    as: 'pedidos',
    onDelete: 'CASCADE'
})
Pedido.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    as: 'cliente',
    allowNull: false
})
Pedido.hasOne(Entrega, {
    foreignKey: 'pedidoId',
    as: 'entrega',
    onDelete: 'CASCADE'
})
Entrega.belongsTo(Pedido, {
    foreignKey: 'pedidoId',
    as: 'pedido',
    allowNull: false
})
Pedido.hasOne(Pagamento, {
    foreignKey: 'pedidoId',
    as: 'pagamento',
    onDelete: 'CASCADE'
})
Pagamento.belongsTo(Pedido, {
    foreignKey: 'pedidoId',
    as: 'pedido',
    allowNull: false
})
Pedido.hasMany(ItemPedido, {
    foreignKey: 'pedidoId',
    as: 'itensPedido',
    onDelete: 'CASCADE'
})
ItemPedido.belongsTo(Pedido, {
    foreignKey: 'pedidoId',
    as: 'pedido',
    allowNull: false
})

Produto.hasMany(ItemPedido, {
    foreignKey: 'produtoId',
    as: 'itensPedido',
    onDelete: 'CASCADE'
})
ItemPedido.belongsTo(Produto, {
    foreignKey: 'produtoId',
    as: 'produto',
    allowNull: false
})

Fabricante.hasMany(Produto, {
    foreignKey: 'fabricanteId',
    as: 'produtos',
    onDelete: 'CASCADE'
})
Produto.belongsTo(Fabricante, {
    foreignKey: 'fabricanteId',
    as: 'fabricante',
    allowNull: false
})

Produto.hasOne(Estoque, {
    foreignKey: 'produtoId',
    as: 'estoque',
    onDelete: 'CASCADE'
})
Estoque.belongsTo(Produto, {
    foreignKey: 'produtoId',
    as: 'produto',
    allowNull: false
})

Estoque.hasMany(Reabastecimento, {
    foreignKey: 'estoqueId',
    as: 'reabastecimentos',
    onDelete: 'CASCADE'
})
Reabastecimento.belongsTo(Estoque, {
    foreignKey: 'estoqueId',
    as: 'estoque',
    allowNull: false
})


module.exports = { Cliente, Pedido, Entrega, Pagamento, 
    ItemPedido, Produto, Estoque, Reabastecimento, Fabricante }
