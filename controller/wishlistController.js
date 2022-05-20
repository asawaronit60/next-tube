const Wishlist = require('../models/wishlist')

exports.getAllWishlistVideos = async (req, res) => {
  try {

    let userId = req.user.dataValues.id
    let data = await Wishlist.findAll({ where: { userId } })
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

exports.createWishlist = async (req, res) => {
  try {

    req.body.userId = req.user.dataValues.id

    let videoAlreadyExists = await Wishlist.findAll({ where: { videoId: req.body.videoId } })
    
    if (videoAlreadyExists.length > 0)
      return res.status(404).json({
        status: 'fail',
        message: 'Video Already Exists'
      })

    await Wishlist.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'video added to wishlist successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.deleteWishlistVideo = async (req, res) => {
  try {

    let userId = req.user.dataValues.id
    await Wishlist.destroy({ where: { videoId: req.params.videoId, userId } })
    res.status(200).json({
      status: 'success',
      message: 'Video deleted from wishlist successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}