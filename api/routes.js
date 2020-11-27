const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {

    return res.render('index.html')

})

router.get('/register', (req, res) => {
    

    return res.render('register.html')

})
router.post('/register', (req, res) => {


    console.log(req.body)
    return res.render('register.html')

})


module.exports = app => app.use(router)