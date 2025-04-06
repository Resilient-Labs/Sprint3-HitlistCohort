import axios from 'axios'
const baseUrl = `http://localhost:3001/companies`

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        console.log(response.data)
        return Array.isArray(response.data) ? response.data : []
    } catch (error) {
        console.error('GET error', error)
        return {success: false, message: 'Failed to fetch data from server'}
    }
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)

    return request
        .then((response) => {
            console.log(response)
            return {success: true, data: response.data , message: 'Operation Successful'}
        })
        .catch((error) => {
            console.error('POST error', error)
            throw error
        })
}

const update = (id, updatedCompany) => {

    if (!updatedCompany) {
        console.error('Update failed: No data provided');
        return Promise.reject('No company updating data provided');
    }

    const request = axios.put(`${baseUrl}/${id}`, updatedCompany)
    return request
        .then((response) => {
            return {success: true, data: response.data , message: 'Operation Successful'}
        })
        .catch((error) => {
            console.error('PUT error', error)
            return {success: false, message: 'Failed to Edit data'}
        })
}

const remove = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => {
            return {success: true, data: response.data , message: 'Operation Successful'}
        })
        .catch((error) => {
            console.error('DELETE error', error)
            return {success: false, message: 'Failed to delete data from server'}
        })
}

const getById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data
    } catch (error) {
        console.error('GET by ID error', error)
        return null
    }
}

export default {
    getAll,
    create,
    update,
    remove,
    getById
}
