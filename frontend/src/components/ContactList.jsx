import './ContactList.css'

const ContactList = ({ contacts }) => {
    console.log('data:', contacts)

    const processPointOfContacts = (pointOfContacts) => {
        if (!pointOfContacts) return []
        if (Array.isArray(pointOfContacts))
            return pointOfContacts.filter((name) => name.trim() !== '')
        if (typeof pointOfContacts === 'string')
            return pointOfContacts
                .split(',')
                .map((name) => name.trim())
                .filter((name) => name !== '')
        return []
    }

    const validContacts = contacts
        .map((contact) => ({
            ...contact,
            pointOfContacts: processPointOfContacts(contact.pointOfContacts),
        }))
        .filter((contact) => contact.pointOfContacts.length > 0)

    return (
        <div>
            <h2 className="contacts-header">Points of Contact</h2>
            <ul className="contacts-list">
                {validContacts.length === 0 ? (
                    <li>No contacts with valid points of contact</li>
                ) : (
                    validContacts.map((contact) => (
                        <li key={contact._id} className="contacts-items">
                            <p>
                                Point of Contact:{' '}
                                {contact.pointOfContacts.join(', ')}
                            </p>
                            <strong>{contact.name}</strong>
                            <p>Status: {contact.status}</p>
                            <p>Notes: {contact.notes}</p>
                            <a
                                href={contact.applicationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Application Link
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default ContactList
