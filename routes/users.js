var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth')
const userData = require('../model/user')
const uuid = require('uuid')


//Get Users
router.get('/', auth , async (req, res) => {
  let getDataTable = await userData.find({})
  res.status(200).json({status:true, message:'Get Data Table',data: {data: getDataTable}})
});

//Create Users
router.post('/', auth , async (req, res) => {
  console.log(req.body);
  // check ว่า user email มีหรือไม่
  let checkName = await userData.findOne({username: req.body.username})
  console.log('checkName',checkName);
  if (checkName != null) {
    return res.status(400).json({status:false, message:'Dulpicate Name',data: ""})
  }
  let insertUser = new userData({
    userID: uuid.v4(),
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    programing_skill: req.body.programing_skill,
  })
  await insertUser.save()
  return res.status(200).json({status:true, message:'Create Data Table',data: ""})
})

//Update Users
router.put('/:userID', auth ,async(req, res) => {
  console.log(req.body);
  let dataUpdate = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    programing_skill: req.body.programing_skill,
  }
  await userData.updateOne({userID:req.params.userID},{$set:dataUpdate})
  return res.status(200).json({status:true, message:'Update data user',data: ""})
})

//Delete user
router.delete('/:userID', async(req, res) => {
  console.log(req.body);
  await userData.deleteOne({userID:req.params.userID})
  return res.status(200).json({status:true, message:'Delete data user',data:""})
})


module.exports = router;
