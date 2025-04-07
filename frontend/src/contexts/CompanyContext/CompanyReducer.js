import {
    SET_INITIAL_STATE,
    DELETE_COMPANY_BY_ID,
    SORT_COMPANIES,
    ADD_COMPANY,
} from './constants'

//we're going to refactor this to use redux toolkit

const companyReducer = (state, action) => {
    switch (action.type) {
        case SET_INITIAL_STATE: {
            return {
                ...state,
                companies: action.payload,
            }
        }
        case ADD_COMPANY: {
            const newCompany = action.payload
            return {
                ...state,
                companies: [...state.companies, newCompany],
            }
        }
        case DELETE_COMPANY_BY_ID: {
            const id = action.payload
            return {
                ...state,
                companies: state.companies.filter(
                    (company) => company._id !== id
                ),
            }
        }
        case SORT_COMPANIES: {
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
        default:
            return state
    }
}

export default companyReducer
