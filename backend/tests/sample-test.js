const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, server} = require('../server')

const api = supertest(app)

test('companies are returned as json', async () => {
  await api
    .get('/companies/all-contacts')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})


after(async () => {
  console.log("Closing database connection and server...")
  await mongoose.connection.close()
  if (server) {
      server.close(() => {
          console.log("Server closed.");
      });
  }
})