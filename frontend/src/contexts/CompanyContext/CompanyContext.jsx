import {
    createContext,
    useReducer,
    useMemo,
    useContext,
    useEffect,
    useCallback,
} from 'react'
import companyReducer from './CompanyReducer'

import companyService from '../../services/company'
import {
    SET_INITIAL_STATE,
    DELETE_COMPANY_BY_ID,
    SORT_COMPANIES,
    ADD_COMPANY,
} from './constants'

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
        const company = await companyService.create(data)
        dispatch({
            type: ADD_COMPANY,
            payload: company,
        })
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

    useEffect(() => {
        const getCompanies = async () => {
            const response = await companyService.getAll()
            setCompanies(response)
        }
        getCompanies()
    }, [])

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
