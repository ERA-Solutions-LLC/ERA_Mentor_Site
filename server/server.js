const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(cors())
server.use(helmet())

const PORT = 5000

const companyUserRoutes = require('./data/routes/company_user_route')

server.use('api/company-user', companyUserRoutes)

server.get('/', (req,res) => {
    return res.json({message: 'Welcome,Bienvenido'})
})

server.listen(PORT, () =>{
    console.log(`\n*** Server running on port: ${PORT} ***\n`)
})

