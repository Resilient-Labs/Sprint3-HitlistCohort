import CompanyList from '../components/CompanyList'
import Navbar from '../components/Navbar'
import CompanyForm from '../components/CompanyForm'
import { DarkModeContext } from '../contexts/DarkModeContext'
import { useContext } from 'react'
import { useCompany } from '../contexts/CompanyContext/CompanyContext'
import { AuthContext } from '../contexts/AuthContext'
import LoginPage from '../pages/LoginPage'

const HitlistPage = () => {
    const { isAuthenticated } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)
    const { companies, deleteCompany, sortCompanies } = useCompany()

    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            {!isAuthenticated ? ( <LoginPage/> ) : 
            (   <>
                    <Navbar />
                    <CompanyForm />
                    <CompanyList
                        companies={companies}
                        deleteCompany={deleteCompany}
                        sortCompanies={sortCompanies}
                    />
                </> 
            )}
           
        </div>
    )
}

export default HitlistPage
