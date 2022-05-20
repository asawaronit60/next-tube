const Like = require('../models/like')

exports.getAllLikedVideos = async (req, res) => {
  try {
    let userId = req.user.dataValues.id

    let data = await Like.findAll({ where: { userId } })
    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.createLike = async (req, res) => {
  try {

    let userId = req.user.dataValues.id
    let videoAlreadyExists = await Like.findAll({ where: { videoId: req.params.videoId, userId } })
    if (videoAlreadyExists.length > 0)
      return res.status(400).json({
        status: 'fail',
        message: 'video already exists'
      })

    await Like.create({
      videoId: req.params.videoId,
      userId
    })

    res.status(200).json({
      status: 'success',
      message: 'video added successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.deleteLikeVideo = async (req, res) => {
  try {
    let userId = req.user.dataValues.id
    await Like.destroy({ where: { videoId: req.params.videoId, userId } })

    res.status(200).json({
      status:'success',
      message:'video deleted successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}