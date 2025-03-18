require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')
const companiesRouter = require('./routes/companies')
const usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const cors = require('cors')
const PORT = process.env.PORT || 3001

// must stay here in order to load before making api requests (do not move)
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))
app.use(express.static('dist'))
app.use(express.json())

app.use('/companies', companiesRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)

//must go after routes or it will block them
app.use(main)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
