import './App.css'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import ContactList from './components/ContactList'
import CompanyForm from './components/CompanyForm'
import { useEffect, useState, useContext } from 'react'
import companyService from './services/company'
import { DarkModeContext } from './contexts/DarkModeContext'
// import './GlobalStyles.css'

function App() {
    const [data, setData] = useState([])
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    console.log(data)

    useEffect(() => {
        const getCompanies = async () => {
            const response = await companyService.getAll()
            setData(response)
        }
        getCompanies()
    }, [])

    return (
        <div className={darkMode ? 'app-dark' : 'app-light'}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <CompanyList data={data} />
            <ContactList contacts={data}/>
            <CompanyForm />
        </>  
        </div>
    )
}

export default App
