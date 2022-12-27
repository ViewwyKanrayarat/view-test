const mongoose = require('mongoose')

try {
  var url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?authSource=admin`
  // console.log("url ---",url);
  // var url = `mongodb://admin:Mongodb01!@203.150.143.70:27017/ATK?authSource=admin`;
  var option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
  mongoose.set('strictQuery', false)
  mongoose.connect(url, option)
  mongoose.connection.on('connected', function () {
    console.log('DB Connection')
    console.log(url)
  })
  mongoose.connection.on('error', function (err) {
    console.log('DB Connection error: ' + err)
  })
} catch (error) {
  console.log(error)
}
