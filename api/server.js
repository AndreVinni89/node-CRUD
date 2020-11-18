

// vamos começar, carregando o express e criando a app
import express from 'express'
import routes from './routes.js'

const server = express()

server.use(routes)

server.listen(3000)


export default server