const {DataTypes} = require('sequelize')
const {sequelize} = require('../databaseconfig/sequelize.config');


const ArticleReview = sequelize.define('articlereview', {
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: false,
    unique: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'articlereview'
})



module.exports = {
    articlereviewSync: async () => {
        try {
            await ArticleReview.sync();
            console.log("ArticleReview table just created")
        } catch (error) {
            console.log("there's an error occuring")
        }},
        ArticleReview
    }