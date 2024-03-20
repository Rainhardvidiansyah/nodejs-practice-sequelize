const {DataTypes} = require('sequelize')

const {sequelize} = require('../databaseconfig/sequelize.config')

const Genre = sequelize.define('genre', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

async function syncGenre (){
    try {
        const create = await Genre.sync({force: true});
    console.log("Table genre has been created successfully")
    } catch (error) {
        console.log(error)
    }   
}

module.exports = {Genre, syncGenre}