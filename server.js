const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const userRoutes = require('./routes/users/users')
const postRoutes = require('./routes/posts/posts')
const commentRoutes = require('./routes/comments/comments')
require('./config/dbConnect')
const app=express()

//middlewares

//routes
//users route
app.use('/api/v1/users',userRoutes)

//posts route
app.use('/api/v1/posts',postRoutes)
//register

//comments route
app.use('/api/v1/comments',commentRoutes)
//--------------------------------------------------------------//
//posts route


//------------------------------------------------//
//comments route
//comment created

//error
//listen  server

const PORT=process.env.PORT||9000
app.listen(PORT,console.log(`server is running on PORT ${PORT}`))

 //npm run server
