import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'
import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

const Contacts = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <Navbar />
            <ContactList />
        </div>
    )
}

export default Contacts
