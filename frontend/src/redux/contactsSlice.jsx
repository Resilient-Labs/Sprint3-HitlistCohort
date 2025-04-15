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
                Contacts : action.payload
            }
        }, 
        addContacts: (state, action) => {
                const newContacts = action.payload
                return {
                    ...state,
                    contacts : [...state.contacts , newContacts],
                }
            }, 
        deleteContactsById: (state, action) => {
                const id = action.payload
                return {
                    ...state,
                    contacts : state.contacts .filter(
                        (contacts) => contacts._id !== id
                    ),
                }
            }, 
        sortContacts : (state, action) => {
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
  
