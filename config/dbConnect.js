const mongoose=require('mongoose')

const dbConnect=async()=>{
    console.log(process.env.MONGO_URI)
    try{
await mongoose.connect("mongourl")
    }catch(error){
        console.log(error)
    }
}

module.exports=dbConnect