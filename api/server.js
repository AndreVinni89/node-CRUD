const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')


const app = express()

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }))

nunjucks.configure(path.join('public', 'view'), {
    express:app,
    autoescape: true,
    noCache:true
})

//app.use(bodyParser.json())


app.get('/', (req, res) => {

    return res.render('index.html', {name:"Andre"})

})


app.get('/register', (req, res) => {
    

    return res.render('register.html')

})

app.post('/register', (req, res) => {

    console.log(req.body)
    return res.render('register.html')

})




app.listen(3000)


