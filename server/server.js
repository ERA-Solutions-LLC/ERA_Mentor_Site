
const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require("dotenv").config();

//server.use(bodyParser.json());

server.use(cors());

server.use(helmet());

server.use(express.json());

const PORT = 4000

const employeeDetailsRoutes = require('./data/routes/employee_details')

const companyUserRoutes = require('./data/routes/company_user_route')

const mailRoutes = require('./mail')

const contactFormRoutes = require('./data/routes/contact_form_route')

const payRollRoutes = require('./data/routes/payroll_routes')

const jobTrainingRoutes = require('./data/routes/job_training')

const leaveTimeRoutes = require('./data/routes/leave_time_route')

const hrLogin = require('./data/routes/login')

//const signUpNewUser = require('./data/routes/company_user_routes/post')

//include all route paths and point to the files defining routes

server.use('/employee-details', employeeDetailsRoutes)

server.use('/company-user', companyUserRoutes)

server.use('/mail', mailRoutes)

server.use('/contact-form', contactFormRoutes)

server.use('/payroll', payRollRoutes)

server.use('/leave-time', leaveTimeRoutes)

server.use('/job-training', jobTrainingRoutes)

server.use('/login', hrLogin)

//server.use('/alexuser', signUpNewUser)
//server.use('/signup', signUpNewUser)

server.get('/', (req,res) => {
    res.send('Hello!')
})


server.listen(PORT, () =>{

    console.log(`\n*** Server running on port: ${PORT} ***\n`)

})