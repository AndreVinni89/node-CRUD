const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')

require('./src/database/index')

const app = express()

app.use(express.json())

require('./routes')(app)

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }))



nunjucks.configure(path.join('public', 'view'), {
    express:app,
    autoescape: true,
    noCache:true
})




app.listen(3000)


