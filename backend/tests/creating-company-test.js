const {test, after} = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const {app} = require('../server' )

const  assert  = require('assert')

const api = supertest(app)


test.only('Company was added successfully', async () => {

    const newCompany =       
        {
            name: "OpenAI",
            status: "Applied",
            applicationUrl: "https://careers.openai.com",
            notes: "Submitted application on March 1st, awaiting response.",
            pointOfContacts: ["660df1c1b3b4f04f4f8a1e2a"], // Example ObjectId (FAKE)
            priority: "High"
        }
            
        const res = await api.get('/companies')
        
        const oldLen = res.body.length
        
        await api
        .post('/companies')
        .send(newCompany)
        .expect(201)
        
        
        const newRes = await api.get('/companies')

        
        const newLen = newRes.body.length
        
       
        assert.strictEqual(oldLen + 1,newLen)
        
    })


after(async () => {
    console.log("Closing database connection and server...")
    await mongoose.connection.close()
})