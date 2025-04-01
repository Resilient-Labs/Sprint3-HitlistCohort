const {test, after} = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const {app} = require('../server' )
const  assert  = require('assert')

const api = supertest(app)

test.only('Contacts where fetched successfully', async () => {

        const res = await api.get('/contacts')

        assert.strictEqual(res.body.status, 200)
        assert.strictEqual(Array.isArray(res.body.data), true ) 
    })


after(async () => {
    await mongoose.connection.close()
})