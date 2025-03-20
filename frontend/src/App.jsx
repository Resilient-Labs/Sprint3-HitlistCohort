import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useEffect, useState } from 'react'
import companyService from './services/company'
import CompanyDashboard from './components/companyDashboard/companyDashboard.jsx'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getCompanies = async () => {
            const response = await companyService.getAll()
            setData(response)
        }
        getCompanies()
    }, [])

    return (
        <>
            <Navbar />
            <CompanyList data={data} />
            <CompanyDashboard />
            <ContactList
                contacts={data?.map((company) => company.contact) || []}
            />
            <CompanyForm />
        </>
    )
}

export default App
