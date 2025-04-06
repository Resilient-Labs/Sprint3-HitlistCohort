const contactsRouter = require('express').Router()
const Contact = require('../models/contact.schema')

//GET ALL CONTACTS
contactsRouter.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find({}).populate('company', { name: 1 })
        res.json({ allContacts: contacts })
    } catch (error) {
        console.error('Error getting contacts', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// ADD A CONTACT TO A COMPANY
contactsRouter.post('/', async (req, res) => {
    try {
        const { name, role, email, linkedIn, company, lastContactDate } =
            req.body

        if (!company) {
            return res.status(400).json({
                message: 'Company ID is required',
            })
        }

        const newContact = new Contact({
            name,
            role,
            email,
            linkedIn,
            company: company || null,
            lastContactDate: lastContactDate ? new Date(lastContactDate) : null,
        })
        await newContact.save()

        console.log('Contact saved:', newContact)
        res.status(201).json(newContact)
    } catch (error) {
        console.error('Error adding contact:', error)
        res.status(500).json({ error: 'Internal Server Error ' })
    }
})

// GET CONTACT DETAILS
contactsRouter.get('/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Contact ID is required' })
        }
        const contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' })
        }
        res.json(contact)
    } catch (error) {
        console.error('Error fetching contact:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// UPDATE CONTACT DETAILS
contactsRouter.put('/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Contact ID is required' })
        }

        const contactData = { ...req.body }

        if (contactData.company && typeof contactData.company === 'string') {
            contactData.company = contactData.company
        }

        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            contactData,
            { new: true },
        ).populate('company')

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' })
        }
        res.json(updatedContact)
    } catch (error) {
        console.error('Error updating contact:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// DELETE CONTACTS
contactsRouter.delete('/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Contact ID is required' })
        }
        const deletedContact = await Contact.findByIdAndDelete(req.params.id)

        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' })
        }

        res.json({ message: 'Contact deleted', deletedContact })
    } catch (error) {
        console.error('Error deleting contact:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = contactsRouter
