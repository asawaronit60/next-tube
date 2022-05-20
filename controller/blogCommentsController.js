const BlogComment = require('../models/blogComments');
const Blog = require('../models/blogModel');

exports.getAllComments = async(req,res)=>{
  try {
    
    let data = await BlogComment.findAll({where:{blogId:req.params.blogId}});
    
    res.status(200).json({
      status:'success',
      data
    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.createComment = async(req,res)=>{

 try {
    
  let blog = await Blog.findOne({where:{id:req.params.blogId}})

  if(blog==null)
  return res.status(400).json({
    status:"fail",
    message:"No such blog!"
  })


  req.body.userId = req.user.dataValues.id
  req.body.blogId = req.params.blogId

  await BlogComment.create(req.body)
  
  res.status(200).json({
    status:'success',
    message:'Comment Added Successfully!'
  })

 } catch (err) {
   res.status(400).json({
     status:'fail',
     message:err.message
   })
 }

}

exports.deleteComment = async(req,res)=>{
  try {
    
    await BlogComment.destroy({where:{id:req.params.blogCommentId,userId: req.user.dataValues.id}})
    res.status(200).json({
      status:'success',
      message:'comment deleted successfully!!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateComment = async(req,res)=>{
  try {

   await BlogComment.update(req.body,{where:{id:req.params.blogCommentId,userId: req.user.dataValues.id}}) 

   res.status(200).json({
    status:'success',
    message:'comment Updated successfully!!'
  })

} catch (err) {
  res.status(400).json({
    status:'fail',
    message:err.message
  })
}
}