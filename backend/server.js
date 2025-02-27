require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')
const morgan = require("morgan");
const middleware = require('./utils/middleware')
const cors = require("cors")
const PORT = 3001

// app.use(main)
app.use(cors());
app.use(express.static('dist'))
app.use(express.json())
app.use(morgan("dev"));


app.use(middleware.unknownEndpoint);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
