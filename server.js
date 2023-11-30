const express = require('express')
const app = express()
require('dotenv').config()

const PORT = 3000



app.get('/', function (req, res){
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is listening on port: ` + PORT)
})