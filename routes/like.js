const likeController = require('../controller/likeController')
const authController = require('../controller/authController')
const express = require('express')
const router = express.Router()

router.get('/getAllLikedVideos',authController.protect,likeController.getAllLikedVideos)
router.post('/createLikeVideo/:videoId',authController.protect,likeController.createLike)
router.delete('/deleteLikeVideo/:videoId',authController.protect,likeController.deleteLikeVideo)


module.exports = router