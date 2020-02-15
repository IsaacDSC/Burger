const db = require('./db')

const Post = db.sequelize.define('pedidos', {
    cliente: {
        type: db.Sequelize.STRING(60)
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
    bairro: {
        type: db.Sequelize.FLOAT
    },
    rua: {
        type: db.Sequelize.STRING(100)
    },
    casa: {
        type: db.Sequelize.STRING
    },
    complemento: {
        type: db.Sequelize.TEXT
    },
    tipoPagamento: {
        type: db.Sequelize.STRING(10)
    },
    totalCompra: {
        type: db.Sequelize.FLOAT
    },
    burger1: {
        type: db.Sequelize.FLOAT
    },
    burger2: {
        type: db.Sequelize.FLOAT
    },
    burger3: {
        type: db.Sequelize.FLOAT
    },
    burger4: {
        type: db.Sequelize.FLOAT
    },
    burger5: {
        type: db.Sequelize.FLOAT
    },
    burger6: {
        type: db.Sequelize.FLOAT
    },
    burger7: {
        type: db.Sequelize.FLOAT
    },
    burger8: {
        type: db.Sequelize.FLOAT
    },
    burger9: {
        type: db.Sequelize.FLOAT
    },
    burger10: {
        type: db.Sequelize.FLOAT
    },
    bebida1: {
        type: db.Sequelize.FLOAT
    },
    bebida2: {
        type: db.Sequelize.FLOAT
    },
    bebida3: {
        type: db.Sequelize.FLOAT
    },
    bebida4: {
        type: db.Sequelize.FLOAT
    },
    bebida5: {
        type: db.Sequelize.FLOAT
    },
    bebida6: {
        type: db.Sequelize.FLOAT
    },
    bebida7: {
        type: db.Sequelize.FLOAT
    },
    bebida8: {
        type: db.Sequelize.FLOAT
    },
    bebida9: {
        type: db.Sequelize.FLOAT
    },
    bebida10: {
        type: db.Sequelize.FLOAT
    },
    fritas1: {
        type: db.Sequelize.FLOAT
    },
    fritas2: {
        type: db.Sequelize.FLOAT
    },

    fritas3: {
        type: db.Sequelize.FLOAT
    },
    doces1: {
        type: db.Sequelize.FLOAT
    },
    doces2: {
        type: db.Sequelize.FLOAT
    },
    doces3: {
        type: db.Sequelize.FLOAT
    },
    doces4: {
        type: db.Sequelize.FLOAT
    },
    doces5: {
        type: db.Sequelize.FLOAT
    }
})

//criando table
//Post.sync({ force: true })

module.exports = Post