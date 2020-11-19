const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')


const app = express()

app.use(express.static(__dirname + '/public'));

nunjucks.configure(path.join('public', 'view'), {
    express:app,
    autoescape: true,
    noCache:true
})



app.get('/', (req, res) => {

    return res.render('index.html', {name:"Andre"})

})


app.get('/ola/:nome', (req, res) => {
    
})




app.listen(3000)


