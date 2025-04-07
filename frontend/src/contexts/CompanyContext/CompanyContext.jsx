import {
    createContext,
    useReducer,
    useMemo,
    useContext,
    useEffect,
    useCallback,
} from 'react'
import companyService from '../../services/company'

const CompanyContext = createContext({})

const CompanyProvider = ({ children }) => {
    const initialState = useMemo(
        () => ({
            companies: [],
        }),
        []
    )
    const [state, dispatch] = useReducer(companyReducer, initialState)

    const setCompanies = useCallback(
        (data) =>
            dispatch({
                type: SET_INITIAL_STATE,
                payload: data,
            }),
        []
    )
    const createNewCompany = useCallback(async (data) => {
        try {
            const company = await companyService.create(data)
            dispatch({
                type: ADD_COMPANY,
                payload: company,
            })
            return { success: true, message: 'Operation Successful' } 
            
        } catch (error) {
            console.error('Error creating company:', error)
            return { success: false, message: 'Failed to add company to database' }
        }
    }, [])

    const deleteCompany = useCallback(
        (id) =>
            dispatch({
                type: DELETE_COMPANY_BY_ID,
                payload: id,
            }),
        []
    )

    const sortCompanies = useCallback(
        (columnKey, order) =>
            dispatch({
                type: SORT_COMPANIES,
                payload: {
                    columnKey,
                    order,
                },
            }),
        []
    )

    const value = useMemo(
        () => ({ ...state, deleteCompany, sortCompanies, createNewCompany }),
        [state, deleteCompany, sortCompanies, createNewCompany]
    )


    return (
        <CompanyContext.Provider value={value}>
            {children}
        </CompanyContext.Provider>
    )
}

const useCompany = () => {
    const context = useContext(CompanyContext)

    if (context === undefined) {
        throw new Error('useCompany must be used within a CompanyProvider')
    }

    return context
}

export { CompanyProvider, useCompany }
