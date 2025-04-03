const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const { app } = require('../server')

const  assert  = require('assert')

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

const updatedContact = {
  name: 'Name',
  role: 'Role',
  email: 'name@test.com',
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

test('update contact returns 200 and a json response', async () => {
  await api
    .updateContact('/contacts/507f1f77bcf86cd799439011', updatedContact)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    const newRes = await api.get('/contacts/507f1f77bcf86cd799439011')

    //console.log(newRes.body)

    assert.strictEqual(newRes.body.email, updatedContact.email)

  })

test('update contact sends 500 with wrong contact id', async () => {
    await api
        .put('/contacts/507f1f77bcf86cd799439010', updatedContact)
        .expect(404)
        .expect('Content-Type', /application\/json/)
})

after(async () => {
    await mongoose.connection.close()
})
