var express = require('express')
var router = express.Router()
var auth = require('../middleware/auth')
const userAnime = require('../model/anime')
const uuid = require('uuid')

//Get Users
router.get('/', auth, async (req, res) => {
  let getDataTable = await userAnime.find({})
  res.status(200).json({ status: true, message: 'Get Data Table', data: {data: getDataTable}})
})

//Create Users
router.post('/', auth, async (req, res) => {
  let checkName = await userAnime.findOne({title: req.body.title})
  if (checkName != null) {
    return res.status(400).json({status:false, message:'Dulpicate Title',data: ""})
  }
  let insertUser = new userAnime({
    anime_ID: uuid.v4(),
    src: req.body.src,
    title: req.body.title,
    title_th: req.body.title_th,
    trailer: req.body.trailer,
  })
  await insertUser.save()
  return res.status(200).json({ status: true, message: 'Create Card Anime', data: '' })
})

//Delete user
router.delete('/:anime_ID', async(req, res) => {
  console.log(req.body);
  await userAnime.deleteOne({anime_ID:req.params.anime_ID})
  return res.status(200).json({status:true, message:'Delete data user',data:""})
})

module.exports = router
