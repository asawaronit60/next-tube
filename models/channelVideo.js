const {sequelize , DataTypes} = require('../connection')

const channelVideo = sequelize.define('channelVideo',{
  id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true,
    allowNull:false,
  },
  channelId:{
    type:DataTypes.UUID,
    references:{
      model:'channels',
      key:'id'
    }
  },
  videoId:{
    type:DataTypes.INTEGER,
    references:{
      model:'videos',
      key:'id'
    }
  }
})

module.exports = channelVideo