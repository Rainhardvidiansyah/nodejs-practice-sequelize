const {articlereviewSync} = require('./article.review')
const {authorSync} = require('../model/author.model')
const {syncBook} = require('../model/book.model')

module.exports ={
up: async () => {
    const syncAll = Promise.all([articlereviewSync(), authorSync(), syncBook()])
    return syncAll;;
}}