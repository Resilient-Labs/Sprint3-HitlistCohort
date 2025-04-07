import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useContext } from 'react'
import CompanyDashboard from './components/companyDashboard/companyDashboard.jsx'
import { DarkModeContext } from './contexts/DarkModeContext'
import LoginPage from './pages/LoginPage.jsx'
import { AuthContext } from './contexts/AuthContext'
import { useSelector } from 'react-redux'

function App() {
    const { isAuthenticated } = useContext(AuthContext)
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    const companies = useSelector((state) => state.companies)
    console.log("companies", companies)
    return (
        <div className={darkMode ? 'app-dark' : 'app-light'}>
            
            {!isAuthenticated ? (
                <LoginPage/>
    
            ) : (

                <>
                
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <CompanyList
                    companies={companies}
                    deleteCompany={deleteCompany}
                    sortCompanies={sortCompanies}
                />
                <CompanyDashboard applications={companies} />
                <ContactList
                    contacts={companies?.map((company) => company.contact)}
                />
                <CompanyForm />

                </>

            )}
        
        </div>
    )
}

export default App
