const Video = require('../models/video')
const multer = require('multer')
const path = require('path')
const { ffmpeg } = require('../utils/ffmpeg');
const Channel = require('../models/channel')
const channelVideo = require('../models/channelVideo')
const playlistVideo = require('../models/playlistVideo')
const fs  = require('fs')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name 
    cb(null, 'assets/videos')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
});


const upload = multer({ storage, dest: '../assets/videos/' }).single("video");


exports.VideoUploader = async (req, res) => {
  try {

    //check if channel is created or not
    let isChannelCreated = await Channel.findOne({ where: { userID: req.user.dataValues.id } })
    if (isChannelCreated === null)
      return res.status(400).json({
        status: 'fail',
        message: 'Channel not created!'
      })

    upload(req, res, async (err) => {
      if (err) {
        res.status(400).send(err.message);
      }

      let filename = req.file.filename.replace(path.extname(req.file.filename), "")
      let ext = path.extname(req.file.filename)

      await ffmpeg(filename, ext, res)

      let video = await Video.create({
        name: req.body.name,
        description: req.body.description,
        videoUrl: `../assets/videos/${filename}${ext}`,
        size: req.file.size,
        thumbnail: `../assets/videos/${filename}.jpg`
      })

      if (req.body.playlistId) {
        await playlistVideo.create({
          videoId: video.dataValues.id,
          playlistId: req.body.playlistId
        })
        res.status(200).json({
          status: 'success',
          message: 'video uploaded successfully!'
        })
      }
      else {
        await channelVideo.create({
          channelId: isChannelCreated.dataValues.id,
          videoId: video.dataValues.id
        }).then((resp) => {
          res.status(200).json({ resp })
        }).catch(err => {
          res.status(400).json({ message: err })
        })

      }

    })//uploads

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}


exports.getVideo = async(req,res)=>{

  try {
    
    let data  = await Video.findOne({where:{id:req.params.videoId}})
    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}


exports.videoStream = async(req,res)=>{
  try {

    const range =  req.headers.range || '340000';
    
      if (!range) {
        res.status(400).send("Requires Range header");
        return
    }
    let video  = await Video.findOne({where:{id:req.params.videoId}})

    const videoSize = fs.statSync(`__dirname/${video.dataValues.videoUrl}`).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(`__dirname/${video.dataValues.videoUrl}`, { start, end });
    videoStream.pipe(res);


  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

/**
 * const fs = require("fs").promises;
const buff = Buffer.alloc(100);
const header = Buffer.from("mvhd");

async function main() {
 const file = await fs.open("video.mp4", "r");
 const { buffer } = await file.read(buff, 0, 100, 0);

 await file.close();

 const start = buffer.indexOf(header) + 17;
 const timeScale = buffer.readUInt32BE(start);
 const duration = buffer.readUInt32BE(start + 4);

 const audioLength = Math.floor((duration / timeScale) * 1000) / 1000;

 console.log(buffer, header, start, timeScale, duration, audioLength);
}
 * 
 *  */ 