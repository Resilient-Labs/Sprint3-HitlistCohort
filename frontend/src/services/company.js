import axios from 'axios'

const API_URL = 'http://localhost:3001/companies'

export const fetchCompanies = async () => {
  try{
    const response = await axios.get(API_URL)
    return Array.isArray(response.data) ? response.data : []
  } catch (err) {
    console.error("Error fetching companies:", err)
    return []
  }
}