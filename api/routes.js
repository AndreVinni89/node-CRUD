const express = require('express')
const router = express.Router()
const User = require('./src/model/User')



router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.get('/', (req, res) => {

    return res.render('index.html')

})

router.get('/register', (req, res) => {
    

    return res.render('register.html')

})

router.post('/register', async (req, res) => {
    
    const {name, email, password} = req.body

    console.log(req.body.name)

    const user = await User.create({name, password, email})


    return res.render('index.html')

})


router.get('/users', async(req, res) => {

    const users = await User.findAll()


    return res.json(users)

})


router.get('/login', (req, res) => res.render('login.html'))
router.post('/login', (req, res) => {
    const { email , password } = req.body


    const user = User.findOne()

    return res.render('index.html')



})



module.exports = app => app.use(router)