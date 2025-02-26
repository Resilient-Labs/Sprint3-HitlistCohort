require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

app.use(express.static('dist'))
app.use(main)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
