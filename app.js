const express = require('express')
const app = express();``
//----------------------------------------------------------------
const customer = require('./routes/customer.route')
const login = require('./routes/login.route');
const port = 5001;
// const {findActiveCustomer, findAllCustomer} = require('./controller/customercontroller')
app.use('/customer', customer)
app.use('/login', login)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
