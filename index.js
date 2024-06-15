require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const connexion = require('./mongoose/connect')


//import des route

const route_signUp = require('./route/signUp')
const route_login = require('./route/login')

//connexion a la base de donnees 

//Middleware
app.use(express.json())
app.use(cors({
	credentials:true
}))

//les routes

app.use('/signUp', route_signUp)
app.use('/login', route_login)


//run server
app.listen(port,()=>{
	console.log(`node connected at the port ${port}`);
})