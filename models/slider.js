const {sequelize, DataTypes} = require('../connection')

const slider = sequelize.define('slider',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    slide_for: {
        type: DataTypes.ENUM,
        values:['movie','tvSeries'],
        allowNull: false
    },
    slide:{
        type: DataTypes.STRING(350),
        allowNull: false
    },
    image:{
        type: DataTypes.STRING(350),
        allowNull: true
    },
    only_for_kids:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false
    },
    active:{
        type:DataTypes.ENUM,
        values: ['active', 'inactive'],
        allowNull:true,
        defaultValue:"active"
    }
})


module.exports = slider
