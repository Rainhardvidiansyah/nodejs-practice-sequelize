const express = require('express');
const router = express.Router();
const {findAllCustomer} = require('../controller/customercontroller');


class Customer  {
    contructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
router.get('/all', async (req, res) => {
    const oneCustomer = []
    const customer = await findAllCustomer();
    // const username = customer.username;
    // const email = customer.email;
    // customer = new Customer(username, email)
    customer.forEach(item => {
        oneCustomer.push(item.username);
    })
    // oneCustomer.push(customer)
    res.send(oneCustomer)
})

module.exports = router;