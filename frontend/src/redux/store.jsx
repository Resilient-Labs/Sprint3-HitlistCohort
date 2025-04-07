import { configureStore } from '@reduxjs/toolkit'
import companySlice from './companySlice'

/* 
    TODO: No slices have been created yet. The commented out slices are just here as an example of next steps.
*/

const store = configureStore({
    reducer: {
        companies: companySlice.reducer
    },
})

export default store
