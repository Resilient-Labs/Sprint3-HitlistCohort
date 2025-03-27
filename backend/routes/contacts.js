const contactsRouter = require('express').Router()
const Contact = require('../models/contact.schema')

// ADD A CONTACT TO A COMPANY
contactsRouter.post('/', async (req, res) => {
    try {
        const { name, email, phone, companyId } = req.body

        if (!companyId) {
            return res.status(400).json({
                message: 'Company ID is required',
            })
        }

        const newContact = new Contact({ name, email, phone, companyId })
        await newContact.save()

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
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        )
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
