const { DataTypes } = require('sequelize');
const {sequelize} = require('../databaseconfig/sequelize.config');

const Employee = sequelize.define('employee', {
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true
  }
)

const createTableEmployeesSync = async () => {
    const createTable = await Employee.sync({alter: true});
    console.log("Employee table just created successfully")
}

module.exports = {createTableEmployeesSync}