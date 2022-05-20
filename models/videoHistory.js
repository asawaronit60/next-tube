const {sequelize , DataTypes} = require('../connection')

const videoHistory = sequelize.define('videoHistory',{
  id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    allowNull:false,
    primaryKey:true
  },
  userId:{
    type:DataTypes.INTEGER,
    unique:true,
    allowNull:false,
    references:{
      model:'users',
      key:'id'
    }
  },
  channelId:{
    type:DataTypes.UUID,
    references:{
      model:'channels',
      key:'id'
    }
  }


})

module.exports = videoHistory
