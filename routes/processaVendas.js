const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.post('/', (req, res) => {
    Post.create({
        cliente: req.body.cliente,
        numero: req.body.numero,
        bairro: req.body.bairro,
        rua: req.body.rua,
        casa: req.body.casa,
        complemento: req.body.complemento,
        cartao: req.body.cartao,
        dinheiro: req.body.dinheiro,
        burger1: req.body.burger1,
        burger2: req.body.burger2,
        burger3: req.body.burger3,
        burger4: req.body.burger4,
        burger5: req.body.burger5,
        burger6: req.body.burger6,
        burger7: req.body.burger7,
        burger8: req.body.burger8,
        burger9: req.body.burger9,
        burger10: req.body.burger10,
        bebida1: req.body.bebida1,
        bebida2: req.body.bebida2,
        bebida3: req.body.bebida3,
        bebida4: req.body.bebida4,
        bebida5: req.body.bebida5,
        bebida6: req.body.bebida6,
        bebida7: req.body.bebida7,
        bebida8: req.body.bebida8,
        bebida9: req.body.bebida9,
        bebida10: req.body.bebida10,
        fritas1: req.body.fritas1,
        fritas2: req.body.fritas2,
        fritas3: req.body.fritas3,
        doces1: req.body.doces1,
        doces2: req.body.doces2,
        doces3: req.body.doces3,
        doces4: req.body.doces4,
        doces5: req.body.doces5
    }).then(function() {
        res.send('Enviado com sucesso o Pedido')
    }).catch(function(erro) {
        res.send('Erro ao enviar: ' + erro)
    })
})


module.exports = router