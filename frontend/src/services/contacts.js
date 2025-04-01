import axios from 'axios'
const baseUrl = `http://localhost:3001/contacts` // currently only one Contacts endpoint /all-contacts, baseUrl set to this accordingly

const getAll = async () => {
    try {
        const response = await axios.get(`${baseUrl}`)
        return Array.isArray(response.data.allContacts)
            ? response.data.allContacts
            : []
    } catch (error) {
        console.error('GET error with contacts', error)
        return []
    }
}

const getContact = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data
    } catch (error) {
        console.error('Error with getting contact', error)
        return []
    }
}

const createContact = async (contact) => {
    try {
        const response = await axios.post(`${baseUrl}`, contact)
        return response.data
    } catch (error) {
        console.error(
            'Error creating contact:',
            error.response?.data || error.message
        )
        throw error
    }
}

const updateContact = async (id, contact) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, contact)
        return response.data
    } catch (error) {
        console.error('Error with updating contact', error)
        return []
    }
}

const deleteContact = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response.data
    } catch (error) {
        console.error('Error with deleting contact', error)
        return []
    }
}
export default {
    getAll,
    getContact,
    createContact,
    updateContact,
    deleteContact,
}
