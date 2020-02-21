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

app.get('/', (req, res) => {
    res.render('login/login')
})
app.get('/vendas', (req, res) => {
    res.render('vendas/vendas')
})
app.use('/processaVendas', processaVendas)

app.use('/pedidos', exibePedidos)
    //deletando /delete
app.get('/delete/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } }).then(() => {
        res.send('Postagem deletada com sucesso')
    }).catch((err) => {
        res.send('Postagem nao existe')
    })
})
app.get("/pedido/:id", (req, res) => {
    Post.findByPk(req.params.id).then((pedido) => {
        // res.render('pedido/pedido', { pedido: pedido })
        res.json(pedido)

    }).catch((err) => {
        res.send('erro: ' + err)
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})