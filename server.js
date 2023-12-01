require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

// middleware for processing request and sending response
// *POST and PUT request objects*
// .json() recognizes req object as JSON object
app.use(express.json())
// .uslencoded() recognizes req object as strings or arrays
app.use(express.urlencoded({extended:true}))

app.get('/', function (req, res){
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ` + PORT)
})