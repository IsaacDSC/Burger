const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    Post.findAll().then(function(posts) {
        res.render('exibePedidos/exibePedidos', { posts: posts })
    })
})

module.exports = router