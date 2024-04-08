const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
require('./config/dbConnect')
const app=express()

//middlewares
//routes
//users route
//register
app.post('/api/v1/users/register',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User registered'}
)
    }catch(error){
res.json(error)
    }
})

//login
app.post('/api/v1/users/login',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User login in'}
)
    }catch(error){
res.json(error)
    }
})

//single user
app.get('/api/v1/users/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User details'}
)
    }catch(error){
res.json(error)
    }
})

//user profile
app.get('/api/v1/users/profile/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User profile'}
)
    }catch(error){
res.json(error)
    }
})

//update profile photo
app.put('/api/v1/users/profile-photo-upload/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User profile image upload'}
)
    }catch(error){
res.json(error)
    }
})

//cover photo
app.put('/api/v1/users/cover-photo-upload/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User cover image upload'}
)
    }catch(error){
res.json(error)
    }
})

//update user password
app.put('/api/v1/users/update-password/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User password updated'}
)
    }catch(error){
res.json(error)
    }
})

//update user
app.put('/api/v1/users/update/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User updated'}
)
    }catch(error){
res.json(error)
    }
})

//logout user
app.get('/api/v1/users/logout',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'User logout'}
)
    }catch(error){
res.json(error)
    }
})
//--------------------------------------------------------------//
//posts route

app.post('/api/v1/posts',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Created'}
)
    }catch(error){
res.json(error)
    }
})

//fetch all
app.get('/api/v1/posts',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Posts List'}
)
    }catch(error){
res.json(error)
    }
})

//single post
app.get('/api/v1/posts/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Details'}
)
    }catch(error){
res.json(error)
    }
})

//delete post
app.delete('/api/v1/posts/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Deleted'}
)
    }catch(error){
res.json(error)
    }
})

//updated post
app.put('/api/v1/posts/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Updated'}
)
    }catch(error){
res.json(error)
    }
})
//------------------------------------------------//
//comments route
//comment created
app.post('/api/v1/comments',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comment Created'}
)
    }catch(error){
res.json(error)
    }
})

 

//single comment
app.get('/api/v1/comments/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comments Details'}
)
    }catch(error){
res.json(error)
    }
})

//delete comment
app.delete('/api/v1/comments/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comment Deleted'}
)
    }catch(error){
res.json(error)
    }
})

//updated comment
app.put('/api/v1/comments/:id',async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comment Updated'}
)
    }catch(error){
res.json(error)
    }
})
//error
//listen  server

const PORT=process.env.PORT||9000
app.listen(PORT,console.log(`server is running on PORT ${PORT}`))

 //npm run server
