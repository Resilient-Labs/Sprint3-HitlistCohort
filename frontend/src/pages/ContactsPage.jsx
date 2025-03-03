import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'

const Contacts = ({ contacts }) => {
    return (
        <>
            <Navbar />
            <div>Contacts Page</div>
            <ContactList contacts={contacts} />
        </>
    )
}

export default Contacts
