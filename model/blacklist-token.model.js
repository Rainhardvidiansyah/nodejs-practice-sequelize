const {sequelize} = require('../databaseconfig/sequelize.config')
const {DataTypes} = require('sequelize')

const BlackListToken = sequelize.define('blacklisttoken', {
    token: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'blacklisttoken'
})



const blackListTokenSync = () => {
    console.log('blackListToken table just altered');
    return BlackListToken.sync({alter: true});
}

const SaveBlaclistToken = async (token) => {
    const savedToken = await BlackListToken.create({
        token:token
    });
    return savedToken;
}

const FindOneBlacklistToken = async (token) => {
   const oneToken = await BlackListToken.findOne({where: {token}})
   return oneToken;
}


module.exports = {BlackListToken, blackListTokenSync, SaveBlaclistToken, FindOneBlacklistToken};