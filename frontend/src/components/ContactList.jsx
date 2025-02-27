import './ContactList.css'

const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2 className="contacts-header">Points of Contact</h2>
            <ul className="contacts-list">
                {contacts.map((person, index) => (
                    <li key={index} className="contacts-items">
                        {person}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList
