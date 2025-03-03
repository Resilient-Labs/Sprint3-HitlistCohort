import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useEffect, useState } from 'react'
import companyService from './services/company'

function App() {
    const [data, setData] = useState([])

    console.log(data)

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
            <ContactList contacts={data}/>
            <CompanyForm />
        </>
    )
}

export default App
