const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookcontroller');


class BookRoute{
    constructor(){
        this.route = router;
        this.initRoute();
    }

    initRoute(){
        this.route.post('/create', this.postBook);
        this.route.get('/all', this.getAllBook);
        this.route.get('/:id', this.getBookById)
    }

    async postBook(req, res){
        try {
        const {title, description, price, academicTitle, firstName, lastName} = req.body;
        const book = await bookController.insertBook(title, description, price, academicTitle, firstName, lastName);
        // const bookId = await bookController.findBookById(book.id);
        // console.log(bookId); use it later. in case you need to verify the book in database!
        res.status(201).json({title, description, price, academicTitle, firstName, lastName});
        } catch (error) {
            res.status(500).json(error.message);
        }}


    async getAllBook(req, res){
        try {
           const allBooks = await bookController.findAllBook();
           if(allBooks == null){
            res.status(404).json({ 
                message: "Book not found"})
            }else{
                res.status(200).json(allBooks)
            } 
        } catch (error) {
            throw new Error("Error: " + error)
        }}

    async getBookById(req, res){
        try {
        const id = req.params.id;
        await bookController.findBookById(id).then((book) => {
            if(book == null){
            res.status(404).json({ message: "Book not found"})}
                res.status(200).json(book)}
        ).catch(errors => console.log(errors))
        } catch (error) {
            throw new Error("Error: " + error)
        }}


}

module.exports = new BookRoute().route;