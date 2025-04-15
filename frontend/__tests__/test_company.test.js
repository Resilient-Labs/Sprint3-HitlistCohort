import companyService from '../src/services/company.js'
import axios from 'axios'

jest.mock('axios')

describe('Company Service Error Handling', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('getAll handles GET error and returns fallback object', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'))

        const result = await companyService.getAll()

        expect(result).toEqual({ success: false, message: 'Failed to fetch data from server' })
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/companies')
    })

    test('create handles POST error and throws', async () => {
        axios.post.mockRejectedValue(new Error('Server down'))

        await expect(companyService.create({ name: 'Test Co' }))
            .rejects.toThrow('Server down')

        expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/companies', { name: 'Test Co' })
    })

    test('update handles missing data error', async () => {
        const result = await companyService.update(1, null).catch(e => e)
        expect(result).toBe('No company updating data provided')
    })

    test('update handles PUT error and returns fallback object', async () => {
        axios.put.mockRejectedValue(new Error('Database error'))

        const result = await companyService.update(1, { name: 'Updated Co' })

        expect(result).toEqual({ success: false, message: 'Failed to Edit data' })
        expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/companies/1', { name: 'Updated Co' })
    })

    test('remove handles DELETE error and returns fallback object', async () => {
        axios.delete.mockRejectedValue(new Error('Delete failed'))

        const result = await companyService.remove(5)

        expect(result).toEqual({ success: false, message: 'Failed to delete data from server' })
        expect(axios.delete).toHaveBeenCalledWith('http://localhost:3001/companies/5')
    })

    test('getById handles GET by ID error and returns null', async () => {
        axios.get.mockRejectedValue(new Error('Not found'))

        const result = await companyService.getById(42)

        expect(result).toBeNull()
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/companies/42')
    })
})
