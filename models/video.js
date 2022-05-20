const {sequelize, DataTypes} = require('../connection')

const video = sequelize.define('video',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    videoUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    category:{
        type:DataTypes.STRING,
        allowNull:true
    },
    size:{
        type:DataTypes.FLOAT,
        allowNull:true
    },
    length:{
        type:DataTypes.FLOAT,
        allowNull:true
    },
    thumbnail:{
        type:DataTypes.STRING,
        allowNull:true
    }
})


module.exports = video

