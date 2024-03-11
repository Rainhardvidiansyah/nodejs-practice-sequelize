const bookController = require('./controller/bookcontroller')
function log(some){
    console.log(some)
}
// insertBookToDB.insertBook()
// bookController.findAll()


bookController.findBookUsingWhereClause().then(a => console.log(a))

