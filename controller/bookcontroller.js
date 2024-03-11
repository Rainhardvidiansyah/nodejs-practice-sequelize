const { Op } = require('sequelize')
const Book = require('../model/book.model')

async function insertBook(){
try {
    const book = await Book.Book.create({
        title: "judul 1",
        writer: "Rainhard Vidiansyah",
        publisher: "Pustaka Sophia"
    })
    console.log("Book has succesfully been recorded into DB")
    console.log(`Book id is: {book.id}`)
    console.log(book)
} catch (error) {
    console.log(error)
}
}

async function findAll(){
    try {
        const allBooks = await Book.Book.findAll();
        console.log(allBooks)
        let result = Array.isArray(allBooks);
        console.log(`Is array ->> ${result}`)
    } catch (error) {
        console.log(error)
    }
}


async function findBookUsingWhereClause() {
  const findAllWithWhere = await Book.Book.findAll({
    where:{
        title:{
            [Op.like] : 'judul%'
        }
        }})
        // .then(title => console.log(title))
        // .catch(err => console.log(err))
        return findAllWithWhere
}
    


module.exports = {findAll, findBookUsingWhereClause}
