const bookcontroller = require('../controller/bookcontroller');
const bookController = require('../controller/bookcontroller')

class BookMiddleware{
    constructor(){}

    async saveBook(req, res, next){
        const {title, description, price, firstName, lastName} = req.body;
        if(!title ||!description ||!price ||!firstName ||!lastName){
            return res.status(400).json({
                message: "Title, description, price, first name, and last name are required!"
            })
        }
        try {
            const book = await bookcontroller.insertBook(title, description, price, '', firstName, lastName);
             req.book = book;
            next();
        } catch (error) {
            return res.status(500).json(error.message);
        }
      
    }

    async findId(req, res, next) {
        const id = req.params.id;
        const book = await bookController.findBookById(id);
        if(!book) return res.status(404).json({message : "Book not found halooooo"})
        req.book = book;
        next()
    }

    async findall(req, res, next) {
        try {
            const allBook = await bookController.findAllBook();
            req.book = allBook;
            // return res.status(200).json({message: "oke", allBook});
            next();
        } catch (error) {
            
        }
    }
}


module.exports = new BookMiddleware();


