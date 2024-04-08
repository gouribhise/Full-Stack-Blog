const createPostCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Created'}
)
    }catch(error){
res.json(error)
    }
}

//fetch all posts
const fetchPostsCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Posts List'}
)
    }catch(error){
res.json(error)
    }
}

//single post
const fetchSinglePostCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Details'}
)
    }catch(error){
res.json(error)
    }
}

//delete post
const deletePostCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Deleted'}
)
    }catch(error){
res.json(error)
    }
}

//update post
const updatePostCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Post Updated'}
)
    }catch(error){
res.json(error)
    }
}
module.exports={
    createPostCtrl,
    fetchPostsCtrl,
    fetchSinglePostCtrl,
    deletePostCtrl,
    updatePostCtrl
}