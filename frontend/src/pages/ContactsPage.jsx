import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'

import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

import { AuthContext } from '../contexts/AuthContext'
import LoginPage from '../pages/LoginPage.jsx'


const Contacts = ({ contacts }) => {
    const { isAuthenticated } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)

    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            
            { !isAuthenticated ? ( <LoginPage/>
            ) : (
            <>
            
            <Navbar />
            <div>Contacts Page</div>
            <ContactList contacts={contacts} />
            
            </>) }

        </div>
    )
}

export default Contacts
