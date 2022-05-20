const Channel = require('../models/channel')

exports.getAllChannel = async (req, res) => {
  try {
    let channels = await Channel.findAll();
    res.status(200).json({
      status: 'success',
      data: channels
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.createChannel = async (req, res) => {

  try {

    let checkIfChannelAlreadyExists = await Channel.findOne({ where: { userId: req.user.dataValues.id } })
    if (checkIfChannelAlreadyExists != null) {
      return res.status(400).json({
        status: 'fail',
        message: 'Channel already exists'
      })
    }

    let obj = req.body;
    obj.userId = req.user.dataValues.id

    let channel = await Channel.create(obj)
    res.status(200).json({
      status: 'success',
      data: channel
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}


exports.getMyChannel = async (req, res) => {
  try {
    let channel = await Channel.findOne({ where: { userId: req.user.dataValues.id } })
    res.status(200).json({
      status: 'success',
      data: channel
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.updateChannel = async (req, res) => {

}