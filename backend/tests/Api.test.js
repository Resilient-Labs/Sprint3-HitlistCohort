import request from 'supertest';
import express from 'express'
import companiesRouter from '../routes/companies';

const app = express();
app.use(express.json());
app.use('/companies', companiesRouter)


describe('User Routes', () => {
    it('Should create a new company', async () => {

        const newCompany = {
            name: 'Google',
            status: 'Active',
            applicationUrl: 'https://techcorp.com/careers',
            notes: 'Looking to hire software engineers for new projects.',
            pointOfContacts: [
              mongoose.Types.ObjectId('60d5f9b35f28b24c58a1c5e0'),  
              mongoose.Types.ObjectId('60d5f9b35f28b24c58a1c5e1')   
            ],
            priority: 'High'  }

        const res = await request(app)
            .post('/companies')
            .send(newCompany )

        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('id')
        expect(res.body.name).toBe('Google')  
        expect(res.body.status).toBe('Active')  

    })
})

