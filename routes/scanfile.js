var express = require('express')
var router = express.Router()
// รับค่าเป็น flie ได้
const formData = require('express-form-data')
var fs = require('fs')
var {sendAi} = require('../service/ai')

/* GET home page. */
router.post('/', formData.parse(), async function (req, res, next) {
  let image = req.files.image.path
//   let type = req.files.image.type
//   let filename = req.files.image.name
//    แปลงไฟล์ => base64 
  let base64img = await fs.promises.readFile(image, 'base64');
  let resAi = await sendAi(base64img)
//   console.log(resAi.data);
  res.status(200).json({ status: true, message: 'Get Data Table', data: resAi.data})
  
})

module.exports = router
