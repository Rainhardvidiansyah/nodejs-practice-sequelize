const {DataTypes} = require('sequelize');
const {sequelize} = require('../databaseconfig/sequelize.config');

const Author = sequelize.define('author', {
    academicTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    firstName :{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName :{
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {sequelize, modelName: 'author'}
)

const authorSync = async () => {
    await Author.sync();
}

module.exports = {Author, authorSync}