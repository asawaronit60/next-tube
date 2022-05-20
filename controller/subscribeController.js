const Subscribe = require('../models/subscribeChannel')

exports.getAllSubscribedChannels = async(req,res)=>{
  try {

    let data = await Subscribe.findAll({where:{userId:req.user.dataValues.id}})
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

exports.subscribeChannel = async(req,res)=>{
  try {
    let userId = req.user.dataValues.id
   let isAlreadySubscribed  = await Subscribe.findAll({where:{channelId:req.params.channelId, userId}})
    console.log(req.params.channelId, isAlreadySubscribed)
    if(isAlreadySubscribed.length>0)
    return res.status(400).json({
      status:'fail',
      message:'channel already subscribed'
    })

    await Subscribe.create({
      channelId:req.params.channelId,
      userId
    })

    res.status(200).json({
      status:'success',
      message:'subscribed channel successfully'
    })
   

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.unSubscribeChannel = async(req,res)=>{
  try {    
    await Subscribe.destroy({where:{channelId:req.params.channelId,userID:req.user.dataValues.id}})

    res.status(200).json({
      status:'success',
      mseeage:'Unsubscribed channel !'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}