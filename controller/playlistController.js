const Playlist = require('../models/playlist')

exports.getAllPlaylists = async(req,res)=>{
  try {
    let data = await Playlist.findAll()
    res.status(200).json({
      status:'success',
      data
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.messasge
    })
  }
}

exports.createPlaylist = async(req,res)=>{
  try {
  
    await Playlist.create(req.body)
    res.status(200).json({
      status:'success',
      message:'playlist created successfully!'
    })

  } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
  }
}