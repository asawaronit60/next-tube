const { exec } = require('child_process')
const { promisify } = require('util')
const execute = promisify(exec)
const Video = require('../models/video')

exports.ffmpeg = async (filename, ext,res) => {
    try {

        await execute(`cd assets/videos && ffmpeg -i ${filename}${ext} -c copy -movflags +faststart -y ${filename}_2${ext}`)
        await execute(`cd assets/videos && mv ${filename}_2${ext} ${filename}${ext}`)
        await execute(`cd assets/videos && ffmpeg -i ${filename}${ext} -ss 1 -vframes 1 -qscale:v 2 -y ${filename}.jpg 2>&1`)

    } catch (err) {
      res.status(400).json({
          status:'fail',
          message:err.message
      })
    }
}





