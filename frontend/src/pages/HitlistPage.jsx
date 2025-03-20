import CompanyList from '../components/CompanyList'
import Navbar from '../components/Navbar'
import CompanyForm from '../components/CompanyForm'
import { DarkModeContext } from '../contexts/DarkModeContext'
import { useContext } from 'react'

const HitlistPage = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <Navbar />
            <CompanyForm />
            <CompanyList />
        </div>
    )
}

export default HitlistPage
