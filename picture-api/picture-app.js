const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const config = require('./config')

let port = process.env.PORT || 3001;

app.use(morgan('dev'))
app.use(bodyParser.json())

routes(app);

mongoose.Promise = global.Promise
mongoose.connect(config.database).then(()=>{
  console.log("connect success")
}).catch((e)=>{
  console.log(e)
})

app.listen(port, () => {
  console.log('listen on port :' + port)
})
