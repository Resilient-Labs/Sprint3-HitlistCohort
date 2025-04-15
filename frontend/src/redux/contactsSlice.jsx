import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts:[]
    },
    reducers: {
        setContactsInitialState: (state, action) => {
            return {
                ...state, 
                contacts : action.payload
            }
        }, 
        addCompany: (state, action) => {
                const newCompany = action.payload
                return {
                    ...state,
                    contacts : [...state.contacts , newCompany],
                }
            }, 
        deleteCompanyById: (state, action) => {
                const id = action.payload
                return {
                    ...state,
                    contacts : state.contacts .filter(
                        (company) => company._id !== id
                    ),
                }
            }, 
        sortcontacts : (state, action) => {
                const { columnKey, order } = action.payload
                return {
                    ...state,
                    contacts: state.contacts .sort((a, b) => {
                        let valueA = a[columnKey]?.toLowerCase() || ''
                        let valueB = b[columnKey]?.toLowerCase() || ''
                        return order === 'asc'
                            ? valueA.localeCompare(valueB)
                            : valueB.localeCompare(valueA)
                    }),
                }
            }
    }
  })
  

export const {
    setContactsInitialState,
    addContact,
    deleteContactById,
    sortContacts ,
  } = contactsSlice.actions
  
export default contactsSlice.reducer
  
