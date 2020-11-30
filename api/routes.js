const express = require('express')
const router = express.Router()
const User = require('./src/model/User')



router.get('/', (req, res) => {

    return res.render('index.html')

})

router.get('/register', (req, res) => {
    

    return res.render('register.html')

})
router.post('/register', async (req, res) => {
    
    const {name, password, email} = req.body

    console.log(req.body)

    const user = await User.create({name, password, email})


    return res.json(user)

})


router.get('/users', async(req, res) => {

    const users = await User.findAll()


    return res.json(users)

})

module.exports = app => app.use(router)