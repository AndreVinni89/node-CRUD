const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')


//importando as configurações do banco
require('./src/database/index')

//instanciando o express
const app = express()


app.use(express.json())

require('./routes')(app)

app.use(express.static(__dirname + '/public'));





nunjucks.configure(path.join('public', 'view'), {
    express:app,
    autoescape: true,
    noCache:true
})




app.listen(3000)


