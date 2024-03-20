// const http = require('https')
// const axios = require('axios');
// const {findCustomerByEmail} = require('../controller/customercontroller')
// const bcrypt = require('bcrypt');
// const { hostname } = require('os');

// const port = 5001;

//  //http://localhost:5001/
// const url = 'http://localhost:5001/login'

// const User = {
//     email:'',
//     password:''
// }

// const server = http.createServer((req, res) => {
//     if(req === 'POST'){
//         let data = '';
//         req.on('data', (chunk) => {
//             data += chunk;
//         });
//         req.on('end', () => {
//             axios.post(url, User)
//             .then(response => {
//                 res.writeHead(200, {'Content-Type': 'application/json'});
//                 res.end(JSON.stringify(response.data));
//             })
//             .catch(error => {
//                 res.writeHead(500, {'Content-Type': 'text/plain'});
//                 res.end('Terjadi kesalahan dalam permintaan ke server lain');
//             });
//         });
//     }else{
//         res.writeHead(405, {'Content-Type': 'text/plain'});
//         res.end('Metode yang diperbolehkan hanya POST');
//     }
// })

// // const postData = axios.post({ url,
// //     data:{email: email, password: password}
// // })
// // .then(response => console.log(response))
// // .catch(error => console.log(error))

// //create post request method like user login
// //parameters email dan password
// //first conditon: email must be same as saved in database
// //second conditon: password must be same as saved in database
// //if second condition is true then create a console to say: "Hi You just logged in"


// const comparePassword = async (password, hashedPassword) => {
//     const result = await bcrypt.compare(password, hashedPassword)
//     if(!result) throw errors.InvalidPassword;
//     return result;
// }

// module.exports ={listen: server.listen(port, 'localhost', () => {console.log("oke")})};