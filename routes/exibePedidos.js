const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    //ASC  == DO MAIS NOVO PARA O ANTIGO 
    //DESC == DO MAIS VELHO PARA O NOVO
    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(posts) {
        res.render('exibePedidos/exibePedidos', { posts: posts })
    })
})
router.get('/errado', (req, res) => {
    res.send('errado')
})

module.exports = router