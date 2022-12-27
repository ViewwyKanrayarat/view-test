var express = require('express');
var router = express.Router();
const userData = require('../model/user')
const {EncodeJwt} = require('../service/jwt')

router.post('/', async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let login = await userData.findOne({username: username,password: password})
    // login fail
    if (login === null) {
        return res.status(401).json({status:false, message:'login fail',data:"" })
    }
    // login success 
    let payload = await EncodeJwt({username:login.username,userID:login.userID})
    return res.status(200).json({status:true, message:'login success',data: {token:payload}})
    
});

module.exports = router;