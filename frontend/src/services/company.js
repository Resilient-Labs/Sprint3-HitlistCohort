import axios from 'axios'
const baseUrl = `http://localhost:3001/companies`

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    return Array.isArray(response.data) ? response.data : []
  } catch (error) {
    console.error('GET error', error)
    return []
  }
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error('POST error', error)
    })
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error('PUT error', error)
    })
}

const remove = (id) => {
  axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('DELETE error', error)
    })
}

export default {
  getAll,
  create,
  update,
  remove,
}
