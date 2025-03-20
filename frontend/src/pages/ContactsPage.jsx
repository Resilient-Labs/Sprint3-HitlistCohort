import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'

import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

const Contacts = ({ contacts }) => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div
            style={{
                backgroundColor: darkMode ? '#A9A9A9' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
            }}
        >
            <Navbar />
            <div>Contacts Page</div>
            <ContactList contacts={contacts} />
        </div>
    )
}

export default Contacts
