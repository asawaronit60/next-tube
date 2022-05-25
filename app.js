const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const fs = require('fs')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const user = require('./routes/user')
const blog = require('./routes/blogs')
const faq = require('./routes/faq')
const page = require('./routes/pages')
const testimonial = require('./routes/testimonial')
const mailSetting = require('./routes/mailSetting')
const seoSetting = require('./routes/seoSetting')
const generalSetting = require('./routes/generalSetting')
const slider = require('./routes/slider')
const video = require('./routes/video')
const channel = require('./routes/channel')
const channelPlaylist = require('./routes/channelPlaylist')
const playlistVideo = require('./routes/playlistVideo')
const videoHistory = require('./routes/videoHistory')
const channelVideo = require('./routes/channelVideo')
const playlist = require('./routes/playlist')
const wishlist = require('./routes/wishlist')
const like = require('./routes/like')
const subscribe = require('./routes/subscribe')
const blogsComment = require('./routes/blogComment')
const {sequelize}  = require('./connection')

const alter = false


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

sequelize.authenticate().then(()=>{
    console.log('connected to db successfully')
})
sequelize.sync({alter}).catch(err=>{
    console.log(err)
})

if(!fs.existsSync('./assets')){
   fs.mkdir('./assets',(err)=>{
    fs.mkdir('./assets/videos',{recursive:true},(err)=>{})
    fs.mkdir('./assets/images',{recursive:true},(err)=>{})
   })
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1/user',user)
app.use('/api/v1/blog',blog)
app.use('/api/v1/faq',faq)
app.use('/api/v1/page',page)
app.use('/api/v1/testimonial',testimonial)
app.use('/api/v1/mailSetting',mailSetting)
app.use('/api/v1/seoSetting',seoSetting)
app.use('/api/v1/generalSetting',generalSetting)
app.use('/api/v1/slider',slider)
app.use('/api/v1/video',video)
app.use('/api/v1/channel',channel)
app.use('/api/v1/channelPlayList',channelPlaylist)
app.use('/api/v1/playlistVideo',playlistVideo)
app.use('/api/v1/videoHistory',videoHistory)
app.use('/api/v1/channelVideo',channelVideo)
app.use('/api/v1/playlist',playlist)
app.use('/api/v1/wishlist',wishlist)
app.use('/api/v1/like',like)
app.use('/api/v1/subscribe',subscribe)
app.use('/api/v1/blogsComment',blogsComment)

app.use('*',(err,req,res,next)=>{
    console.log(`Hello from error function -  ${err.message} Error Occured !`);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${5000}` )
})
