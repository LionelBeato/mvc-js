// imports and declarations 
const express = require('express')
const Mouse = require('./model')
const app = express()
const port = 8080
const cors = require('cors')

let mickey = new Mouse('Mickey')

//using cors config with express
app.use(cors())

// get function on my root directory
app.get('/', function (req, res) {
    res.send(mickey)
})

// "turning on" the server using the listen function
app.listen(port, function(){
    console.log(`server is listening on port ${port}`)
})