import { createSlice } from '@reduxjs/toolkit'

const companySlice = createSlice({
    name: 'companies',
    initialState: {
        companies:[]
    },
    reducers: {
        setInitialState: (state, action) => {
            return {
                ...state, 
                companies: action.payload
            }
        }, 
        addCompany: (state, action) => {
                const newCompany = action.payload
                return {
                    ...state,
                    companies: [...state.companies, newCompany],
                }
            }, 
        deleteCompanyById: (state, action) => {
                const id = action.payload
                return {
                    ...state,
                    companies: state.companies.filter(
                        (company) => company._id !== id
                    ),
                }
            }, 
        sortCompanies: (state, action) => {
                const { columnKey, order } = action.payload
                return {
                    ...state,
                    companies: state.companies.sort((a, b) => {
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
    setInitialState,
    addCompany,
    deleteCompanyById,
    sortCompanies,
  } = companySlice.actions
  
export default companySlice.reducer
  
