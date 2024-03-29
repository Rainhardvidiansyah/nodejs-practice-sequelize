const jwt = require('jsonwebtoken');
require('dotenv').config();

const {FindOneBlacklistToken} = require('../model/blacklist-token.model')

async function authorization(req, res, next){

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token tidak ditemukan.' });
    }

   const BlackListToken = await FindOneBlacklistToken(token)
    if(BlackListToken) {
       return res.status(403).json({"Message": "You are logged out"})
    }

    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token tidak valid.' });
        }
        req.id = decoded.id;
        req.email=decoded.email;
        
        next();
    });
}

module.exports = authorization;