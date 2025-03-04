import axios from "axios";
const baseUrl = `http://localhost:3001` // currently only one Contacts endpoint /all-contacts, baseUrl set to this accordingly

const getAll = async () => {
    try {
        const response = await axios.get(`${baseUrl}/all-contacts`)
        return Array.isArray(response.data.allContacts) ? response.data.allContacts : []
    } catch (error) {
        console.error('GET error with contacts', error)
        return []
    }
}

export default { getAll }
