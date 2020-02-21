const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const Post = require('./models/Post')
const session = require('express-session')
const flash = require('connect-flash')

//adicinando rotas de recebimento
const processaVendas = require('./routes/processaVendas')
const exibePedidos = require('./routes/exibePedidos')

//configurando session
app.use(session({
    secret: 'md5(!@#)123',
    resave: true,
    saveUninitialized: true
}))

//configurando flash
app.use(flash())

//configurando midleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

//configurando bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//carregando arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

//adicionando rotas
//adicionando rota principal
app.get('/', (req, res) => {
        res.render('login/login')
    })
    /*================================================================================
                        adionando rotas da abas de vendas
    ================================================================================
    */
    //adicionando rota de vendas
app.get('/vendas', (req, res) => {
        res.render('vendas/vendas')
    })
    //adionando rota de processo para envio de vendas
app.use('/processaVendas', processaVendas)
    /*=============================================================================
                adiconando abas que exibem pedidos feitos e registrados 
    ============================================================================*/
app.use('/pedidos', exibePedidos)

//adionando delete na aba de exibir pedidos
app.get('/delete/:id', (req, res) => {
        Post.destroy({ where: { 'id': req.params.id } }).then(() => {
            res.send('Postagem deletada com sucesso')
        }).catch((err) => {
            res.send('Postagem nao existe')
        })
    })
    //adionando ver mais  aba de exibir pedidos
app.get("/pedido/:id", (req, res) => {
        Post.findByPk(req.params.id).then((pedido) => {
            // res.render('pedido/pedido', { pedido: pedido })
            res.json(pedido)

        }).catch((err) => {
            res.send('erro: ' + err)
        })
    })
    //adiconando editar na aba de exibir pedidos
app.get('/editar/:id', (req, res) => {
    Post.findOne({ id: req.body.id }).then((editar) => {
        editar.cliente = req.body.cliente

        editar.save().then(() => {
            req.flash('success_msg', 'Pedido editado com sucesso!')
            res.redirect('/pedidos')
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao salvar a edição')
            res.redirect('/pedidos')
        })
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao editar a categoria')
        res.redirect('/pedidos')
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})