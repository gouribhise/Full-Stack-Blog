const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
require('./config/dbConnect')
const app=express()

//middlewares
//routes
//error
//listen  server

const PORT=process.env.PORT||9000
app.listen(PORT,console.log(`server is running on PORT ${PORT}`))

 //npm run server
