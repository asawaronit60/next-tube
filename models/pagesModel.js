const {sequelize,DataTypes} = require('../connection')

const pages = sequelize.define('pages',{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    slug:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    details: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
        allowNull: false,
        defaultValue: 'ACTIVE'
    },

})

module.exports = pages