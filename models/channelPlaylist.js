const {sequelize, DataTypes} = require('../connection')

const channelPlaylist = sequelize.define('channelPlaylist' , {
  id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true,
    allowNull:false
  },
  channelId:{
    type:DataTypes.UUID,
    references:{
      model:'channels',
      key:'id'
    }
  },
  playlistId:{
    type:DataTypes.UUID,
    references:{
      model:'playlists',
      key:'id',
    }
  }

})

module.exports = channelPlaylist;