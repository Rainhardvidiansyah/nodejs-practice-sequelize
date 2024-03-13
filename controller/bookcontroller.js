const { Op, where } = require('sequelize')
const { Book } = require('../model/book.model')


function log(some){
    console.log(some)
}

async function insertBook(title, writer, publisher){
try {
    const book = await Book.create({
        title: title,
        writer: writer,
        publisher: publisher
    })
    console.log("Book has succesfully been recorded into DB")
    console.log(`Book id is: {book.id}`)
    console.log(book)
} catch (error) {
    console.log(error)
}}

async function findAll(){
    try {
        const books = await Book.findAll()
        console.log(books)
        let result = Array.isArray(books);
        console.log(`Is array ->> ${result}`)
    } catch (error) {
        console.log(error)
    }
}


const findDataOrCreate = async (judul, writer) => {
    const [bookData, created] = await Book.findOrCreate({
        where:{
            writer: {
                [Op.like] : writer+'%'
            }
        ,title: {
            [Op.like] : judul+'%'
        }},
        default:{
            pusblisher: "Pustaka sohpia keren"
        }
    })
    // .spread((item, create)=>{console.log(item.get)})
    console.log(bookData)
    console.log(created)
}


async function findBookUsingWhereClause() {
  const books = await Book.findAll({
    where:{
        title:{
            [Op.like] : 'judul%'
        }
        }})
        // .then(title => console.log(title))
        // .catch(err => console.log(err))
        return books
}
    
//find by writer using where clause
const findByOneWriterUsingWhereClause = async (writer) =>{
    try {
        const writers = await Book.findOne({
        where:{ writer:{
                [Op.like]: writer+'%'}}
        });
    
        if(writers == null){
            log("Writers not found")
        }else{
            log("Writer's name is: " +writers.writer)
        }
    } catch (error) {
        console.log(error)
    }}

//Find By Primary Key or Id
const findByPk = async (id) => {
    try {
        const bookId = await Book.Book.findByPk(id)
        if(bookId === null){
            console.log("book doesn't exist!")
        }else{
            console.log(bookId)
            console.log("Penulis: " + bookId.writer) // result: Penulis: Rainhard Vidiansyah
        }
    } catch (error) {
        console.log(error)
    }}

//update data
const updateData = async (newName) => {
    try {
        const writerOldName = await Book.Book.create({writer: "Rainhard Vidiansyah"});
        writerOldName.writer = newName;
        await writerOldName.save({fields: [writerOldName.writer]})
        //{ fields: ['name'] }
    } catch (error) {
        console.log(error)
    }}

//UPDATE book SET book.name = '' where book.id =
//Transform mysql clause into javascript function 
async function updateWriterName(id, newWriterName){
    try {
        const updateWriterName = await Book.Book.update(
            {writer:newWriterName},
            {where:
                {id: id}}
        )
        let updatedWriterName = updateWriterName.writer
        //console.log(`Updated writer id: ${updateWriterName.id}`)
        console.log(`updated writer name: ${updatedWriterName}`)
    } catch (error) {
        console.log(error)
    }   
}

/**
 const jane = await User.create({ name: "Jane" });
// the user is currently named "Jane" in the database
jane.name = "Ada";
// the name is still "Jane" in the database
await jane.save();
 */

//select * from books b where publisher = 'value';
async function selectBookWherePublisher(publisherName){
    try {
        const publisher = await Book.findOne(
            {where:{
                publisher: {[Op.like]: publisherName + '%'}
                }});
        log(publisher) 
        } catch (error) {
            console.error(error)
        }
}

module.exports = {insertBook,
    findAll, findBookUsingWhereClause, 
    findByOneWriterUsingWhereClause, findByPk,
    updateData, updateWriterName, 
    // getDataByUsingFindOneAndPrintTheItem,
    findDataOrCreate, selectBookWherePublisher
}
