const { DataTypes } = require('sequelize')
const { sequelize } = require('../databaseconfig/sequelize.config')
const queryInterface = sequelize.getQueryInterface()
const bcrypt = require('bcrypt')
//const queryInterface = sequelize.getQueryInterface()

const Customer = sequelize
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
        allowNull: false,  
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

Customer.beforeSave(async (user, options) =>{
    if(user.changed('password')){
        const hashedPassword = await bcrypt.hash(user.password, 10)
        user.password = hashedPassword;
    }
})


// const modifyColum = queryInterface.changeColumn('customers', 'isActive', {
//     type: DataTypes.BOOLEAN,
//     allowNull: false
//   });


async function customerSync(){
    const create = await Customer.sync({alter:true})
    console.log("Customers table has been created successfully!")
}

// module.exports = {customerSync, Customer}
module.exports =  {Customer, customerSync}
