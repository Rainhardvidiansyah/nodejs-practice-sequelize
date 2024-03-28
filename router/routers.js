const express = require('express');;
const router = express.Router();

//___________________
const customerRoute = require('../routes/customer.route');
const bookRoute = require('../routes/book.route')
const bookMiddleware = require('../middlewares/book.middleware')
const authMiddleware = require('../middlewares/authverification')

    //CUSTOMER
    router.post('/customer/registration', customerRoute.Registration)
    router.post('/customer/login', customerRoute.Login);
    router.get('/customer/refresh-token', customerRoute.RefreshToken)
    router.delete('/customer/logout', customerRoute.LogOut)


    //BOOK
    router.get('/book/all', authMiddleware, bookMiddleware.findall, bookRoute.getAllBook);
    router.get('/book/:id', authMiddleware, bookMiddleware.findId, bookRoute.getBookById);
    router.post('/book/save', bookMiddleware.saveBook, bookRoute.postBook);

    
    
    




module.exports = router;