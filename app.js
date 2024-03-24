const express = require('express')
const app = express();
const morgan = require('morgan');
//----------------------------------------------------------------
const customer = require('./routes/customer.route')
const book = require('./routes/book.route')
const login = require('./routes/login.route');
const articleReviewRoute = require('./routes/articlereview.route');
require('dotenv').config();

//----------------------------------------------------------------
const bc = require('./controller/bookcontroller')
//title, description, price, academicTitle, firstName, lastName
// bc.insertBook("Scam is dangerous", "Good Book", "20000.00", "", "Rainhard", "vidiansyah")
// bc.findAllBook();
// bc.findBookById(10)

class Execute{
  constructor(){
    this.start();
  }

  start(){
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('tiny'))

    app.use('/api/v1/customer', customer)
    app.use('/api/v1/login', login)
    app.use('/api/v1/article_review', articleReviewRoute)
    app.use('/api/v1/book', book)

    app.use('/', (req, res, next) => {
      res.status(404).json({
        message: 'Not Found Anythinghere'
      })
      next()
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is running`)
    })
  }
}

new Execute();








// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
