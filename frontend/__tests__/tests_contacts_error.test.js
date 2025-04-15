import contactsService from '../src/services/contacts.js'
import axios from 'axios'

jest.mock('axios')

describe('Contacts Service Error Handling', () => {
    
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('getAll handles GET error and returns empty array', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'))

        const result = await contactsService.getAll()

        expect(result).toEqual([])
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/contacts')
    })

    test('getContact handles error and returns empty array', async () => {
        axios.get.mockRejectedValue(new Error('Not Found'))

        const result = await contactsService.getContact(42)

        expect(result).toEqual([])
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/contacts/42')
    })

    test('createContact handles POST error and throws', async () => {
        axios.post.mockRejectedValue(new Error('Create failed'))

        await expect(contactsService.createContact({ name: 'John Doe' }))
            .rejects.toThrow('Create failed')

        expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/contacts', { name: 'John Doe' })
    })

    test('updateContact handles PUT error and returns empty array', async () => {
        axios.put.mockRejectedValue(new Error('Update failed'))

        const result = await contactsService.updateContact(1, { name: 'Jane Doe' })

        expect(result).toEqual([])
        expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/contacts/1', { name: 'Jane Doe' })
    })

    test('deleteContact handles DELETE error and returns empty array', async () => {
        axios.delete.mockRejectedValue(new Error('Delete failed'))

        const result = await contactsService.deleteContact(7)

        expect(result).toEqual([])
        expect(axios.delete).toHaveBeenCalledWith('http://localhost:3001/contacts/7')
    })
})
