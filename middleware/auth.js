const moment = require('moment');
const {DecodeJwt} = require('../service/jwt');

const auth = async(req, res, next) => {
    try {
        let token = req.headers['authorization'].split(' ')
        token = token[token.length-1]
        console.log(token);
    if (token == undefined) {
        return res.status(401).json({status:false, message:'authorization',data:"" })
    }
    let dataToken = await DecodeJwt(token)
    
    next();
    }
    catch(error) {
        console.log('<<<<<<',error.message);
        if (error.message == 'jwt expired') {
            return res.status(401).json({status:false, message:'token expires',data:"" })
        }
        return res.status(500).json({status:false, message:'server error',data:"" })
    }
    

}

module.exports = auth;