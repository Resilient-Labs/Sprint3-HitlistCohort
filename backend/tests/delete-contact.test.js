const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const { app } = require('../server')

const api = supertest(app)

const Contacts = require('../models/contact.schema')

const initialContact = {
    name: 'Name',
    role: 'Role',
    email: 'email@test.com',
    linkedIn: 'www.linkedin.com/test',
    company: '507f1f77bcf86cd799439000',
    lastContactDate: '03-26-2025',
    _id: '507f1f77bcf86cd799439011',
}

beforeEach(async () => {
    await Contacts.deleteMany({})
    let contactsObject = new Contacts(initialContact)
    await contactsObject.save()
})

test('delete contact returns 200 and a json response', async () => {
    await api
        .delete('/contacts/507f1f77bcf86cd799439011')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

// test.only('delete contact sends 400 with no contact id', async () => {
//     await api
//         .delete('/contacts')
//         .expect(400)
//         .expect('Content-Type', /application\/json/)
// })

test('delete contact sends 500 with wrong contact id', async () => {
    await api
        .delete('/contacts/507f1f77bcf86cd799439010')
        .expect(404)
        .expect('Content-Type', /application\/json/)
})

after(async () => {
    await mongoose.connection.close()
})
