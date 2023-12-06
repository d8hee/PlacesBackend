require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require("cors")

const PORT = process.env.PORT || 3000

// MIDDLEWARE for processing request and sending response
// *POST and PUT request objects*
// .json() recognizes req object as JSON object
app.use(express.json())
// .urlencoded() recognizes req object as strings or arrays
app.use(express.urlencoded({ extended: true }))
app.use(cors())



// ---------------MODELS---------------
// requiring obj from models module
const models = require('./app/models')
const builder = require('./app/models/builder')

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
    try {
        // create a builder w post method + using required builder model
        // create: creates an object that represents data which can be mapped to db, and saves instance to database 
        console.log("posting builders")
        res.json(await models.builder.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

app.post('/places/projects', async (req, res) => {
    try {
        console.log("posting projects")
        res.json(await models.project.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

app.post('/places/listings', async (req, res) => {
    try {
        res.json(await models.listing.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

// UPDATE 
app.put('/places/builders/:id', async (req, res) => {
    // console.log(req.body) { id: 4, username: 'testuser4', email: 'testing4@123.com' }
    try {
        // use object passed in params w Sequelize update method
        // get the id in params, and where the obj has id of builderId, update reqbody
        const builderId = req.params.id
        const updated = await models.builder.update(req.body, { where: { id: builderId } })
        // fetch response w updated data
        if (updated) {
            const updatedBuider = await models.builder.findOne({ where: { id: builderId } })
            res.status(200).json({ builder: updatedBuider })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

app.put('/places/projects/:id', async (req, res) => {
    try {
        const projectId = req.params.id
        const updated = await models.project.update(req.body, { where: { id: projectId } })
        if (updated) {
            const updatedProject = await models.project.findOne({ where: { id: projectId } })
            res.json({ project: updatedProject })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

app.put('/places/listings/:id', async (req, res) => {
    try {
        const listingId = req.params.id
        const updated = await models.listing.update(req.body, { where: { id: listingId } })
        if (updated) {
            const updatedListing = await models.listing.findOne({ where: { id: listingId } })
            res.json({ listing: updatedListing })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

// DELETE
// builder id 2 is still referenced from table projects...
app.delete('/places/builders/:id', async (req, res) => {
    try {
        const builderId = req.params.id
        const deleted = await models.builder.destroy({ where: { id: builderId } })
        // res.send("deleted")
        if (deleted) {
            const deletedBuilder = await models.builder.findOne({ where: { id: builderId } })
            res.json({ builder: deletedBuilder })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

app.delete('/places/projects/:id', async (req, res) => {
    try {
        const projectId = req.params.id
        const deleted = await models.project.destroy({ where: { id: projectId } })
        // res.send("deleted")
        if (deleted) {
            const deletedProject = await models.project.findOne({ where: { id: projectId } })
            res.json({ project: deletedProject })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

app.delete('/places/listings/:id', async (req, res) => {
    try {
        const listingId = req.params.id
        const deleted = await models.listing.destroy({ where: { id: listingId } })
        if (deleted) {
            const deletedListing = await models.listing.findOne({ where: { id: listingId } })
            res.json({ listing: deletedListing })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ` + PORT)
})

