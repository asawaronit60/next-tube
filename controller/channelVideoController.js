const channelVideo = require('../models/channelVideo')

exports.getAllVideo = async(req,res)=>{
  try {

    let channelId = req.params.channelId
    let data = await channelVideo.findAll({where:{channelId}})
    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
      res.status(400),json({
        status:'fail',
        message:err.message
      })
  }
}


