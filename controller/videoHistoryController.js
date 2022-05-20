const User = require('../models/userModel')
const videoHistory = require('../models/videoHistory')



exports.getUserHistory = async (req, res) => {
  try {
    let userId = req.params.userId
    let user = await User.findAll({ where: { id: userId } })

    if (user.length ===0 )
      return res.status(404).json({
        status: 'fail',
        message: 'No user found'
      })

    let data = await videoHistory.findAll({ where: { userId } })

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
