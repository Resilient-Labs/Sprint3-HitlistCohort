require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')
const companiesRouter = require('./routes/companies')
const authenticationRouter = require('./routes/authentication')
const contactsRouter = require('./routes/contacts')
const cors = require('cors')
const PORT = process.env.PORT || 3001

// must stay here in order to load before making api requests (do not move)
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))
app.use(express.static('dist'))
app.use(express.json())

app.use('/contacts', contactsRouter)
app.use('/companies', companiesRouter)
app.use('/', authenticationRouter)

//must go after routes or it will block them
app.use(main)



if (process.env.NODE_ENV !== 'test') {
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = {app}