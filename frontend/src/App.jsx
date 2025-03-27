import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useContext } from 'react'
import CompanyDashboard from './components/companyDashboard/companyDashboard.jsx'
import { DarkModeContext } from './contexts/DarkModeContext'
import { useCompany } from './contexts/CompanyContext/CompanyContext.jsx'

import { useState } from 'react'

function App() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    const { companies } = useCompany()


   

    return (
        <div className={darkMode ? 'app-dark' : 'app-light'}>
            
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <CompanyList data={companies} />
            <CompanyDashboard applications={companies} />
            <ContactList
                contacts={companies?.map((company) => company.contact)}
            />
            <CompanyForm />
        </div>
    )
}

export default App
