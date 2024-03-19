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

//Finda All Customer
//SELECT * FROM customer;
const findAllCustomer = async () => {
    try {
        const customers = await Customer.findAll();
        console.log("customers data just been retrieved");
        return customers;
    } catch (error) {
        console.log(error);
}}


//Find customers by email address
//SELECT email FROM customers WHERE email = ' value';

const findCustomerByEmail = async(email) => {
    const customer = await Customer.findOne({
        where: {
            email: email
        }
    })
    console.log(customer);
}

//Find customer by id
//SELECT * FROM customer WHERE customer.id = 1;
const findCustomerById = async(id) => {
    const customer = await Customer.findByPk(id)
    console.log(customer);
    return customer;
    //comparePassword(customer.password, customer.password)
}

//COMPARE PASSWORD USING BCRYPT
const comparePassword = async(password, hashedPasswordFromDatabase) =>{
    const result = await bcrypt.compare(password, hashedPasswordFromDatabase);
    if(result){
        console.log(true)
    }else{
        console.log(false)
    }
    setTimeout(() => {
        console.log("IS THE PASSWORD MATCH: " + result)
    }, 3000)
}

//update customer
//UPDATE customers SET customers.name = '' WHERE customers.id = id
const updateCustomer = async (name, id) => {
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


//update customer password
//UPDATE customers SET password = 'newpassword' WHERE id = id
const updateCustomerPassword = async (id, password) => {
    try {
        const customer = await Customer.update(
            {password: password},
            {where:
                {id: id}}
        )
        console.log("Password has changed")
    } catch (error) {
        console.log(error)
    }
}

//SELECT * FROM customer WHERE isActive = 1;
const findActiveCustomer = async () => {
    const activeCustomer = await Customer.findAll({
        where:{
            isActive: 1
        }
    })
    // console.log(activeCustomer)
    return activeCustomer
}

//Get all customers by  username and that is active customer 
//SELECT username FROM customers WHERE isActive = 1

const findUsernameByActiveCustomer = async () =>{
    const customers = await Customer.findAll({
        where:{
            isActive: 1
        }
    })
    let userName = []
    customers.forEach((item, index) => {
        userName.push((index+1) +". " +item.username + " isActive= " + item.isActive)
    });
    for(i = 0; i < customers.length; i++) {
    console.log(userName[i])
    }
}


module.exports = {
    createCustomer, findCustomerById, updateCustomer, 
    updateCustomerPassword, findActiveCustomer,
    findUsernameByActiveCustomer, findCustomerByEmail,
    findAllCustomer
}
