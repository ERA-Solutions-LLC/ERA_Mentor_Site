
const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

require("dotenv").config();

server.use(bodyParser.json())

server.use(cors())

server.use(helmet())

const PORT = 4000

const employeeDetailsRoutes = require('./data/routes/employee_details')

const companyUserRoutes = require('./data/routes/company_user_route')

const mailRoutes = require('./mail')

const contactFormRoutes = require('./data/routes/contact_form_route')

const payRollRoutes = require('./data/routes/pay_roll')

const JobTraining = require('./data/routes/JobTraining')

//include all route paths and point to the files defining routes

server.use('/employee-details', employeeDetailsRoutes)

server.use('/company-user', companyUserRoutes)

server.use('/mail', mailRoutes)

server.use('/contact-form', contactFormRoutes)

server.use('/payroll', payRollRoutes)

server.use('/job_training', jobTrainingRoutes)


server.listen(PORT, () =>{

    console.log(`\n*** Server running on port: ${PORT} ***\n`)

})