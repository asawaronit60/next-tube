const playlistController = require('../controller/playlistController')
const express = require('express')
const router  = express.Router()

router.get('/getAllPlaylists',playlistController.getAllPlaylists)
router.post('/createPlaylist',playlistController.createPlaylist)

module.exports = router;