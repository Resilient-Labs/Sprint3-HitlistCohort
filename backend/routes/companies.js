const companiesRouter = require('express').Router()
const Company = require('../models/company.schema')

//***** GET COMPANY INFO*****
companiesRouter.get('/', async (req, res) => {
    try {
        await Company.find({}).then((company) => {
            res.json(company)
        })
    } catch (error) {
        console.error('Error getting companies', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** EDIT COMPANY INFO *****
companiesRouter.put('/:id', async (req, res) => {
    try {
        const ID = req.params.id
        if (!ID) {
            return res.status(400).json({ message: 'Id is needed' })
        }
        const body = req.body
        const companyInfo = {
            name: body.name,
            status: body.status,
            applicationUrl: body.applicationUrl,
            notes: body.notes,
            pointOfContacts: body.pointOfContacts,
        }
        Company.findByIdAndUpdate(ID, companyInfo, { new: true }).then(
            (updatedCompnayInfo) => {
                res.json(updatedCompnayInfo)
            },
        )
    } catch (error) {
        console.error('Error Editing compnay info')
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** ADD COMPANY *****
companiesRouter.post('/', async (req, res) => {
    try {
        const { name, status, applicationUrl, notes, pointOfContact } = req.body

        const newCompany = new Company({
            name,
            status,
            applicationUrl,
            notes,
            pointOfContact,
        })
        await newCompany.save()

        console.log('Company saved:', newCompany)
        res.status(201).json(newCompany)
    } catch (error) {
        console.error('Error saving company', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** DELETE COMPANY *****
companiesRouter.delete('/companies/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id)

        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' })
        }

        res.json({ message: 'Company Deleted', deletedCompany })
    } catch (error) {
        console.error('Error deleting company:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// get by id
companiesRouter.get('/:id', async (req, res) => {
    try {
        const companyId = req.params.id
        const company = await Company.findById(companyId)

        if (!company) {
            return res.status(404).json({ message: 'Company not found' })
        }

        res.json(company)
    } catch (error) {
        console.error('Error fetching company by ID', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** GET ALL POINTS OF CONTACTS *****
companiesRouter.get('/all-contacts', async (req, res) => {
    try {
        const companiesPoc = await Company.find({}, 'pointOfContacts -_id')
        const allContacts = companiesPoc
            .map((company) =>
                Array.isArray(company.pointOfContacts)
                    ? company.pointOfContacts
                    : [],
            )
            .flat()

        res.json({ allContacts })
    } catch (error) {
        console.error('Error fetching point of contactS:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = companiesRouter
