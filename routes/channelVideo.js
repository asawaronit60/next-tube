const channelVideoController = require('../controller/channelVideoController')
const express = require('express')
const router = express.Router()

router.get('/:channelId/videos',channelVideoController.getAllVideo)

module.exports = router