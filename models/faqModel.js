const{sequelize,DataTypes}  = require('../connection')

const faq = sequelize.define('faq',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING(350),
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: false,
        defaultValue: '1'
    },
})

module.exports = faq