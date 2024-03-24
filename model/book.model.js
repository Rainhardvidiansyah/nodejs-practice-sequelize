const {DataTypes} = require('sequelize')
const {sequelize} = require('../databaseconfig/sequelize.config');
const {Author} = require('./author.model');

const Book = sequelize.define('book',{
  title:{
    type: DataTypes.STRING,
    allowNull: false
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false
  },
  price:{
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
})

Author.hasMany(Book, {
  foreignKey: 'author_id',
  });
Book.belongsTo(Author, {
  foreignKey: 'author_id'
})
// Book.belongsTo(Author);


async function syncBook(){
  await Book.sync({alter:true})
  console.log("Book table just created")
}

module.exports = {Book, syncBook}