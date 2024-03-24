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
        this.route.put('/update/(:id)', this.updateBook)
    }

    async postBook(req, res){
        try {
        const {title, description, price, academicTitle, firstName, lastName} = req.body;
        const book = await bookController.insertBook(title, description, price, academicTitle, firstName, lastName);
        res.status(201).json({message: "Book created successfully", data: book});
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
            res.status(404)
            .json({ message: "Book not found"})}
            res.status(200).json(book)}
        ).catch(errors => console.log(errors))
        } catch (error) {
            throw new Error("Error: " + error)
        }}
    
    async updateBook(req, res, next){
        try{
            const {title, description, price} = req.body;
            const id = req.params.id;
            const bookId = await bookController.findBookById(id);
            if(bookId == null){
               return res.status(404).json({
                    message: "Book not found!"})
                }
            const book = await bookController.updateBook(id, title, description, price)
            res.status(200).
            json({message: "Success", data: [book]})
            
        } catch (error) {
            res.status(500).json(error.message);
        }}


}

module.exports = new BookRoute().route;