const wishlistController = require('../controller/wishlistController')
const authController = require('../controller/authController')
const express = require('express')
const router = express.Router()

router.get('/getAllWishlistedVideos',authController.protect ,wishlistController.getAllWishlistVideos)
router.post('/createWishlistVideo' , authController.protect, wishlistController.createWishlist)
router.delete('/deleteWishlistedVideo/:videoId', authController.protect,wishlistController.deleteWishlistVideo)
module.exports = router