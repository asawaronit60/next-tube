const { sequelize, DataTypes } = require('../connection')
const User = require('../models/userModel')

const channel = sequelize.define('channel', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  channelName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bannerImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

channel.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

module.exports = channel