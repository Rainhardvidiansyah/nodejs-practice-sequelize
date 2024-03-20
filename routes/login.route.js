const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send("halo")
})

router.get('/api/users', (req, res)=>{
    console.log("GET /api/users just hit")
    console.log("ada")
    res.send("halo api user")
})

module.exports = router;