const {Customer} = require('../model/customer.model')
const bcrypt = require('bcrypt')




//Insert 
//INSERT INTO customers (id, username, password, email, isActive, createdAt, updatedAt) 
//VALUES(0, '', '', '', 0, '', '');
const createCustomer = async (username, password, email, isActive) => {
    try {
        const customer = await Customer.create({
            username: username,
            password: password,
            email: email,
            isActive: isActive,
        })
        let customerToJSON = customer.toJSON();
        setTimeout(()=> {
        console.log(customerToJSON)
        }, 2500)
        console.log("Customer Data recorded to Database")
    } catch (error) {
        console.log(error)
    }
}

var password = "";
const findCustomerById = async(id) => {
    const customer = await Customer.findByPk(id)
    console.log(customer);
    comparePassword('reno', '$2b$10$U9Yv/RLFqH.EYpTeXPKtJe8F7A6NEQB0a4E1x88MsnIc/rvg7wQD6');
}


//COMPARE PASSWORD USING BCRYPT
const comparePassword = async(password, hashedPasswordFromDatabase) =>{
    const result = await bcrypt.compare(password, hashedPasswordFromDatabase);
    setTimeout(() => {
        console.log("IS THE PASSWORD MATCH: " + result)
    }, 3000)
}

//UPDATE customers SET customers.name = '' WHERE customers.id = ''
const updateCustomers = async (name, id) => {
    try {
        const updateCustomer = await Customer.update(
            {name: name},
            {where:
                {id: id}}
        )
        console.log("Customer Data recorded to Database")
    } catch (error) {
        console.log(error)
    }
}






module.exports = {createCustomer, findCustomerById, comparePassword}
