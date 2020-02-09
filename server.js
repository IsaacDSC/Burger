const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const Post = require('./models/Post')

//adicinando rotas de recebimento
const processaVendas = require('./routes/processaVendas')

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

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})