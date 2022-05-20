const PlaylistVideo = require('../models/playlistVideo')

exports.getAllPlaylistvideos =async(req,res)=>{
  try {
      let playlistId = req.params.playlistId
      let data = await PlaylistVideo.findAll({where:{playlistId}})
      res.status(200).json({
        status:'fail',
        data
      })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}
