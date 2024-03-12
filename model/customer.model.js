const { DataTypes } = require('sequelize')
const sequelize = require('../databaseconfig/sequelize.config')
const queryInterface = sequelize.sequelize.getQueryInterface()
//const queryInterface = sequelize.getQueryInterface()

const customerTable = sequelize.sequelize
.define('customers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

const modifyColum = queryInterface.changeColumn('customers', 'isActive', {
    type: DataTypes.BOOLEAN,
    allowNull: false
  });


async function customerSync(){
    const create = await customerTable.sync()
    console.log("Customers table has been created successfully!")
}

module.exports = {customerSync, modifyColum}









// // const Customers = sequelize.sequelize.define('customers',{

// // })


// //insert into customers (id, username, password, email) value(0, '', '', '')