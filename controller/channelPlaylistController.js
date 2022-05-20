const ChannelPlaylist = require('../models/channelPlaylist')
const Video = require('../models/video')
const PlaylistVideo = require('../models/playlistVideo')

exports.getChannelPlaylists = async (req, res) => {
  try {
    let channelId = req.params.channelId
    let data = await ChannelPlaylist.findAll({ where: { channelId } })
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

exports.createChannelPlayList = async (req, res) => {
  try {

    let data = await ChannelPlaylist.create(req.body)
    res.status(200).json({
      status: 'fail',
      data
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.deleteChannelPlaylist = async (req, res) => {
  try {

    await ChannelPlaylist.destroy({ where: { playListId: req.params.playListId } })
    res.status(200).json({
      status: 'success',
      message: 'Playlist deleted successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.getChannelPlaylistsVideos = async(req,res)=>{
  try {

    let data = await PlaylistVideo.findAll({where:{playListId:req.params.playListId}})
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