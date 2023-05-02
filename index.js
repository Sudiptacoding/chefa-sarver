var express = require('express')
require('dotenv').config()
var bodyParser = require('body-parser')
var cors = require('cors')
const list = require('./Fakedata/Fakedata')
var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
PORT = process.env.PORT

app.get('/', function (req, res) {
    try {
        if (list) {
            res.status(200).send(list)
        } res.status(404).send("Your data is not found")
    } catch (error) {
        res.status(502).send(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`https://localhost run ${PORT}`)
})