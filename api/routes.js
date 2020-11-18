import path from 'path'
import Router from 'express'

const routes = Router()
// então, criamos uma rota para '/'
routes.get('/', (req, res) => {


    res.sendFile(path.join(__dirname, "public", "view", "index.html"))


})

export default routes