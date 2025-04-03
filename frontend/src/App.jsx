import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useContext } from 'react'
import CompanyDashboard from './components/companyDashboard/companyDashboard.jsx'
import { DarkModeContext } from './contexts/DarkModeContext'
import { useCompany } from './contexts/CompanyContext/CompanyContext.jsx'
import LoginPage from './pages/LoginPage.jsx'


import { AuthContext } from './contexts/AuthContext'
import { useState } from 'react'

function App() {
    const { isAuthenticated } = useContext(AuthContext)
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    const { companies } = useCompany()

    return (
        <div className={darkMode ? 'app-dark' : 'app-light'}>
            
            {!isAuthenticated ? (
                <LoginPage/>
    
            ) : (

                <>
                
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <CompanyList data={companies} />
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
