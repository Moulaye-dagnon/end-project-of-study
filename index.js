require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.listen(port,()=>{
	console.log(`node connected at the port ${port}`);
})