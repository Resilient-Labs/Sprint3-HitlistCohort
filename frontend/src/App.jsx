import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useEffect, useState } from 'react'
import companyService from './services/company'

function App() {
    const [data, setData] = useState([])
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        const getCompanies = async () => {
            const response = await companyService.getAll()
            setData(response)
        }
        getCompanies()
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <CompanyList data={data} />
            <ContactList
                contacts={data?.map((company) => company.contact) || []}
            />
            <CompanyForm />
        </div>
    )
}

export default App
