require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

// MIDDLEWARE for processing request and sending response
// *POST and PUT request objects*
// .json() recognizes req object as JSON object
app.use(express.json())
// .urlencoded() recognizes req object as strings or arrays
app.use(express.urlencoded({ extended: true }))

// ---------------MODELS---------------
// requiring obj from models module
const models = require('./app/models')

// INDEX ROUTES
app.get('/places/builders', async (req, res) => {
    res.json(await models.builder.findAll())
})

app.get('/places/projects', async (req, res) => {
    res.json(await models.project.findAll())
})

app.get('/places/listings', async (req, res) => {
    res.json(await models.listing.findAll())
})

// SHOW ROUTES
app.get('/places/builders/:id', async (req, res) => {
    res.json(await models.builder.findByPk(req.params.id))
}) 

app.get('/places/projects/:id', async (req, res) => {
    res.json(await models.project.findByPk(req.params.id))
})

app.get('/places/listings/:id', async (req, res) => {
    res.json(await models.listing.findByPk(req.params.id))
})

// CREATE ROUTES
app.post('/places/builders', async (req, res) => {
    try{
        // create a builder w post method + using required builder model
        // create: creates an object that represents data which can be mapped to db, and saves instance to database 
        console.log("posting builders")
        res.json( await models.builder.create(req.body))
    } catch (err){
        res.status(400).json(err)
    }
})

app.post('/places/projects', async (req, res) => {
    try{
        console.log("posting projects")
        res.json( await models.project.create(req.body))
    } catch (err){
        res.status(400).json(err)
    }
})

app.post('/places/listings', async (req, res) => {
    try{
        res.json( await models.listing.create(req.body))
    } catch (err){
        res.status(400).json(err)
    }
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ` + PORT)
})