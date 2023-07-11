
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

const payRollRoutes = require('./data/routes/payroll_routes')

const jobTrainingRoutes = require('./data/routes/job_training')

const leaveTimeRoutes = require('./data/routes/leave_time_route')

const auth = require('./middleware/auth/autoRouter');

const authenticate = require('./middleware/auth/authMiddleware')

//include all route paths and point to the files defining routes

server.use('/api/auth', auth)

server.use('/api/employee-details', employeeDetailsRoutes)

server.use('/api/company-user', companyUserRoutes)

server.use('/api/mail', mailRoutes)

server.use('/api/contact-form', contactFormRoutes)

server.use('/payroll', payRollRoutes)

server.use('/leave-time', leaveTimeRoutes)

server.use('/job-training', jobTrainingRoutes)


server.listen(PORT, () =>{

    console.log(`\n*** Server running on port: ${PORT} ***\n`)

})