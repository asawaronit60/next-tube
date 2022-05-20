const{sequelize, DataTypes} = require('../connection')

const Notification = sequelize.define('notification ',{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    notification_title: {
        type: DataTypes.STRING(350),
        allowNull: false
    },
    notification_description:{
        type:DataTypes.STRING(350),
        allowNull:false
    },
    movies:{
        type:DataTypes.STRING(350),
        allowNull:false
    },
     live_tv:{
        type:DataTypes.STRING(350),
        allowNull:false
    },
    tv_series:{
        type:DataTypes.STRING(350),
        allowNull:false
    },
    users:{
        type:DataTypes.STRING(200),
        allowNull:false,
        get(){

        },
        set(){

        }
    }

})

module.exports = Notification