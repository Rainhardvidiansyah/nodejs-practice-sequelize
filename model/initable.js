const {articlereviewSync} = require('./article.review')

module.exports ={
up: async () => {
    const test = Promise.all([articlereviewSync()])
    return test;
}}