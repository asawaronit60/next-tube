const { DataTypes, sequelize } = require('../connection')

const playlistVideo = sequelize.define('playlistVideo', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  playlistId: {
    type: DataTypes.UUID,
    references: {
      model: 'playlists',
      key: 'id'
    }
  },
  videoId :{
    type:DataTypes.INTEGER,
    references:{
      model:'videos',
      key:'id'
    }
  }
})

module.exports = playlistVideo