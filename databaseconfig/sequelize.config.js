const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, process.env.USER, process.env.PASSWORD,
    {host: process.env.HOST, dialect: process.env.DIALECT}
    )

async function authenticate(){
    try {
        await sequelize.authenticate()
        console.log("Database connected!")
    } catch (error) {
        console.log("You're facing an error")
    }
}
    

module.exports = {sequelize, authenticate}
