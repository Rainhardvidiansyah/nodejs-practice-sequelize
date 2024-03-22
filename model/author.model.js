const {DataTypes} = require('sequelize');
const sequelize = require('../databaseconfig/sequelize.config');

const Aurhor = sequelize.defines('author', {
    academicTitle: {
        type: DataTypes.string,
        allowNull: true
    },
    firstName :{
        data: DataTypes.STRING,
        allowNull: false,
    },
    lastName :{
        data: DataTypes.STRING,
        allowNull: false,
    }
})

const authorSync = async () => {
    await Aurhor.sync();
}

module.exports = authorSync