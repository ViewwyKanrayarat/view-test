var jwt = require('jsonwebtoken');

const EncodeJwt = async (payload) => {
    var token = jwt.sign(payload, 'secret',{expiresIn:'1h'});
    return token;
};

const DecodeJwt = async (token) => {
    var decoded = jwt.verify(token, 'secret');
    return decoded;
};

module.exports = {
    EncodeJwt,
    DecodeJwt,
    
};