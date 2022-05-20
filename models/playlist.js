const { sequelize, DataTypes } = require('../connection')

const playlist = sequelize.define('playlist', {
  id: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visiblity: {
    type: DataTypes.ENUM('public', 'private'),
    allowNull: false
  }
})


module.exports = playlist