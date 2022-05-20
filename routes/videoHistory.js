const videoHistoryController = require('../controller/videoHistoryController')
const express = require('express')
const router = express.Router()

router.get('/getUserHistory/:userId',videoHistoryController.getUserHistory)

module.exports = router