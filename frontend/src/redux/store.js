import { configureStore } from '@reduxjs/toolkit'
// import { companiesSlice } from './companiesSlice'
// import { contactsSlice } from './contactsSlice'

/* 
    TODO: No slices have been created yet. The commented out slices are just here as an example of next steps.
*/

const store = configureStore({
    reducer: {
        // companies: companiesSlice.reducer,
        // contacts: contactsSlice.reducer,
    },
})

export default store
