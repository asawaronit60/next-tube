const { sequelize, DataTypes } = require('../connection')

const wishlist = sequelize.define('wishlist', {

  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  videoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = wishlist