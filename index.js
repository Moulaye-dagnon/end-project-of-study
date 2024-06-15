require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const cookie = require('cookie-parser')
const connexion = require('./mongoose/connect')


//import des route

const route_signUp = require('./route/signUp')
const route_login = require('./route/login')
const route_loginOut = require('./route/loginout')
const route_Addjob = require('./route/Add.job')
const route_Data = require('./route/FectchDatajob')

//connexion a la base de donnees 

//Middleware
app.use(express.json())
app.use(cors({
	credentials:true
}))
app.use(cookie())
//les routes

app.use('/signUp', route_signUp)
app.use('/login', route_login)
app.use('/addJob',route_Addjob)
app.use('/data',route_Data)
app.use('/loginOut',route_loginOut)

//run server
app.listen(port,()=>{
	console.log(`node connected at the port ${port}`);
})