const res = require("express/lib/response")


exports.getAll = (Model)=> async(req,res)=>{

  try {
  
    let data = await Model.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.json({
      status:'fail',
      message:err.message
    })
  }
}

exports.create = (Model)=> async(req,res)=>{

  try {
  
    let data = await Model.create(req.body)

    res.status(200).json({
      status:'Data added successfully!',
      data
    })

  } catch (err) {
    res.json({
      status:'fail',
      message:err.message
    })
  }
}

exports.delete = (Model)=> async(req,res)=>{

  try {
     await Model.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'Data deleted successfully!',
    })

  } catch (err) {
    res.json({
      status:'fail',
      message:err.message
    })
  }
}


exports.update = (Model)=> async(req,res)=>{

  try {
     await Model.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'Data updated successfully!',
    })

  } catch (err) {
    res.json({
      status:'fail',
      message:err.message
    })
  }
}