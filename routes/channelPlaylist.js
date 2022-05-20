const channelPlaylistController = require('../controller/channelPlaylistController')
const express = require('express')
const router = express.Router()

router.get('/getAllPlaylist/:channelId',channelPlaylistController.getChannelPlaylists)
router.post('/createChannelPlaylist',channelPlaylistController.createChannelPlayList)

module.exports = router