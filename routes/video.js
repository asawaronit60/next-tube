const videoController = require('../controller/videoController')
const authController = require('../controller/authController')

const express = require('express')
const router = express.Router()

router.post('/upload',authController.protect ,videoController.VideoUploader)
router.get('/getVideo/:videoId',videoController.getVideo)
router.get('/getVideoStream/:videoId',videoController.videoStream)

module.exports = router;
