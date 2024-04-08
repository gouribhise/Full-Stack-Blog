const createCommentCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comment Created'}
)
    }catch(error){
res.json(error)
    }
}

//single comment
const commentDetailsCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comments Details'}
)
    }catch(error){
res.json(error)
    }
}

//delete comment
const deleteCommentCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comment Deleted'}
)
    }catch(error){
res.json(error)
    }
}

const updateCommentCtrl=async(req,res)=>{
    try{
res.json(
    {status:'success',user:'Comment Updated'}
)
    }catch(error){
res.json(error)
    }
}

module.exports={
    createCommentCtrl,
    commentDetailsCtrl,
    deleteCommentCtrl,
    updateCommentCtrl
}