const { Op } = require('sequelize')
const { Book } = require('../model/book.model')
const {Author} = require('../model/author.model')

//academicTitle, firstName, lastName


function log(some){
    console.log(some)
}

//title, description, price, 
//FK author_id
//how to author_id

class BookController{
    constructor(){
    }

    async insertBook(title, description, price, academicTitle, firstName, lastName){
        try {
            const author = await Author.findOne({
                limit: 3,
                where:{
                    [Op.and]: [
                        {firstName: {[Op.like]: '%' + firstName + '%' }},
                        {lastName: {[Op.like]: '%' + lastName + '%' }}
                    ]
                }}) ?? await Author.create(
                    {
                        academicTitle: academicTitle,
                        firstName: firstName,
                        lastName: lastName
                    })
                const book = await Book.create({
                    title: title,
                    description: description,
                    price: price,
                    author_id: author.id
                })
                return book;
        } catch (error) {
            console.error(error.message);
        }}
       
        
        async findAllBook(){
            try {
                const books = await Book.findAll({
                    attributes: {exclude: ["author_id"]},
                    include: [{
                        model: Author,
                        attributes: ["id", "firstName", "lastName"]
                    }]
                    })
                console.log("Get all books is complete")
                return books;
            } catch (error) {
                console.log(error)
            }
        }
        
        async findBookUsingWhereClause() {
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
        
        //Find By Primary Key or Id
        async findBookById(id) {
            try {
                const bookId = await Book.findByPk(id, {
                    attributes: {exclude: ["author_id"]},
                    include: [{
                        model: Author,
                        attributes: ["id","firstName", "lastName"]
                    }],
                })
                    
                if(bookId == null){
                    console.log("book doesn't exist!")
                }
                // const {author_id, ...rest} = bookId
                // console.log(rest)
                // return rest;
                //console.log("Book id exists!");
                //return bookId;
                return bookId;
                
            } catch (error) {
                console.log(error)
            }}
        
        //update data
        async updateData (newName) {
           }
        
        //UPDATE book SET book.name = '' where book.id =
        //Transform mysql clause into javascript function 
        async updateWriterName(id, newWriterName){
            try {
                const updateWriterName = await Book.update(
                    {writer:newWriterName},
                    {where:
                        {id: id}}
                )
                let updatedWriterName = updateWriterName.writer
                console.log(`updated writer name: ${updatedWriterName}`)
            } catch (error) {
                console.log(error)
            }}

        async selectBookWherePublisher(publisherName){
            try {
                const publisher = await Book.findOne(
                    {where:{
                        publisher: {[Op.like]: publisherName + '%'}
                        }});
                log(publisher) 
                } catch (error) {
                    console.error(error)
                }}
    }




module.exports = new BookController()
