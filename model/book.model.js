const {DataTypes} = require('sequelize')
const {sequelize} = require('../databaseconfig/sequelize.config')

const Book = sequelize.define('book',{
  title:{
    type: DataTypes.STRING,
    allowNull: false
  },
  writer:{
    type: DataTypes.STRING,
    allowNull: false
  },
  publisher:{
    type: DataTypes.STRING,
    allowNul : false
  }
})

async function syncBook(){
  await Book.sync()
  console.log("Book table just created")
}

module.exports = {Book, syncBook}