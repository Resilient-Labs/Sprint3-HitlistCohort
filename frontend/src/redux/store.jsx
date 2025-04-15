import { configureStore } from '@reduxjs/toolkit'
import companyReducer from './companySlice'
import contactsReducer from './contactsSlice'

/* 
    TODO: No slices have been created yet. The commented out slices are just here as an example of next steps.
*/

const store = configureStore({
    reducer: {
        companies: companyReducer,
        contacts: contactsReducer
    },
})

export default store
