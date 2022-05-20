const playlistVideoController = require('../controller/playlistVideoController')
const express = require('express')
const router = express.Router()

router.get('/getPlaylistVideos/:playlistId',playlistVideoController.getAllPlaylistvideos)

module.exports = router